import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-[8dvh] w-full flex items-center bg-[#4C585B] text-[#D0DDD0]">
      <div className="h-full w-[20%] text-[25px] flex items-center px-4 gap-2">
        <RiInstagramFill></RiInstagramFill>
        <FaFacebookF></FaFacebookF>
        <FaYoutube></FaYoutube>
        <FaLinkedinIn></FaLinkedinIn>
      </div>
      <div className="h-full w-[60%]">
        <p className="text-[40px] font-bold text-center flex items-center justify-center">
          Frost Master Private Limited
        </p>
      </div>
      <div className="h-full w-[20%] flex items-center px-4 text-[24px] justify-end">
        contact us
      </div>
    </div>
  );
};

export default Header;
