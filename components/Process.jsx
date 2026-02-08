"use client";

import Reveal from "./Reveal";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "Free on-site visit to understand your needs, measure spaces, and discuss design preferences.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Custom design proposals with material choices, color options, and technical specifications.",
  },
  {
    num: "03",
    title: "Quote",
    desc: "Transparent, detailed pricing with no hidden costs. Flexible payment options available.",
  },
  {
    num: "04",
    title: "Installation",
    desc: "Expert installation by our skilled craftsmen. Clean, efficient, and on schedule.",
  },
  {
    num: "05",
    title: "After-Care",
    desc: "Dedicated support, warranty service, and maintenance tips for lasting performance.",
  },
];

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="process-header">
        <Reveal>
          <div className="section-tag">How We Work</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            From vision to <em>reality</em>,
            <br />
            in five steps
          </h2>
        </Reveal>
      </div>
      <div className="process-timeline">
        {PROCESS_STEPS.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="process-step">
            <div className="process-num">{s.num}</div>
            <div className="process-dot-wrapper">
              <div className="process-dot" />
            </div>
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
