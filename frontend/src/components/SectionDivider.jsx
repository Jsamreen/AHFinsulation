import React from "react";
import { motion } from "framer-motion";

const styles = {
  wave: [
    "M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z",
    "M0,20 C400,140 800,-40 1200,80 L1200,0 L0,0 Z",
    "M0,40 C500,120 700,-40 1200,60 L1200,0 L0,0 Z",
  ],
  tilt: [
    "M0,0 L1200,50 L1200,0 L0,0 Z",
    "M0,20 L1200,70 L1200,0 L0,0 Z",
    "M0,40 L1200,90 L1200,0 L0,0 Z",
  ],
  slope: [
    "M0,0 L1200,80 L1200,0 L0,0 Z",
    "M0,20 L1200,100 L1200,0 L0,0 Z",
    "M0,40 L1200,120 L1200,0 L0,0 Z",
  ],
  zigzag: [
    "M0,40 L200,80 L400,40 L600,80 L800,40 L1000,80 L1200,40 L1200,0 L0,0 Z",
    "M0,60 L200,100 L400,60 L600,100 L800,60 L1000,100 L1200,60 L1200,0 L0,0 Z",
    "M0,80 L200,120 L400,80 L600,120 L800,80 L1000,120 L1200,80 L1200,0 L0,0 Z",
  ],
  blob: [
    "M0,100 Q300,20 600,80 T1200,100 L1200,0 L0,0 Z",
    "M0,120 Q400,40 800,100 T1200,120 L1200,0 L0,0 Z",
  ],
};

export default function SectionDivider({
  height = 100,
  flip = false,
  style = "wave", // choose: wave | tilt | slope | zigzag | blob
  className = "",
  animated = false, // enable smooth wave animation
}) {
  const paths = styles[style] || styles.wave;

  const colors = [
    { fill: "url(#grad1)", opacity: 1 },
    { fill: "url(#grad2)", opacity: 0.7 },
    { fill: "url(#grad3)", opacity: 0.5 },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        className="relative block w-full"
        style={{ height: `${height}px` }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        {/* Gradients */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A1E2D" />
            <stop offset="100%" stopColor="#12B7F5" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#12B7F5" />
            <stop offset="100%" stopColor="#f5fbff" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f5fbff" />
            <stop offset="100%" stopColor="#12B7F5" />
          </linearGradient>
        </defs>

        {paths.map((d, i) =>
          animated ? (
            <motion.path
              key={i}
              d={d}
              {...colors[i]}
              animate={{
                d: [
                  d,
                  d.replace(/20|40|60|80/g, (num) => Number(num) + 20), // wiggle
                  d,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />
          ) : (
            <path key={i} d={d} {...colors[i]} />
          )
        )}
      </svg>
    </div>
  );
}
