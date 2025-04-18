import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Burger Icon */}
        <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="cta-button mobile">
            <button className="start-button">Ready to Start?</button>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="cta-button desktop">
          <button className="start-button">Ready to Start?</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
