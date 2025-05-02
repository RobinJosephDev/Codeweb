import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo_design from "../../public/assets/images/logo_design.png";
import ads from "../../public/assets/images/ads.png";
import design from "../../public/assets/images/design.png";
import seo from "../../public/assets/images/seo.png";
import social from "../../public/assets/images/social.png";
import cost from "../../public/assets/images/cost.png";
import codeweb from "../../public/assets/images/codeweb.png";
import logo_design_black from "../../public/assets/images/logo_design_black.png";
import arrow from "../../public/assets/images/arrow_icon.png";
import "../styles/Rates.css";

const sliderData = [
  {
    title: "Logo Design",
    description: "We provide tailored solutions for your business needs.",
    image: logo_design,
  },
  {
    title: "Ad words",
    description: "Top-tier apps for iOS and Android platforms.",
    image: ads,
  },
  {
    title: "Web Design",
    description: "Boost your online sales with our smart systems.",
    image: design,
  },
  {
    title: "SEO",
    description: "Top-tier apps for iOS and Android platforms.",
    image: seo,
  },
  {
    title: "Social Media",
    description: "Boost your online sales with our smart systems.",
    image: social,
  },
];

const Rates = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  return (
    <section className="rates-section">
      <div className="rates-container">
        <h2>Competitive Services</h2>
        <p>
          Our coders develop web and mobile applications and take your business to the next level.
          <br />
          Our clients save an average of $60,000 per annum by employing our
          services.
        </p>

        <div className="sliders-wrapper">
          {/* Thumbnail Slider */}
          <Slider
            asNavFor={nav1 as Slider}
            ref={(slider: Slider | null) => setNav2(slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            centerMode={true}
            infinite={true}
            className="slider-nav"
          >
            {sliderData.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </Slider>

          {/* Main Slider */}
          <Slider
            asNavFor={nav2 as Slider}
            ref={(slider: Slider | null) => setNav1(slider)}
            arrows={false}
            fade={true}
            className="slider-for"
          >
            {sliderData.map((item, index) => (
              <div key={index}>
                <div className="slide-content">
                  <div className="left-content">
                    <div className="image-wrapper">
                      <img src={cost} alt={item.title} />
                    </div>
                    <h3>US Developer</h3>
                    <span>$5380 / month</span>
                  </div>
                  <div className="center-content">
                    <div className="image-wrapper">
                      <img src={logo_design_black} alt={item.title} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="btn-rates-learn-more">
                      LEARN MORE
                      <img
                        src={arrow}
                        alt="Arrow Icon"
                        className="rates-arrow"
                      />
                    </button>
                  </div>
                  <div className="right-content">
                    <div className="image-wrapper">
                      <img src={codeweb} alt={item.title} />
                    </div>
                    <h3>Code Web</h3>
                    <span>$2400 / month</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Rates;
