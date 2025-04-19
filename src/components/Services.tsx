import React from "react";
import arrow from "../../public/assets/images/arrow_icon.png";
import default_1 from "../../public/assets/images/default_1.png";
import "../styles/Services.css";

const servicesData = [
  "Design & Branding",
  "Web Development",
  "Digital Marketing",
  "Social Media Marketing",
  "Videography",
  "App Development",
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-grid">
        {servicesData.map((title, index) => (
          <div className="service-card" key={index}>
            <img src={default_1} alt="Service Icon" className="service-icon" />
            <h2>{title}</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
            <button className="btn-learn-more">
              LEARN MORE
              <img src={arrow} alt="Arrow Icon" className="arrow" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
