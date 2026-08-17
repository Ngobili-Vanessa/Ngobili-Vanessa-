import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h2>PLUGGED</h2>

        <p className="footer-text">
          Your trusted online shopping destination.
        </p>

        <nav className="footer-nav">
          <Link to="/home">HOME</Link>
          <Link to="/category">CATEGORY</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        

        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <div className="social-icons">
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <p className="copyright">
          © 2026 PLUGGED. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;