// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Building2, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    company: "",       // honeypot
    consent: false,
  });

  const maxMessage = 800;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!/^[0-9 +()-]{8,}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.service) return "Please choose a service.";
    if (!form.message.trim() || form.message.length < 10) return "Tell us a little more about your project.";
    if (!form.consent) return "Please agree to the privacy notice.";
    // Honeypot
    if (form.company) return "Bot detected.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    setLoading(true);

    // ---- Replace this with your API / Email service / Netlify form, etc.
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We’ll get back to you shortly.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
        company: "",
        consent: false,
      });
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-blue/60" />
        <div className="container relative mx-auto px-6 py-24 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Let’s Talk <span className="text-brand-blue">Insulation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl mx-auto text-white/85 text-lg"
          >
            Tell us about your home or commercial project. We’ll recommend the best solution and a clear, fair quote.
          </motion.p>
        </div>

        {/* Decorative brand shapes */}
        <div className="pointer-events-none absolute -top-8 -right-10 h-40 w-40 rounded-2xl bg-white/10 blur-md" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rotate-12 rounded-3xl bg-brand-blue/30 blur-[2px]" />
      </section>

      {/* FORM + INFO */}
      <section className="relative bg-brand-mist py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* LEFT: Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-7 h-7 text-brand-blue" />
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Request a Quote</h2>
              </div>

              {status.message && (
                <div
                  className={`mb-5 rounded-lg p-4 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Citizen"
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 4xx xxx xxx"
                    type="tel"
                    required
                  />
                  <Select
                    label="Service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    options={[
                      "Thermal Ceiling Insulation",
                      "Acoustic Wall Insulation",
                      "Old Insulation Removal",
                      "Wall Wrap & Batts",
                      "Commercial Project",
                      "Other / Advice",
                    ]}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Select
                    label="Estimated Budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    options={["$0–$2k", "$2k–$5k", "$5k–$10k", "$10k+"]}
                  />
                  <Field
                    label="Postcode / Suburb (optional)"
                    name="suburb"
                    value={form.suburb || ""}
                    onChange={handleChange}
                    placeholder="3029 Truganina"
                  />
                </div>

                <div>
                  <Label>Project Details</Label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about the space, size, and any timelines…"
                      rows={6}
                      maxLength={maxMessage}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none ring-brand-blue/30 focus:ring-4 transition"
                      required
                    />
                    <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                      {form.message.length}/{maxMessage}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to the handling of my data according to the{" "}
                    <a href="/privacy" className="text-brand-blue underline">
                      Privacy Notice
                    </a>
                    .
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-brand-navy disabled:opacity-60"
                >
                  <Send className="h-5 w-5" />
                  {loading ? "Sending…" : "Send Message"}
                </motion.button>

                <p className="text-xs text-gray-400">
                  Protected by best practices. You can also email us directly at{" "}
                  <a href="mailto:info@ahfinsulation.com" className="text-brand-blue underline">
                    info@ahfinsulation.com
                  </a>
                  .
                </p>
              </form>
            </motion.div>

            {/* RIGHT: Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue p-[1px] shadow-xl">
                <div className="rounded-2xl bg-white p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-brand-blue" />
                    <h3 className="text-xl font-semibold text-brand-navy">Contact Details</h3>
                  </div>

                  <ul className="space-y-4 text-brand-navy">
                    <InfoRow
                      icon={<Phone className="w-5 h-5 text-brand-blue" />}
                      label="Phone"
                      value={<a href="tel:+61452275255" className="hover:underline">0452 275 255</a>}
                    />
                    <InfoRow
                      icon={<Mail className="w-5 h-5 text-brand-blue" />}
                      label="Email"
                      value={<a href="mailto:info@ahfinsulation.com" className="hover:underline">info@ahfinsulation.com</a>}
                    />
                    <InfoRow
                      icon={<MapPin className="w-5 h-5 text-brand-blue" />}
                      label="Address"
                      value={<span>Unit 19, 2 Fastline Dr, Truganina VIC 3029</span>}
                    />
                    <InfoRow
                      icon={<Clock className="w-5 h-5 text-brand-blue" />}
                      label="Hours"
                      value={<span>Mon–Sat: 6am–6pm</span>}
                    />
                  </ul>
                </div>
              </div>

              {/* Map (replace src with your own place link if desired) */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[16/9] bg-white">
                  <iframe
                    title="AHF Insulation - Location"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.322060960022!2d144.739!3d-37.807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad68a4b3f6b0001%3A0x0000000000000000!2sTruganina%20VIC%203029!5e0!3m2!1sen!2sau!4v1700000000000`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Small UI helpers ---------- */

function Label({ children }) {
  return (
    <label className="mb-2 block text-sm font-medium text-brand-navy/90">{children}</label>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", required = false }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none ring-brand-blue/30 focus:ring-4 transition"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none ring-brand-blue/30 focus:ring-4 transition"
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-brand-navy/60">{label}</div>
        <div className="mt-0.5 text-brand-navy">{value}</div>
      </div>
    </li>
  );
}
