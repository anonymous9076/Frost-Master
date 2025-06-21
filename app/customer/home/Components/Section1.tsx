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
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/MainSliderinHome/img2.jpg`,
      button: "Shop Now",
    },
    {
      title: "SPEED.COMPACT ECO",
      desc: "The faster the Oven, The faster the profits",
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/MainSliderinHome/img9.jpg`,
      style: "lg:text-[60px] lg:w-full",
    },
    {
      title: "OPTIC.COOKING",
      desc: "From now on you can cook with your eyes closed",
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/MainSliderinHome/img3.jpg`,
      style: "lg:text-[60px] lg:w-full",
    },
  ];
  return (
    <div className="h-fit relative w-full olive ">
      <CardSlider slides={data} autoplay centeredSlides slidesPerView={1}>
        {(item) => (
          <div className="h-[90dvh] flex flex-col md:flex-row items-center justify-center w-full ">
            <div className="h-full w-full relative flex items-center justify-center ">
              <Image
                className="h-full w-[100dvw] object-cover   relative z-10 rounded-md"
                src={item.image}
                alt="frost"
                width={500}
                height={500}
              />
            </div>
            <div className="h-full absolute top-0 z-20 px-[5%] min-w-[100vw] bg-black/30  flex flex-col justify-center items-start p-4">
              <p
                className={`md:leading-10 leading-8 w-full lg:w-[50%]   tracking-widest  ${item.style}  responsive-heading`}
              >
                {item.title}
                <br></br>
                {item?.title2}
              </p>
              <p className="mt-3  md:w-[70%] lg:w-[50%]  font-extralight responsive-subtext">
                {item.desc}
              </p>
              {item?.button ? (
                <div className="w-full md:w-[80%] flex items-center justify-start">
                  <button className=" olive rounded-md px-7 tracking-widest py-2  mt-12">
                    {item?.button}
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>

          </div>
        )}
      </CardSlider>
    </div>
  );
};

export default Section1;
