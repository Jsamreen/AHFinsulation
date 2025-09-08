// frontend/api/contact.js
import nodemailer from "nodemailer";
export const config = { runtime: "nodejs22.x" };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  return res.json({ ok: true, msg: "contact endpoint is alive" });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    // Vercel usually parses JSON. Fallback if needed:
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const {
      name, email, phone, service, budget, suburb, message, company, consent
    } = body || {};

    // Honeypot + validation (mirrors your frontend)
    if (company) return res.json({ ok: true }); // silently drop bots
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim() || !consent) {
      return res.status(400).json({ ok: false, error: "Missing required fields" }); 
    }
    if (message.length > 1200) {
      return res.status(400).json({ ok: false, error: "Message too long" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER, // info@ahfinsulation.com.au
        pass: process.env.SMTP_PASS, // mailbox/app password
      },
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
      from: `"AHF Insulation Website" <${process.env.SMTP_USER}>`, // send AS info@
      to: process.env.TO_EMAIL || process.env.SMTP_USER,          // receive at info@
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
