"use client";
import React from "react";
import Image from "next/image";
import AutoSlider from "@/components/AutoSlider";

const Section1 = () => {
  const data = [
    {
      title: " WELCOME TO FORST MASTER PVT.LTD",
      desc: "",
      image: "/Images/home2.jpg",
    },
    {
      title: " WELCOME TO FORST MASTER PVT.LTD",
      desc: "",
      image: "/Images/home.jpg",
    },
    {
      title: " WELCOME TO FORST MASTER PVT.LTD",
      desc: "",
      image: "/Images/home3.jpg",
    },
    {
      title: " WELCOME TO FORST MASTER PVT.LTD",
      desc: "",
      image: "/Images/home4.jpg",
    },
    {
      title: " WELCOME TO FORST MASTER PVT.LTD",
      desc: "",
      image: "/Images/home5.jpg",
    },
  ];
  return (
    <div className="h-fit relative w-full olive ">
      <AutoSlider slides={data}>
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
                className="h-full w-full  relative z-10 rounded-md"
                src={item.image}
                alt="frost"
                width={500}
                height={500}
              />
            </div>
            <div className="flex-1 absolute top-1/2 z-20 pl-[4rem] bg-black/50 -translate-y-1/2 h-full flex flex-col justify-center items-center md:items-start p-4">
              <p className="leading-10 w-full md:w-[50%] text-center md:text-left tracking-widest text-2xl md:text-[35px] font-bold">
                WELCOME TO <br />
                FORST MASTER PVT.LTD
              </p>
              <p className="mt-3 w-[70%] md:w-[50%]  text-center md:text-justify font-extralight text-base md:text-[22px]">
                Manufacturer of commercial kitchen equipment, commercial
                refrigerators, chillers, display cabinets, food service
                equipment, stainless steel worktables, cooking ranges, exhaust
                hoods, and custom kitchen solutions for restaurants, hotels, and
                catering businesses.
              </p>
              <div className="w-full md:w-[80%] flex items-center justify-center md:justify-start">
                <button className=" olive rounded-md px-7 tracking-widest py-2  mt-12">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Right side with text and button */}
          </div>
        )}
      </AutoSlider>
    </div>
  );
};

export default Section1;
