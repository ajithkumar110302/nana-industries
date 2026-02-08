"use client";

import Reveal from "./Reveal";

const GALLERY = [
  {
    title: "Modern Villa",
    area: "Residential — Thanjavur",
    label: "Modern Villa Renovation",
    type: "Casement Windows",
  },
  { title: "Office Complex", area: "Commercial — Anna Nagar" },
  { title: "Heritage Home", area: "Residential — Kumbakonam" },
  { title: "Luxury Apartment", area: "High-Rise — Trichy" },
  { title: "Boutique Hotel", area: "Hospitality — Thanjavur" },
];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="gallery-header">
        <div>
          <Reveal>
            <div className="section-tag">Portfolio</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Our finest
              <br />
              <em>installations</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <a
            href="#contact"
            className="btn-primary"
            style={{
              background: "var(--green-primary)",
              alignSelf: "flex-end",
            }}
          >
            View All Projects →
          </a>
        </Reveal>
      </div>
      <div className="gallery-grid">
        {GALLERY.map((g, i) => (
          <Reveal key={i} delay={i * 0.08} className="gallery-item">
            <div className="gallery-item-bg" />
            <div className="gallery-item-overlay">
              <span>{g.title}</span>
              <small>{g.area}</small>
            </div>
            {g.label && (
              <div className="gallery-item-label">
                <span>{g.label}</span>
                <small>{g.type}</small>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
