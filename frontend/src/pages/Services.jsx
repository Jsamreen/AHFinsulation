import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionDivider from "../components/SectionDivider";
import { Sun, Volume2, Recycle, Flame, Wrench, ClipboardCheck, Truck, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Thermal Ceiling Insulation",
      desc: "Keep your home warm in winter & cool in summer with our high-performance ceiling batts.",
      icon: <Sun className="w-10 h-10 text-white" />,
      color: "from-brand-blue to-brand-navy"
    },
    {
      title: "Acoustic Wall Insulation",
      desc: "Block unwanted noise and create peaceful indoor spaces with acoustic wall solutions.",
      icon: <Volume2 className="w-10 h-10 text-white" />,
      color: "from-brand-navy to-brand-blue"
    },
    {
      title: "Eco-Friendly Solutions",
      desc: "Sustainable insulation designed to save energy, reduce bills, and protect the planet.",
      icon: <Recycle className="w-10 h-10 text-white" />,
      color: "from-green-400 to-brand-blue"
    },
    {
      title: "Fire-Resistant Insulation",
      desc: "Boost safety with insulation materials engineered to withstand high heat and fire risks.",
      icon: <Flame className="w-10 h-10 text-white" />,
      color: "from-red-500 to-orange-400"
    },
    {
      title: "Old Insulation Removal",
      desc: "Safe removal and disposal of outdated insulation to prepare for fresh, efficient installs.",
      icon: <Wrench className="w-10 h-10 text-white" />,
      color: "from-gray-500 to-brand-blue"
    }
  ];

  const process = [
    {
      step: "Step 1",
      title: "Free Consultation",
      desc: "Our experts visit your home or site, inspect, and provide tailored insulation advice.",
      icon: <ClipboardCheck className="w-8 h-8 text-brand-blue" />
    },
    {
      step: "Step 2",
      title: "Professional Installation",
      desc: "We deliver high-quality insulation with certified installers and modern equipment.",
      icon: <Truck className="w-8 h-8 text-brand-blue" />
    },
    {
      step: "Step 3",
      title: "Post-Install Care",
      desc: "We ensure cleanup, safety checks, and long-term performance satisfaction for your home.",
      icon: <Home className="w-8 h-8 text-brand-blue" />
    }
    
  ];
    const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insulation Services Built For <span className="text-brand-blue">Comfort & Efficiency</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Choose from a wide range of premium insulation services designed to save you money,
            improve energy efficiency, and make your spaces healthier.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-8 py-3 rounded-lg bg-brand-blue hover:bg-white hover:text-brand-navy transition shadow-lg font-semibold"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="py-24 bg-brand-mist relative z-10">
        <motion.div
        className="absolute -top-10 -left-15 w-44 h-40 bg-brand-blue/50 rotate-12 z-1"
        whileHover={{ x: 10, y: -5, rotate: -8 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute -top-14 -left-10 w-44 h-40 bg-brand-navy/50 rotate-13 z-1"
        whileHover={{ x: 10, y: -5, rotate: -8 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-12"
          >
            Our Core Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, rotate: 1 }}
  transition={{ duration: 0.6, delay: i * 0.15 }}
  viewport={{ once: true }}
  className="relative w-full h-[320px] [perspective:1000px]"
>
  {/* inner flip container */}
  <div
    className={`absolute inset-0 rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] ${
      flipped === i ? "[transform:rotateY(180deg)]" : ""
    }`}
  >
    {/* FRONT */}
    <div
      className={`absolute inset-0 p-8 rounded-2xl text-white bg-gradient-to-r ${service.color} [backface-visibility:hidden]`}
    >
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-sm opacity-90">{service.desc}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 inline-block px-5 py-2 bg-white text-brand-navy rounded-lg font-medium shadow-md"
        onClick={() => setFlipped(flipped === i ? null : i)}
      >
        Learn More
      </motion.button>
    </div>

    {/* BACK */}
    <div className="absolute inset-0 p-8 rounded-2xl bg-white text-brand-navy [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-700">
        {service.detail ?? "We offer premium materials, expert installation, and clean finish for long-term comfort and savings."}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 inline-block px-5 py-2 bg-brand-blue text-white rounded-lg font-medium shadow-md"
        onClick={() => setFlipped(null)}
      >
        Go Back
      </motion.button>
    </div>
  </div>
</motion.div>
            ))}

        <motion.div
    className="absolute -bottom-14 -right-10 w-44 h-40 bg-brand-blue/50 rotate-12 z-1"
    whileHover={{ x: 10, y: -5, rotate: -8 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
    <motion.div
    className="absolute -bottom-12 -right-14 w-44 h-40 bg-brand-navy/50 rotate-13 z-1"
    whileHover={{ x: 10, y: -5, rotate: -8 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    ></motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS TIMELINE ---------------- */}
        
      <section className="py-24 bg-white">   
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-brand-navy mb-16"
          >
            Our Process
          </motion.h2>           
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-brand-mist p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center mx-3 relative"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{step.step}</h3>
                <h4 className="text-lg font-semibold text-brand-blue mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <SectionDivider style="slope" height={100} className="-mt-20 z-20" flip={true}/>
    </div>
  );
};

export default Services;
