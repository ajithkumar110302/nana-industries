"use client";

import { motion } from "motion/react";

const MARQUEE_ITEMS = [
  "Energy Efficient",
  "40+ Years Legacy",
  "Custom Solutions",
  "ISO Certified",
  "Zero Maintenance",
  "Thanjavur's Finest",
];

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-section">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span>{t}</span>
            <div className="dot" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
