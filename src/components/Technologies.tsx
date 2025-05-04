import React from "react";
import "../styles/Technologies.css";
import drupal from "../assets/images/drupal.png";
import hubspot from "../assets/images/hubspot.png";
import joomla from "../assets/images/joomla.png";
import shopify from "../assets/images/shopify.png";
import woocommerce from "../assets/images/woocommerce.png";
import wordpress from "../assets/images/wordpress.png";

const logos = [drupal, hubspot, joomla, shopify, woocommerce, wordpress];

const Technologies = () => {
  return (
    <section className="tech-section">
      <div className="carousel">
        <div className="carousel-track">
          {logos.concat(logos).map((logo, idx) => (
            <img
              src={logo}
              alt={`Tech logo ${idx}`}
              className="carousel-img"
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
