"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
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

const CardSwiper = <T,>({
  slides = [],
  children,
  spaceBetween = 30,
  centeredSlides = false,
  autoplay = true,
  autoplayDelay = 2000,
  className = "",
  breakpoints = {},
}: CardSliderProps<T>) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      centeredSlides={centeredSlides}
      breakpoints={breakpoints}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
            }
          : false
      }
      modules={[Navigation, Autoplay]}
      className={`mySwiper ${className}`}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{children(slide, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
