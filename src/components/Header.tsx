import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/assets/images/logo.png"; 
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""}>Portfolio</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active-link" : ""}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="cta-button">
          <button className="start-button">Ready to Start?</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
