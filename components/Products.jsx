"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    num: "01",
    title: "Casement Windows",
    desc: "Side-hinged elegance that opens wide for maximum ventilation and unobstructed views.",
    icon: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="24" y1="6" x2="24" y2="42" />
        <line x1="6" y1="24" x2="42" y2="24" />
      </>
    ),
  },
  {
    num: "02",
    title: "Sliding Windows",
    desc: "Effortless glide mechanism with smooth horizontal operation and space-saving design.",
    icon: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <line x1="24" y1="6" x2="24" y2="42" />
      </>
    ),
  },
  {
    num: "03",
    title: "Bay Windows",
    desc: "Architectural statement pieces that project outward, flooding interiors with natural light.",
    icon: <path d="M6 42 L24 6 L42 42 Z" />,
  },
  {
    num: "04",
    title: "Tilt & Turn",
    desc: "Dual-function innovation — tilt for ventilation, turn for full access and easy cleaning.",
    icon: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <circle cx="24" cy="24" r="8" />
      </>
    ),
  },
  {
    num: "05",
    title: "Sliding Doors",
    desc: "Grand panoramic openings that seamlessly connect your indoor spaces to the outdoors.",
    icon: (
      <>
        <rect x="6" y="10" width="36" height="32" rx="2" />
        <line x1="6" y1="26" x2="42" y2="26" />
      </>
    ),
  },
  {
    num: "06",
    title: "Fixed Glass",
    desc: "Frameless vision panels that maximize light entry and create stunning glass-to-glass aesthetics.",
    icon: (
      <>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <rect x="14" y="14" width="20" height="20" rx="1" />
      </>
    ),
  },
];

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDrawn(true), index * 250);
      return () => clearTimeout(t);
    }
  }, [inView, index]);

  return (
    <Reveal delay={index * 0.08}>
      <div ref={ref} className={`product-card${drawn ? " svg-drawn" : ""}`}>
        <div className="product-card-bg" />
        <div className="product-card-arrow">
          <svg viewBox="0 0 24 24">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
        <div className="product-card-content">
          <div className="product-card-icon">
            <svg viewBox="0 0 48 48">{product.icon}</svg>
          </div>
          <div className="product-card-num">{product.num}</div>
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="products-header">
        <Reveal>
          <div className="section-tag">Our Collection</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Precision-crafted <em>uPVC</em>
            <br />
            for modern living
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="section-desc">
            Every product is engineered to perfection — combining thermal
            efficiency, acoustic insulation, and timeless aesthetics.
          </p>
        </Reveal>
      </div>
      <div className="products-grid">
        {PRODUCTS.map((p, i) => (
          <ProductCard key={i} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
