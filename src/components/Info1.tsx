import React from "react";
import "../styles/Info1.css";
import web_design from "../../public/assets/images/web_design.png";
import web_development from "../../public/assets/images/web_development.png";
import arrow from "../../public/assets/images/arrow_icon.png";
import arrow_orange from "../../public/assets/images/arrow_icon_orange.png";
const Info1 = () => {
  return (
    <section className="info1-section">
      <div className="info1-container">
        <div className="web-design">
          <div className="web-design-image">
            <img src={web_design} alt="Logo" className="img-web-design" />
          </div>
          <div className="web-design-content">
            <h2>Web Design</h2>
            <p>
              Your website is the face of your business. A well-designed website
              puts your best foot forward, establishing credibility and
              authority with your potential clients. And communicating your most
              interesting values, messages and mission statements.
            </p>
            <p>
              Code web will use a clean interface with professional looking
              visuals. Whether your current website could use a refresh,
              facelift or your business needs an entirely new site built from
              scratch, we will craft the perfect design for your website.
            </p>

            <div className="hero-buttons-web-design">
              <button className="btn-info1-learn-more">
                LEARN MORE
                <img src={arrow} alt="Arrow Icon" className="arrow" />
              </button>
              <button className="info1-button secondary">
                PORTFOLIO
                <img src={arrow_orange} alt="Logo" className="arrow_orange" />
              </button>
            </div>
          </div>
        </div>
        <div className="web-development">
          <div className="web-development-image">
            <img
              src={web_development}
              alt="Logo"
              className="img-web-development"
            />
          </div>
          <div className="web-development-content">
            <h2>Web Development</h2>
            <p>
              We are experts in our field of work, which is digital marketing,
              web design, development and SEO. Contact us today and we'll find a
              way to help better understand how vital web developemnt and SEO
              are for the success of your business.
            </p>
            <p>
              Our team uses professional web developemnt tools to help your
              website claim one of the top three spots in google search for your
              targeted keywords. Don't waste any more time. That #1 spot on
              google's search engine results page can make or break your
              business.
            </p>

            <div className="hero-buttons-web-development">
              <button className="btn-info1-learn-more">
                LEARN MORE
                <img src={arrow} alt="Arrow Icon" className="arrow" />
              </button>
              <button className="info1-button secondary">
                PORTFOLIO
                <img src={arrow_orange} alt="Logo" className="arrow_orange" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info1;
