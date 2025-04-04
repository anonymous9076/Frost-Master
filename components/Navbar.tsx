import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
// instead of using anchor tag we have to use link in next
// anchor tag will render all the pages at a same time but link will only render page that we want to navigate
// event will not works on server side so we have to use it on client side
// we will define button on component and use strict client at top so that component will client side component
// event will work on client side well
// dont use whole page or component for client side rendering because if we do something like this
// website will be not seo friendly
interface navprops {
  active: string;
}
const Navbar = ({ active }: navprops) => {
  const navLinks = [
    { label: "Home", link: "/customer/home" },
    { label: "About Us", link: "/about" },
    { label: "Our Products", link: "/customer/products" },
    { label: "Careers", link: "/careers" },
    { label: "Track shipment", link: "/track-shipment" },
  ];
  return (
    <>
      <div
        className={`h-[10dvh] w-full sticky z-90 top-0 left-0 bg-[#235753] text-white flex items-center justify-between px-[5rem] `}
      >
        <span className="text-[30px]">
          <FaKitchenSet></FaKitchenSet>
        </span>
        <div className=" text-white flex items-start gap-[55px]  text-[18px]">
          {/* <a href="/customer" className={active=='customer'?`active transform hover:scale-110 transition duration-200"`:` transform hover:scale-110 transition duration-200`}>
            Home
          </a>
          <a className="transform hover:scale-110 transition duration-200" href="/about">About Us</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Our Products</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Careers</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Track shipment</a> */}
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`transform hover:scale-110 transition duration-200 ${
                active === item.link ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center text-white gap-3 text-[20px]">
          <span className="text-[22px]">
            <GoPerson></GoPerson>
          </span>
          <Link
            href="/customer/mycart"
            className={`${
              active === "/customer/mycart"
                ? "transform hover:scale-110 active"
                : " "
            }`}
          >
            <BsCart3></BsCart3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
