import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import logo_design from "../assets/images/logo_design.png";
import ads from "../assets/images/ads.png";
import design from "../assets/images/design.png";
import seo from "../assets/images/seo.png";
import social from "../assets/images/social.png";
import cost from "../assets/images/cost.png";
import codeweb from "../assets/images/codeweb.png";
import logo_design_black from "../assets/images/logo_design_black.png";
import arrow from "../assets/images/arrow_icon.png";
import "../styles/Rates.css";

const Rates = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const sliderData = [
    {
      title: "Social Media",
      description: "Boost your online sales with our smart systems.",
      image: social,
    },
    {
      title: "Ad words",
      description: "Top-tier apps for iOS and Android platforms.",
      image: ads,
    },
    {
      title: "Logo Design",
      description: "We provide tailored solutions for your business needs.",
      image: logo_design,
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
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper.realIndex;

    if (thumbsSwiper) {
      const totalSlides = thumbsSwiper.slides.length;
      const slidesPerView = 5;

      // Calculate the index to center the active thumbnail
      let targetIndex = realIndex - Math.floor(slidesPerView / 2);
      if (targetIndex < 0) {
        targetIndex = 0;
      } else if (targetIndex > totalSlides - slidesPerView) {
        targetIndex = totalSlides - slidesPerView;
      }

      thumbsSwiper.slideTo(targetIndex, 300);
    }
  };

  return (
    <section className="rates-section">
      <div className="rates-container">
        <h2>Competitive Services</h2>
        <p>
          Our coders develop web and mobile applications to the next level. Our
          clients save an average of $60,000 per annum by employing our
          services.
        </p>

        <div className="sliders-wrapper">
          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            slidesPerView={5}
            spaceBetween={10}
            loop={false}
            watchSlidesProgress
            centeredSlides={true}
            slideToClickedSlide={true}
            className="thumb-slider"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="thumb-container">
                  <div className="thumb-img-wrapper">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="thumb-title">
                    <h6>{item.title}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Slider */}
          <Swiper
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: thumbsSwiper }}
            spaceBetween={20}
            loop={true} // Keep loop enabled
            navigation
            onSlideChange={handleSlideChange}
            className="main-slider"
          >
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Rates;
