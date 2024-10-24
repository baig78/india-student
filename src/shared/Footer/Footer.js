import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vulputate justo at magna tincidunt, nec interdum eros pulvinar. Nam
            aliquam libero et metus vulputate, id interdum orci pellentesque.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Use Cases</a>
            </li>
            <li>
              <a href="#services">Features</a>
            </li>
            <li>
              <a href="#about">Resources</a>
            </li>
            <li>
              <a href="#contact">Case studies</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <a href="tel:+919848812855">+91 6302583224</a>
            <br />
            <a href="mailto:info@codevva.com">info@indiastudent.com</a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 India Student. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
