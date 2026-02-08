"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import Reveal from "./Reveal";

const STATS = [
  { target: 40, suffix: "+", label: "Years of Excellence" },
  { target: 2500, suffix: "+", label: "Projects Delivered" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
  { target: 15, suffix: "yr", label: "Product Warranty" },
];

function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="counter">
      {val.toLocaleString()}
    </span>
  );
}

export default function StatsSection() {
  return (
    <div className="stats-section">
      {STATS.map((s, i) => (
        <Reveal key={i} delay={i * 0.1} className="stat-item">
          <div className="stat-number">
            <Counter target={s.target} />
            <span className="suffix">{s.suffix}</span>
          </div>
          <div className="stat-label">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
