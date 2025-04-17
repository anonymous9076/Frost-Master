"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
interface AutoSliderProps<T> {
  slides: T[];
  children: (item: T, index: number) => ReactNode;
}
const AutoSlider = <T,>({ slides = [], children }: AutoSliderProps<T>) => {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>{children(slide, index)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AutoSlider;
