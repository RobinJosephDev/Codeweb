import React from "react";
import "../styles/Figures.css";
import experience from "../../public/assets/images/experience.png";
import customers from "../../public/assets/images/customers.png";
import members from "../../public/assets/images/members.png";

const figuresData = [
  {
    img: experience,
    figure: "20+",
    title: "Years Experience",
  },
  {
    img: customers,
    figure: "99%",
    title: "Happy Customers",
  },
  {
    img: members,
    figure: "25",
    title: "Team Members",
  },
];

const Figures = () => {
  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

  return (
    <section className="figures-section">
    <div className="figures-container">
      {figuresData.map((item, index) => (
        <div key={index} className="figure-card">
          <div className="figure-top">
            <img src={item.img} alt={item.title} className="figure-img" />
            <div className="figure-info">
              <div className="figure-number">{item.figure}</div>
              <div className="figure-title">{item.title}</div>
            </div>
          </div>
          <div className="figure-text">{paragraphText}</div>
        </div>
      ))}
    </div>
    </section>

  );
};

export default Figures;
