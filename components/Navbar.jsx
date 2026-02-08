"use client";

import { useState, useEffect } from "react";

const links = [
  ["Products", "products"],
  ["Why Us", "why"],
  ["Process", "process"],
  ["Gallery", "gallery"],
  ["Voices", "testimonials"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          Nana <em>Industries</em>
        </a>
        <div className="nav-links">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            <span className="nav-cta-text">Get Quote</span> →
          </a>
        </div>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            style={
              menuOpen
                ? { transform: "rotate(45deg) translate(5px, 5px)" }
                : {}
            }
          />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                : {}
            }
          />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {[...links, ["Get Quote", "contact"]].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
