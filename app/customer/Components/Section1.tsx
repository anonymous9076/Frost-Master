import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import dotted from "@/Images/dotted.png";

const Section1 = () => {
  return (
    <div className="h-[100dvh] relative w-full olive">
      <Navbar position='none' bg='transparent'text='white' active='/customer'></Navbar>
      <div className=" h-[90dvh]   flex items-center justify-center w-full ">
        <div className="flex-1 h-full relative">
            <div  className="absolute z-10  bottom-0 left-0 h-[40dvh] w-[55dvh]">
              <Image
              src={dotted}
              alt=""
              height={500}
              width={500}
              className="object-cover  h-full w-full opacity-40 "
              >
              </Image>
            </div>
            <div className="h-full flex items-center justify-center w-full">
          <Image
            className="h-[80%] w-[65%] min-w-[300px] relative z-20 rounded-md"
            src={
                "https://s3-alpha-sig.figma.com/img/09bf/9265/db5c78d7a92d2b9106eb99db17234f22?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JeMmInaAJEqfsqWKDbyX6wIVVcE3QaaS8sBxD0JN36tTMB3js-Zy5321us813J76XhpryhVt8Rr-A6R~JUZnTpEy5L42O4taf~vUmakIg9kEEfcFP1yRQY9QB-N792u~H12X4nOet1pHvv0XMdzNYjrLxn4UImlyndXFwJIs3N4eY50IUnjJEP1MZtIk03JAKQDepgrfb6BZNl10JG-MRjPwNo9-SeHNRPYsKmSo9yC~dWfzFag4yCm6f9Q~zDwsy6YBGeVkf-mvP4AKIsmbT1NW2iMU8BLGCdjqhdR5gr-2MOO8sVrEIpZf4dhxLYtATAmTG626hLHif9uRSfGLsQ__"
            }
            alt="frost"
            width={500}
            height={500}
            ></Image>
            </div>
        </div>
        <div className="flex-1 h-full  flex  justify-center flex-col">
          <p className=" leading-10 w-[80%] tracking-widest text-center text-[42px] font-bold">
            WELCOME TO <br></br>
            FORST MASTER PVT.LTD
          </p>
          <p className="p-0 m-0 mt-3 w-[80%] text-justify font-extralight text- text-[22px]">
            Manufacturer of commercial kitchen equipment, commercial
            refrigerators, chillers, display cabinets, food service equipment,
            stainless steel worktables, cooking ranges, exhaust hoods, and
            custom kitchen solutions for restaurants, hotels, and catering
            businesses.
          </p>
          <div className="w-[80%] flex items-center justify-center">
          <button className="border-[#ffffff] border w-fit rounded-md px-7 tracking-widest py-2 text-[#ffffff] mt-[3rem] ">
            Shop Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
