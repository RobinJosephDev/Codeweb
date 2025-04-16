import React from "react";
import "../styles/Hero.css";
import logo from "../../public/assets/images/logo-banner.png";
import arrow from "../../public/assets/images/arrow_icon.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      <div className="hero-content">
        <p className="heading-1">WEB · DESIGN · E-COMMERCE · SEO</p>
        <div className="logo">
          <img src={logo} alt="Logo" className="img-logo" />
        </div>
        <p className="result">RESULT DRIVEN</p>
        <p>Affordable digital services for Canadians.</p>

        <div className="hero-buttons">
          <button className="hero-button">
            GET STARTED
            <img src={arrow} alt="Logo" className="arrow" />
          </button>
          <button className="hero-button secondary">
            OUR SERVICES
            <img src={arrow} alt="Logo" className="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
