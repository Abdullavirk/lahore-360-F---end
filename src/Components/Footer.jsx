
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

          <div className="footer-top">
     
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Lahore<span>360</span>
          </Link>

          <p>
            Discover local businesses, products, and services
            across Lahore. Lahore360 connects you with clothing
            stores, electronics shops, and restaurants in your area.
          </p>

          {/* Social Media */}
          <div className="social-icons">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>


        {/* Explore */}
        <div className="footer-column">

          <h3>Explore</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/clothing">Clothing</Link>
            </li>

            <li>
              <Link to="/electronics">Electronics</Link>
            </li>

            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>

            <li>
              <Link to="/businesses">All Businesses</Link>
            </li>
          </ul>

        </div>


        {/* Explore Lahore */}
        <div className="footer-column">

          <h3>Explore Lahore</h3>

          <ul>
            <li>
              <Link to="/areas/gulberg">Gulberg</Link>
            </li>

            <li>
              <Link to="/areas/dha">DHA</Link>
            </li>

            <li>
              <Link to="/areas/johar-town">Johar Town</Link>
            </li>

            <li>
              <Link to="/areas/model-town">Model Town</Link>
            </li>

            <li>
              <Link to="/areas/all-lahore">All Lahore</Link>
            </li>
          </ul>

        </div>


        {/* Customer Support */}
        <div className="footer-column">

          <h3>Customer Support</h3>

          <ul>
            <li>
              <Link to="/about">About Lahore360</Link>
            </li>

            <li>
              <Link to="/faq">FAQs</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column contact-column">

          <h3>Contact Us</h3>

          <ul>

            <li>
              <a href="mailto:info@lahore360.com">
                info@lahore360.com
              </a>
            </li>

            <li>
              <a href="tel:+923001234567">
                +92 300 1234567
              </a>
            </li>

            <li>
              Lahore, Pakistan
            </li>

          </ul>

        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Lahore360. All rights reserved.
        </p>

        <div className="bottom-links">

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

