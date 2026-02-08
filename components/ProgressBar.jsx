"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50 });

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX, width: "100%", transformOrigin: "left" }}
    />
  );
}
