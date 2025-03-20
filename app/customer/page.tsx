import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="h-[100dvh] flex items-center w-full bg-white">
        <div className="flex-1 h-full  flex items-center justify-center flex-col">
          <p className="text-[#4C585B] leading-15 w-[75%] text-center text-[42px] font-bold">
            WELCOME TO <br></br>
            FORST MASTER PVT.LTD
          </p>
          <p className="text-[#4C585B] w-[70%] text-center text-[28px]">
            Manufacturer of commercial kitchen equipment, commercial
            refrigerators, chillers, display cabinets, food service equipment,
            stainless steel worktables, cooking ranges, exhaust hoods, and
            custom kitchen solutions for restaurants, hotels, and catering
            businesses.
          </p>
          <button className="bg-gray-300 rounded-md px-4 py-2 text-black mt-[4rem] tracking-wide">Shop Now</button>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
            <img className="h-[80%] w-[60%]" src="https://s3-alpha-sig.figma.com/img/09bf/9265/db5c78d7a92d2b9106eb99db17234f22?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JeMmInaAJEqfsqWKDbyX6wIVVcE3QaaS8sBxD0JN36tTMB3js-Zy5321us813J76XhpryhVt8Rr-A6R~JUZnTpEy5L42O4taf~vUmakIg9kEEfcFP1yRQY9QB-N792u~H12X4nOet1pHvv0XMdzNYjrLxn4UImlyndXFwJIs3N4eY50IUnjJEP1MZtIk03JAKQDepgrfb6BZNl10JG-MRjPwNo9-SeHNRPYsKmSo9yC~dWfzFag4yCm6f9Q~zDwsy6YBGeVkf-mvP4AKIsmbT1NW2iMU8BLGCdjqhdR5gr-2MOO8sVrEIpZf4dhxLYtATAmTG626hLHif9uRSfGLsQ__" alt="frost"></img>
        </div>
      </div>
    </>
  );
};

export default page;
