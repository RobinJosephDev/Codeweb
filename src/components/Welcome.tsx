import React from "react";
import "../styles/Welcome.css"; // Importing the CSS file
import left from "../../public/assets/images/we-deliver-on-clutch.png";
import right from "../../public/assets/images/badge-local-excellence-ge.png";
import arrow from "../../public/assets/images/arrow_icon.png";

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* First Column - Image */}
        <div className="welcome-image">
          <img src={left} alt="Logo" className="img-left" />
        </div>

        {/* Second Column - Text and Button */}
        <div className="welcome-content">
          <h2>Welcome to Code Web</h2>
          <p>
            Small business startup or not, you'll need a website that gets your
            name up there. A strong digital presence will help to raise brand
            awareness, bring in and retain customers, and increase your revenue.
          </p>
          <p>
            In today's digital age, it's often the very first impression that
            you'll leave on a potential customer. Your website should look sleek
            and provide essential information in an intuitive way. Codeweb aims
            to be the best educated, and we study our profession everyday.
          </p>
          <button className="btn-learn-more">
            LEARN MORE
            <img src={arrow} alt="Logo" className="arrow" />
          </button>
        </div>

        {/* Third Column - Image */}
        <div className="welcome-image">
          <img src={right} alt="Logo" className="img-right" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
