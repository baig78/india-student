import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="../../../images/logo_1.PNG" alt="Logo" />
        </a>
      </div>

      <nav className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <a href="#home">Features</a>
        <a href="#services">Demo</a>
        <a href="#about">Use Cases</a>
        <a href="#contact">Solutions</a>
        <a href="#contact">Case Studies</a>
        <a href="#contact">Portfolio</a>
        <a href="#contact">Resources</a>
        <button className="contact-btn">Contact Now</button>
      </nav>

      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
