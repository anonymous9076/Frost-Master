"use client";
import React, { useContext, useState } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import Image from "next/image";
import UserAuthContext from "@/app/context/userAuthContext";
import { logout } from "@/app/api/Auth/routeData";
import { toast } from "react-toastify";


interface navprops {
  active: string;
}
const Navbar = ({ active }: navprops) => {
  const navLinks = [
    { label: "Home", link: "/customer/home" },
    { label: "About Us", link: "/customer/about" },
    { label: "Our Products", link: "/customer/products" },
    // { label: "Careers", link: "/careers" },
    { label: "My Orders", link: "/customer/myorders" },
  ];
  const [profile, setProfile] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { isAuthenticated, user } = useContext(UserAuthContext);
  console.log(user, "user details");
  async function handleLogout() {
    try {
      const res = await logout();
      toast.success("logout successfully");
    } catch (error: any) {
      toast.error(error);
    }
  }
  return (
    <>
      <div
        className={`h-[10dvh] w-full sticky z-90 top-0 left-0  bg-[#235753] text-white flex items-center justify-between px-[2rem] md:px-[2rem] lg:px-[5rem] `}
      >
        <span className="text-[30px]">
          <FaKitchenSet></FaKitchenSet>
        </span>
        <div className=" text-white md:flex items-start md:gap-[30px] lg:gap-[55px]  text-[18px] hidden ">
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
          <span
            className="text-[22px] relative "
            onClick={() => setProfile((curr: boolean) => !curr)}
          >
            {profile && isAuthenticated ? (
              <div className="absolute top-[2rem] right-[-8rem] bg-white rounded-lg h-fit w-[300px]">
                <div className="w-full py-3 px-5 flex flex-col gap-3  ">
                  <div className="text-left  flex  rounded-full gap-3 items-center  object-contain  overflow-hidden ">
                    <Image
                      src="https://th.bing.com/th/id/OIP.ZO2UnkvC5wL3-vo0FeHfdgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      height={400}
                      width={400}
                      className=" customer_image h-[48px]  w-[53px]"
                      alt="customer"
                    />
                    <div className="text-gray-800 overflow-hidden whitespace-nowrap customer_name font-bold">
                      {user?.userName}
                    </div>
                  </div>
                  <div className="flex justify-between flex-col text-[16px]  ml-2">
                    <div className="text-gray-500 whitespace-nowrap overflow-hidden customer_email">
                      <span className="font-semibold text-black ">
                        Email :{" "}
                      </span>{" "}
                      {user?.email}
                    </div>
                    {/* <div className="text-gray-500 whitespace-nowrap overflow-hidden customer_phone">
                      <span className="font-semibold text-black ">
                        Phone :{" "}
                      </span>{" "}
                      +91 89574-58474
                    </div> */}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
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
          <span className="text-[25px] md:hidden" title="logout">
            <TbLogout2></TbLogout2>
          </span>
          <span
            className="text-[25px] md:hidden"
            onClick={() => setMenu((curr: boolean) => !curr)}
          >
            <IoIosMenu></IoIosMenu>
          </span>
          <Link
            className="hidden md:block"
            href={isAuthenticated ? "/customer/home" : "/signin"}
          >
            <button
              className="px-3 py-1 rounded-md olive ml-5 cursor-pointer"
              onClick={() => {
                if (isAuthenticated) {
                  handleLogout();
                } else {
                }
              }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
        {menu ? (
          <div className=" h-[90dvh] fixed flex flex-col z-1 top-[10dvh] right-0 bg-[#235753] text-white w-[300px]">
            <ul className=" w-full  flex-1 space-y-3 py-[2rem] ">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="py-2 hover:bg-white text-[18px] hover:text-[#235753] text-center"
                >
                  <Link
                    href={item.link}
                    className={`transform hover:scale-110 transition duration-200 ${
                      active === item.link ? "active " : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="w-full text-white text-center py-5 border-t border-white text-[22px]">
              The Frost Pvt Ltd.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
