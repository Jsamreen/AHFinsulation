import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionDivider from "../components/SectionDivider";
import { Hammer, Home, Building2, Wrench, ChevronRight, ChevronLeft } from "lucide-react";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const slides = [
    { image: "/Hero_1.JPG" },
    { image: "/Hero_2.JPG" },
    { image: "/Hero_3.JPG" }
  ];

  const services = [
    { icon: <Hammer className="w-10 h-10 text-brand-blue" />, title: "Insulation Supply & Install", desc: "Complete solutions for residential and commercial insulation." },
    { icon: <Home className="w-10 h-10 text-brand-blue" />, title: "Wall Wrap & Insulation Batts", desc: "Energy-efficient wall wraps and batts for maximum comfort." },
    { icon: <Wrench className="w-10 h-10 text-brand-blue" />, title: "Old Insulation Removal", desc: "Safe removal and disposal of old or damaged insulation." },
    { icon: <Building2 className="w-10 h-10 text-brand-blue" />, title: "Commercial & Residential", desc: "Trusted by homeowners and builders across Melbourne." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
    appendDots: dots => (
      <div style={{ bottom: "20px" }}>
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-white/40 hover:bg-white transition"></div>
    )
  };

  // Taglines for animation
  const taglines = [
    "Smarter Homes. Lower Bills.",
    "Insulation That Pays for Itself",
    "15+ Years of Trusted Expertise",
    "Protecting Homes. Saving Energy.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Slider */}
      <div className="h-[90vh] relative">
        <div className="fixed inset-0 h-[90vh] w-full z-0">
        <Slider {...settings} className="h-full">
      {slides.map((slide, i) => (
        <div key={i} className="relative h-[100vh]">
          <img src={slide.image} alt="Hero Slide" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
    </Slider>
        {/* Overlay Heading + Animated Taglines */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20">
          <motion.h1
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* AHF */}
            <motion.span
                className="text-6xl md:text-7xl font-extrabold text-white tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                AHF
            </motion.span>

            {/* INSULATION*/}
            <motion.span
                className="text-2xl md:text-3xl font-bold tracking-[0.4em] text-brand-blue mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                INSULATION
            </motion.span>
            </motion.h1>


          <div className="mt-6 h-16 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="text-2xl md:text-4xl font-medium drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {taglines[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        
          
        </div>

        {/* Floating Arrow Button (right side) */}
        <button
          onClick={() => setShowOverlay(!showOverlay)}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/50 hover:bg-white/50 p-3 rounded-full shadow-lg transition z-50 "
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>

        {/* Overlay Section */}
        <motion.div
          className="absolute inset-0 z-40"
          initial={{ x: "100%", y: -50, opacity: 0 }}
          animate={showOverlay ? { x: 0, y: 0, opacity: 1 } : { x: "100%", y: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <section className="relative bg-[#7EC0E0] text-brand-navy h-full flex items-center">
            <div className="container mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
                <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
                <p className="mt-6 text-lg leading-relaxed">
                  With over <b>15 years of hands-on experience</b>, AHF Insulation is trusted by
                  homeowners, builders, and commercial clients across Melbourne.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  We don’t just install insulation — we deliver <b>comfort, energy savings, and long-term
                  reliability</b>. From safe <b>old insulation removal</b> to high-quality
                  <b> batts and wall wraps</b>, every job is carried out with precision and care.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Our commitment is simple: <b>make your spaces cooler in summer, warmer in winter, 
                  and healthier all year round</b>. That’s why more than <b>500+ clients</b> across Melbourne
                  continue to rely on us for their insulation needs.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center md:justify-end">
                <motion.img
                  src="/why_choose_us.png"
                  alt="Professional Insulation Installation"
                  className="rounded-2xl shadow-lg w-full md:w-4/5 object-cover"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                />
              </div>
            </div>
          </section>
        </motion.div>
        
      </div>
      
</div>
      {/* Services Section */}
      <section className="relative bg-brand-mist z-20 -mt-24">
        <SectionDivider style="slope" height={150} />
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide complete insulation solutions including{" "}
            <b>removal, new installs, ceiling dust extraction</b> and more —
            trusted across Melbourne for over 15 years.
          </p>
        
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center
                           shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              >
                <motion.div
                  className="bg-brand-navy/10 p-5 rounded-full mb-4"
                  whileHover={{ scale: 1.3, rotate: 12 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-brand-navy group-hover:text-brand-blue"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="mt-3 text-gray-600 group-hover:text-gray-800"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {service.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-12 inline-block px-8 py-3 bg-brand-blue text-white rounded-lg shadow-md hover:bg-brand-dark transition"
          >
            View All Services
          </Link>
        </div>
      </section>
      <SectionDivider style="slope" height={100} className="-mt-20 z-20" flip={true}/>

    </div>
  );
};

export default Hero;
