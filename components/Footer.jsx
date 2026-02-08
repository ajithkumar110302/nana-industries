export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            Nana <em>Industries</em>
          </a>
          <p>
            Premium uPVC windows and doors manufacturer serving Thanjavur and
            Tamil Nadu since 1984. Crafting timeless solutions for modern living.
          </p>
        </div>
        <div className="footer-col footer-nav">
          <h5>Navigate</h5>
          {[
            "Products",
            "Why Us",
            "Our Process",
            "Gallery",
            "Testimonials",
            "Contact",
          ].map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="footer-col footer-products">
          <h5>Products</h5>
          {[
            "Casement Windows",
            "Sliding Windows",
            "Bay Windows",
            "Tilt & Turn",
            "Sliding Doors",
            "Fixed Glass",
          ].map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </div>
        <div className="footer-col footer-address">
          <h5>Visit Us</h5>
          <p>
            No 171, Tamil Nagar,
            <br />
            Opp. Medical College 1st Gate,
            <br />
            2nd Street, Anna Nagar,
            <br />
            Thanjavur — 613004
            <br />
            Tamil Nadu, India
          </p>
          <p style={{ marginTop: 16 }}>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Nana Industries. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
