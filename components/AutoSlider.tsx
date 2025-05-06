"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

interface CardSliderProps<T> {
  slides: T[];
  children: (item: T, index: number) => ReactNode;

  spaceBetween?: number;
  centeredSlides?: boolean;
  slidesPerView?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pagination?: boolean;
  navigation?: boolean;
  className?: string;
  breakpoints?: SwiperOptions["breakpoints"];
}

const CardSlider = <T,>({
  slides = [],
  children,
  spaceBetween = 20,
  centeredSlides = false,
  // slidesPerView = 1,
  autoplay = false,
  autoplayDelay = 3000,
  pagination = true,
  navigation = false,
  className = "",
  breakpoints = {}
}: CardSliderProps<T>) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      slidesPerView={1}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            }
          : false
      }
      pagination={pagination ? { clickable: true } : false}
     
      breakpoints={breakpoints}
      navigation={navigation}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper ${className}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{children(slide, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
