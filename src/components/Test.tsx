// SyncedSliders.tsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./slider.css";
import logo_design from "../assets/images/logo_design.png";
import ads from "../assets/images/ads.png";
import design from "../assets/images/design.png";
import seo from "../assets/images/seo.png";
import social from "../assets/images/social.png";
import cost from "../assets/images/cost.png";
import codeweb from "../assets/images/codeweb.png";
import logo_design_black from "../assets/images/logo_design_black.png";

const slides = [
  { id: 1, image: logo_design },
  { id: 2, image: ads },
  { id: 3, image: design },
  { id: 4, image: seo },
  { id: 5, image: social },
];

const SyncedSliders: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="slider-container">
      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        centeredSlides
        watchSlidesProgress
        slideToClickedSlide
        className="thumbs-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="thumb-slide">
            <img src={slide.image} alt={`Thumb ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={`Main ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SyncedSliders;
