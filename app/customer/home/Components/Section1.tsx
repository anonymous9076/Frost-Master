"use client";
import React from "react";
import Image from "next/image";
import CardSlider from "@/components/AutoSlider";

const Section1 = () => {
  const data = [
    {
      title: " WELCOME TO ",
      title2: "FORST MASTER PVT.LTD",
      desc: "Manufacturer of commercial kitchen equipment, commercial refrigerators, chillers, display cabinets, food service equipment, stainless steel worktables, cooking ranges, exhaust hoods, and custom kitchen solutions for restaurants, hotels, and catering businesses.",
      image: "/Images/MainSliderinHome/img2.jpg",
      button: "Shop Now",
    },
    {
      title: "SPEED.COMPACT ECO",
      desc: "The faster the Oven, The faster the profits",
      image: "/Images/MainSliderinHome/img9.jpg",
      style: "lg:text-[60px] lg:w-full",
    },
    {
      title: "OPTIC.COOKING",
      desc: "From now on you can cook with your eyes closed",
      image: "/Images/MainSliderinHome/img3.jpg",
      style: "lg:text-[60px] lg:w-full",
    },
  ];
  return (
    <div className="h-fit relative w-full olive ">
      <CardSlider slides={data} autoplay centeredSlides slidesPerView={1}>
        {(item) => (
          <div className="h-[90dvh] flex flex-col md:flex-row items-center justify-center w-full ">
            {/* <div className="absolute z-10 bottom-[-5rem] lg:block hidden left-0 h-[30vh] md:h-[40dvh] w-[45vw] md:w-[55dvh]">
            <Image
              src='/Images/dotted.png'
              alt=""
              height={500}
              width={500}
              className="object-cover h-full w-full opacity-40 "
            />
          </div> */}
            <div className="h-full w-full relative flex items-center justify-center ">
              <Image
                className="h-full w-[100dvw]   relative z-10 rounded-md"
                src={item.image}
                alt="frost"
                width={500}
                height={500}
              />
            </div>
            <div className="h-full absolute top-0 z-20 lg:pl-[4rem] min-w-[100vw] bg-black/30  flex flex-col justify-center items-center md:items-start p-4">
              <p
                className={`leading-8 w-full lg:w-[50%] text-center md:text-left tracking-widest text-2xl md:text-[35px] ${item.style}  font-bold`}
              >
                {item.title}
                <br></br>
                {item?.title2}
              </p>
              <p className="mt-3  w-[70%] md:w-[50%]  text-center md:text-justify font-extralight text-base md:text-[18px] lg:text-[22px]">
                {item.desc}
              </p>
              {item?.button ? (
                <div className="w-full md:w-[80%] flex items-center justify-center md:justify-start">
                  <button className=" olive rounded-md px-7 tracking-widest py-2  mt-12">
                    {item?.button}
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* Right side with text and button */}
          </div>
        )}
      </CardSlider>
    </div>
  );
};

export default Section1;
