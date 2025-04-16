import React from "react";
import "../styles/Hero.css";
import logo from "../../public/assets/images/logo-banner.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p>WEB · DESIGN · E-COMMERCE · SEO</p>
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>
        <p>RESULT DRIVEN</p>
        <p>Affordable digital services for Canadians.</p>

        {/* Button Container */}
        <div className="hero-buttons">
          <button className="hero-button">Get Started</button>
          <button className="hero-button secondary">Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
