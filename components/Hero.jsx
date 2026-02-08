"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-pattern" />
      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease }}
        >
          Premium uPVC Solutions — Since 1984
        </motion.div>
        <h1 className="hero-title">
          {[
            ["Crafting"],
            [<em key="em">Timeless</em>, " Windows"],
            ["& Doors"],
          ].map((line, li) => (
            <span className="line" key={li}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2.1 + li * 0.2, duration: 1.2, ease }}
                style={{ display: "inline-block" }}
              >
                {line.map((part, pi) => (
                  <span key={pi}>{part}</span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1, ease }}
        >
          Four decades of mastering the art of uPVC. Engineered for beauty,
          built for endurance, designed for the way you live.
        </motion.p>
        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1, ease }}
        >
          <a href="#products" className="btn-primary">
            Explore Collection →
          </a>
          <a href="#contact" className="btn-outline">
            Request Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
