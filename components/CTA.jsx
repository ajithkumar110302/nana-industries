"use client";

import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <Reveal>
          <div className="section-tag" style={{ color: "var(--gold)" }}>
            Let&apos;s Begin
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="cta-title">
            Ready to transform
            <br />
            your <em>space</em>?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="cta-desc">
            Schedule a free consultation. Our experts will visit your site,
            understand your vision, and craft a solution that exceeds
            expectations.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="cta-btns">
            <a href="tel:+919876543210" className="btn-primary">
              Call Now →
            </a>
            <a
              href="#"
              className="btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Request Quote
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="cta-contact-row">
            <div className="cta-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                No 171, Tamil Nagar, Anna Nagar, Thanjavur — 613004
              </span>
            </div>
            <div className="cta-contact-item">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
