// src/pages/About.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SectionDivider from "../components/SectionDivider";
import { CheckCircle, Shield, Leaf, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const images = [
    { src: "/About.png", alt: "Wall wrap & batts" },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 700,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      {/* ---------- Section 1: Who We Are + Carousel ---------- */}
      <section className="relative bg-brand-navy text-white">
        <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-blue text-sm font-semibold mb-4 tracking-wide">
              About AHF Insulation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Melbourne’s Insulation Partner for{" "}
              <span className="text-brand-blue">Comfort & Efficiency</span>
            </h1>

            <p className="mt-5 text-lg text-white/90">
              Based in <b>Truganina, VIC</b>, we serve homes and businesses
              across Melbourne with premium supply & install services — from
              wall wrap and insulation batts to safe removal and clean
              upgrades. Our crew focuses on neat finishes, energy savings, and
              long-term performance.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-blue shrink-0" />
                <span>Residential & commercial expertise, tailored to your site.</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-brand-blue shrink-0" />
                <span>Quality materials that meet Australian standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-brand-blue shrink-0" />
                <span>Cleaner installs, healthier spaces, lower bills.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-blue">
                Get a Free Quote
              </Link>
              <a href="tel:+61452275255" className="text-white/80 hover:text-white underline">
                Call 0452 275 255
              </a>
            </div>
          </motion.div>

          {/* Right: Carousel framed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Decorative brand shapes behind frame */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-brand-blue/30 rotate-6 rounded-xl blur-[1px]" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-2xl" />
            {/* Framed slider */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-brand-blue/80 bg-brand-mist">
              <Slider {...sliderSettings}>
                {images.map((img, i) => (
                  <div key={i} className="h-[420px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[420px] object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
        <SectionDivider style="wave" height={140} />
      </section>

      {/* ---------- Section 2: What We Deliver + Stats ---------- */}
      <section className="relative bg-brand-mist">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
              What We Deliver
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              From first site check to final clean-up, we keep things tidy,
              safe, and on-time. Expect transparent quotes, respectful crews,
              and installs that feel good from day one.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-7 h-7 text-brand-blue" />,
                title: "Quick Turnarounds",
                desc: "Fast scheduling and efficient installs so you feel the difference sooner.",
              },
              {
                icon: <Shield className="w-7 h-7 text-brand-blue" />,
                title: "Trusted Quality",
                desc: "Compliant materials and careful workmanship for lasting performance.",
              },
              {
                icon: <Leaf className="w-7 h-7 text-brand-blue" />,
                title: "Cleaner, Healthier Homes",
                desc: "Less dust, better comfort, and smart energy savings all year round.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  {f.icon}
                  <h3 className="text-xl font-semibold text-brand-navy">{f.title}</h3>
                </div>
                <p className="mt-4 text-gray-700">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick stats band */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "Founded", v: "2021" },
              { k: "Base", v: "Truganina, VIC" },
              { k: "Focus", v: "Residential & Commercial" },
              { k: "Phone", v: "0452 275 255" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * i }}
                className="bg-white/60 rounded-xl p-5 text-center shadow-sm"
              >
                <div className="text-sm uppercase tracking-wide text-brand-navy/70">{s.k}</div>
                <div className="mt-2 text-lg font-bold text-brand-navy">{s.v}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-block px-8 py-3 bg-brand-blue text-white rounded-lg shadow-md hover:bg-brand-navy transition">
              Talk to an Expert
            </Link>
          </div>
        </div>
        <SectionDivider style="slope" height={120} flip />
      </section>
    </div>
  );
}
