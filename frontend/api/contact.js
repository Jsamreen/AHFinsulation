// frontend/api/contact.js
import nodemailer from "nodemailer";

// Ensure Serverless (not Edge)
export const config = { runtime: "nodejs22.x" };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, service, budget, suburb, message, company, consent } = body;

    // Honeypot + validation (mirrors your frontend)
    if (company) return res.json({ ok: true });
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim() || !consent) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }
    if (message.length > 1200) {
      return res.status(400).json({ ok: false, error: "Message too long" });
    }

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port,
      secure: port === 465,           // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,  // e.g. samreenjaveria19@gmail.com or info@yourdomain
        pass: process.env.SMTP_PASS,  // app password / mailbox password
      },
      // requireTLS is safe for 587; Gmail/365 both support STARTTLS
      requireTLS: port === 587,
    });

    const subject = `AHF Insulation Enquiry — ${service || "General"} — ${name}`;
    const text =
      `New enquiry from the website:\n\n` +
      `Name:    ${name}\n` +
      `Email:   ${email}\n` +
      `Phone:   ${phone}\n` +
      `Service: ${service || "-"}\n` +
      `Budget:  ${budget || "-"}\n` +
      `Area:    ${suburb || "-"}\n\n` +
      `Message:\n${message}\n`;

    await transporter.sendMail({
      from: `"AHF Insulation Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("contact error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
}