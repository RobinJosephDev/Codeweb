import React from "react";
import "../styles/Hero.css";
import logo from "../../public/assets/images/logo-banner.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p>WEB · DESIGN · E-COMMERCE · SEO</p>
        <div className="logo">
          <img src={logo} alt="Logo" className="img-logo"/>
        </div>
        <p className="result">RESULT DRIVEN</p>
        <p>Affordable digital services for Canadians.</p>

        {/* Button Container */}
        <div className="hero-buttons">
          <button className="hero-button">GET STARTED</button>
          <button className="hero-button secondary">OUR SERVICES</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
