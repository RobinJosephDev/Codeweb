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
import arrow from "../assets/images/arrow_icon.png";
import "../styles/Rates.css";

const Rates = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const sliderData = [
    { title: "Logo Design", description: "Tailored branding solutions.", image: logo_design },
    { title: "Ad Words", description: "Top-tier PPC advertising services.", image: ads },
    { title: "Web Design", description: "Custom, conversion-focused websites.", image: design },
    { title: "SEO", description: "Rank higher on search engines.", image: seo },
    { title: "Social Media", description: "Engage audiences with compelling content.", image: social },
  ];

  return (
    <section className="rates-container">
      <Swiper
        className="main-swiper"
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="slide-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="slide-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button>
                  <img src={arrow} alt="arrow icon" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="thumbs-swiper"
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        breakpoints={{
          0: { slidesPerView: 2.5 },
          480: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 5 },
        }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="thumb-slide">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Rates;
