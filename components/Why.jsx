"use client";

import Reveal from "./Reveal";

const WHY_FEATURES = [
  {
    title: "40+ Years of Trust",
    desc: "A legacy built on craftsmanship. Since 1984, families across Thanjavur have trusted us with their homes.",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
  {
    title: "Energy Efficiency",
    desc: "uPVC doesn't absorb heat. Our windows keep rooms naturally cool, reducing air conditioning costs by up to 30%.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Custom Precision",
    desc: "Every dimension, every configuration — tailored to your exact specifications. No project is too unique for us.",
    icon: (
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    ),
  },
  {
    title: "Zero Maintenance",
    desc: "Unlike wood, uPVC never warps, rots, or needs repainting. Just wipe clean and enjoy for decades.",
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="why-grid">
        <div>
          <Reveal>
            <div className="section-tag">The Nana Difference</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">
              Why discerning
              <br />
              clients choose <em>us</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-desc" style={{ marginBottom: 48 }}>
              We don&apos;t just install windows — we engineer peace of mind,
              energy savings, and enduring beauty into every frame.
            </p>
          </Reveal>
          <div className="why-features">
            {WHY_FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="why-feature">
                  <div className="why-feature-icon">
                    <svg viewBox="0 0 24 24">{f.icon}</svg>
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="why-visual">
          <div className="why-visual-inner">
            <div className="why-visual-number">40</div>
            <div className="why-visual-text">
              &ldquo;Years of crafting perfection, one window at a time&rdquo;
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
