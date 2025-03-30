import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
interface navprops {
  position: string;
  bg: string;
  text: string;
  active:string
}
const Navbar = ({ position, bg, text, active }: navprops) => {

  const navLinks = [
    { label: "Home", link: "/customer" },
    { label: "About Us", link: "/about" },
    { label: "Our Products", link: "/products" },
    { label: "Careers", link: "/careers" },
    { label: "Track shipment", link: "/track-shipment" },
  ];
  return (
    <>
      <div
        className={`h-[10dvh] w-full ${position} top-0 left-0 bg-${bg} text-${text} border-b border-white flex items-center justify-between px-[5rem] `}
      >
        <span className="text-[30px]">
          <FaKitchenSet></FaKitchenSet>
        </span>
        <div className="text-[#ffffff] flex items-start gap-[55px]  text-[14px]">
          {/* <a href="/customer" className={active=='customer'?`active transform hover:scale-110 transition duration-200"`:` transform hover:scale-110 transition duration-200`}>
            Home
          </a>
          <a className="transform hover:scale-110 transition duration-200" href="/about">About Us</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Our Products</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Careers</a>
          <a className="transform hover:scale-110 transition duration-200" href="">Track shipment</a> */}
          {navLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`transform hover:scale-110 transition duration-200 ${
            active === item.link ? "active" : ""
          }`}
        >
          {item.label}
        </a>
      ))}
        </div>
        <div className="flex items-center gap-3 text-[20px]">
          <span className="text-[22px]">
          <GoPerson></GoPerson>
          </span>
          <BsCart3></BsCart3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
