"use client";

import { useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The transformation of our home was remarkable. Nana Industries delivered beyond our expectations — the windows are beautiful, energy-efficient, and the entire process was seamless.",
    author: "Rajesh Kumar",
    role: "Homeowner — 3BHK Renovation, Thanjavur",
    tagline: "Exceptional craftsmanship",
  },
  {
    quote:
      "As an architect, I need suppliers I can rely on. Nana Industries consistently delivers precise specifications, quality materials, and they understand the urgency of project timelines.",
    author: "Priya Sharma",
    role: "Architect — Multiple Commercial Projects",
    tagline: "Trusted partner for all projects",
  },
  {
    quote:
      "We replaced all wooden windows with uPVC from Nana Industries. Three years later, they look brand new. The energy savings alone have been worth every rupee invested.",
    author: "Anand Venkatesh",
    role: "Property Developer — Villa Project, Kumbakonam",
    tagline: "Quality that lasts generations",
  },
];

function Stars() {
  return (
    <div className="testimonial-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % TESTIMONIALS.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <Reveal>
          <div className="section-tag">Client Voices</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">
            Words that
            <br />
            speak <em>volumes</em>
          </h2>
        </Reveal>
      </div>
      <div className="testimonials-track">
        <div
          className="testimonials-slider"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-visual">
                <div className="testimonial-quote-mark">&ldquo;</div>
                <div className="testimonial-visual-text">{t.tagline}</div>
              </div>
              <div className="testimonial-content">
                <Stars />
                <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <h5>{t.author}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-nav">
        <button onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <button onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}
