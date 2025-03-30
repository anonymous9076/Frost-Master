import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
// instead of using anchor tag we have to use link in next
// anchor tag will render all the pages at a same time but link will only render page that we want to navigate
// event will not works on server side so we have to use it on client side
// we will define button on component and use strict client at top so that component will client side component
// event will work on client side well
// dont use whole page or component for client side rendering because if we do something like this
// website will be not seo friendly
const Navbar = () => {
  return (
    <>
      <div className="h-[12dvh] w-full bg-white border-2 text-[#4C585B] flex items-center justify-between px-[5rem] border-gray-300">
        <span className="text-[40px]">
          <FaKitchenSet></FaKitchenSet>
        </span>
        <div className="text-[#4C585B] flex items-start gap-[45px] text-[20px]">
          <a href="/customer" className="font-semibold">
            Home
          </a>
          <a href="/about">About Us</a>
          <a href="">Our Products</a>
          <a href="">Careers</a>
          <a href="">Track shipment</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
