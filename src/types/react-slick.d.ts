declare module "react-slick" {
    import * as React from "react";
  
    interface Settings {
      accessibility?: boolean;
      adaptiveHeight?: boolean;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      centerMode?: boolean;
      centerPadding?: string;
      dots?: boolean;
      draggable?: boolean;
      fade?: boolean;
      focusOnSelect?: boolean;
      infinite?: boolean;
      initialSlide?: number;
      lazyLoad?: "ondemand" | "progressive";
      pauseOnHover?: boolean;
      rtl?: boolean;
      slidesToShow?: number;
      slidesToScroll?: number;
      speed?: number;
      swipe?: boolean;
      swipeToSlide?: boolean;
      touchMove?: boolean;
      variableWidth?: boolean;
      vertical?: boolean;
      afterChange?: (currentSlide: number) => void;
      beforeChange?: (currentSlide: number, nextSlide: number) => void;
      onInit?: () => void;
      responsive?: Array<{
        breakpoint: number;
        settings: "unslick" | Settings;
      }>;
      // ✅ Add this line:
      asNavFor?: Slider | null;
    }
  
    interface SliderProps extends Settings {
      children?: React.ReactNode;
      className?: string;
    }
  
    export default class Slider extends React.Component<SliderProps> {}
  }
  