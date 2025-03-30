"use client";
import React, { useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const Sidebar = () => {
  const [active, setActive] = useState(true);
  const handleCloseSidebar = () => {
    setActive((curr) => !curr);
  };

  return (
    <>
      {active ? (
        <div className="h-full w-[15%] min-w-[250px] relative flex flex-col  transition-all duration-300 ease-in-out   bg-white">
          <div className="py-4 w-full  shadow-md  text-left bg-blue-400 text-white text-[18px] font-black flex items-center justify-between px-3 ">
            <div className="flex items-center gap-3 whitespace-nowrap">
            <FaKitchenSet />The Frost{" "}
            </div>
            <span className="text-white text-[22px]" onClick={handleCloseSidebar}>
              <TbLayoutSidebarLeftCollapseFilled />
            </span>{" "}
          </div>
          
          <div className="flex-1 cursor-pointer w-full py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <Link
            href='/admin/users'
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Customers"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <RiCustomerService2Fill />
              </span>{" "}
              Customers
            </Link>
            <Link
            href='/admin/products'
            
              className="py-3  w-full flex items-center px-4 whitespace-nowrap rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Product Management Metrics"
            >
              {" "}
              <span className="group-hover:text-white  text-blue-400 text-[22px] ">
                <AiOutlineProduct />
              </span>{" "}
              Products MM
            </Link>
            <Link
              href='/admin/orders'
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Orders"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineShoppingCart />
              </span>{" "}
              Orders
            </Link>
            <Link
            href='/admin/payments'
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Payments"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlinePayments />
              </span>{" "}
              Payments
            </Link>
            <Link
            href='/admin/settings'
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Settings"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <LuSettings />
              </span>{" "}
              Settings
            </Link>
            <Link
            href='/admin/enquiry'
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="enquiry"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineSupportAgent />
              </span>{" "}
              Enquiry
            </Link>
          </div>
          <div className="py-2 w-full rounded-lg bg-blue-400 font-bold text-center flex gap-2 items-center justify-center text-white">
            {" "}
            <RiLogoutCircleLine></RiLogoutCircleLine> Logout
          </div>
        </div>
      ) : (
        <div className="h-full w-[60px] min-w-[60px] flex flex-col  transition-all duration-300 ease-in-out relative bg-white">
          
        
          <div onClick={handleCloseSidebar} className="py-4 w-full shadow-md bg-blue-400  text-center  text-white text-[25px] font-black flex items-center justify-center gap-3">
            <TbLayoutSidebarLeftExpandFilled />{" "}
          </div>
          <div className="flex-1 w-full py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <Link
            href='/admin/users'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Customers"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <RiCustomerService2Fill />
              </span>{" "}
            </Link>
            <Link
            href='/admin/products'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Product Management Metrics"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px] ">
                <AiOutlineProduct />
              </span>{" "}
            </Link>
            <Link
            href='/admin/orders'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Orders"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineShoppingCart />
              </span>{" "}
            </Link>
            <Link
            href='/admin/payments'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Payments"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlinePayments />
              </span>{" "}
            </Link>
            <Link
            href='/admin/settings'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Settings"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <LuSettings />
              </span>{" "}
            </Link>
            <Link
            href='/admin/enquiry'
              className="py-3  w-[90%] mx-auto flex items-center justify-center rounded-lg hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="enquiry"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineSupportAgent />
              </span>{" "}
            </Link>
          </div>
          <div
            className="py-2 w-[90%] mx-auto rounded-lg bg-blue-400 font-bold flex items-center justify-center text-center  text-white"
            title="Logout"
          >
            <RiLogoutCircleLine></RiLogoutCircleLine>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
