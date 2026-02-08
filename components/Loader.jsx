"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export default function Loader({ onDone }) {
  const letters = "Nana Industries".split("");

  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease }}
    >
      <div className="loader-text">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="loader-line"
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ delay: 0.5, duration: 1.5, ease }}
      />
    </motion.div>
  );
}
