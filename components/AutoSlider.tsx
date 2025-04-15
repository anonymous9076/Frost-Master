'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
interface AutoSliderProps {
    children: (item: any, index: number) => any
    slides: any[]
}
const AutoSlider = ({ slides = [], children = () => { }, }: AutoSliderProps) => {
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
            {slides?.map((slide: any, index: number) => (
                <SwiperSlide key={index}>
                    {children(slide, index)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default AutoSlider;
