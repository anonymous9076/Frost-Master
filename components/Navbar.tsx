import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
interface navprops {
  active:string;
}
const Navbar = ({ active }: navprops) => {

  const navLinks = [
    { label: "Home", link: "/customer/home" },
    { label: "About Us", link: "/customer/about" },
    { label: "Our Products", link: "/customer/products" },
    // { label: "Careers", link: "/careers" },
    { label: "My Orders", link: "/customer/myorders" },
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
          <Link href='/customer/mycart' className={`${active==='/customer/mycart'?'transform hover:scale-110 active':' '}`}>
          <BsCart3></BsCart3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
