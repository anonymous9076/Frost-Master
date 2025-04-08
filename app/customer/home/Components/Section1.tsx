import React from "react";
import Image from "next/image";
// import Navbar from "@/components/Navbar";

const Section1 = () => {
  return (
    <div className="min-h-[100dvh] h-fit relative w-full olive ">
      <div className="min-h-[90dvh] h-fit flex flex-col md:flex-row items-center justify-center w-full py-[5rem] ">
        {/* Left side with image */}
        <div className="flex-1 h-full relative">
          <div className="absolute z-10 bottom-[-5rem] lg:block hidden left-0 h-[30vh] md:h-[40dvh] w-[45vw] md:w-[55dvh]">
            <Image
              src="/Images/dotted.png"
              alt=""
              height={500}
              width={500}
              className="object-cover h-full w-full opacity-40 "
            />
          </div>
          <div className="h-full flex items-center justify-center w-full">
            <Image
              className="h-[80dvh] w-[70dvh] md:w-[65%] min-w-[200px]  relative z-20 rounded-md"
              src="https://s3-alpha-sig.figma.com/img/09bf/9265/db5c78d7a92d2b9106eb99db17234f22?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fgY0w-0Iavi3P9TPy61Ea8u5Q2K2oO3xj~0rl2bgP4WSbNnIzVa~rrPaXOCs~4Z4zTsw35y2phFi7XPHQriRvUnzV0TV3vVEB0wTecBSQjVvbh-b-Ml-L3X-YT0wj1mP5-7O7y17vs5NZ60jla70ngyiIpLDPY8s3MfkNky1PCZuT~SSO~YqTwyVM-ft7imBJtU8a1OVOZr82ymmDz18uN1hD9ga1RA4Uc8V7XqXyi~eMl1dwZUf-48KD3cTXuQ4NqMKcxC8ul4j~xVkSlygsWc5sbLJ5t8BxgUBmAY2d-UVaEu3grKcC1e23vx2D7ebOb0rZ2x2WXjhMRZgNBkjbA__"
              alt="frost"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Right side with text and button */}
        <div className="flex-1 h-full flex flex-col justify-center items-center md:items-start p-4">
          <p className="leading-10 w-full md:w-[80%] text-center md:text-left tracking-widest text-2xl md:text-[35px] font-bold">
            WELCOME TO <br />
            FORST MASTER PVT.LTD
          </p>
          <p className="mt-3 w-[70%] md:w-[80%]  text-center md:text-justify font-extralight text-base md:text-[22px]">
            Manufacturer of commercial kitchen equipment, commercial refrigerators,
            chillers, display cabinets, food service equipment, stainless steel worktables,
            cooking ranges, exhaust hoods, and custom kitchen solutions for restaurants, hotels,
            and catering businesses.
          </p>
          <div className="w-full md:w-[80%] flex items-center justify-center md:justify-start">
            <button className="border border-white rounded-md px-7 tracking-widest py-2 text-white mt-12">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
