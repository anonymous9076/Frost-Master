"use client";
import React, { useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiContractLeftLine } from "react-icons/ri";
import { RiExpandRightLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
const Sidebar = () => {
  const [active, setActive] = useState(true);
  const router = useRouter();
  const handleCloseSidebar = () => {
    setActive((curr) => !curr);
  };

  return (
    <>
      {active ? (
        <div className="h-full p-4 w-[15%] min-w-[250px] relative flex flex-col border-r-2 border-blue-400 transition-all duration-300 ease-in-out   bg-white">
          <div onClick={handleCloseSidebar} className=" flex items-center absolute top-[40%] right-[-12%] bg-white border-2  rounded-full translate-y-1/2 justify-end   p-3 border-blue-400 text-[25px]">
            <span className="text-blue-400">
              <RiContractLeftLine />
            </span>{" "}
          </div>
          <div className="py-2 w-full  shadow-md rounded-lg text-center bg-blue-400 text-white text-[25px] font-black flex items-center justify-center gap-3">
            <FaKitchenSet />The Frost{" "}
          </div>
          <ul className="flex-1 cursor-pointer w-full py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <li
            onClick={()=>router.push('/admin/users')}
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Customers"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <RiCustomerService2Fill />
              </span>{" "}
              Customers
            </li>
            <li
            onClick={()=>router.push('/admin/products')
            }
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Product Management Metrics"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px] ">
                <AiOutlineProduct />
              </span>{" "}
              Products MM
            </li>
            <li
              onClick={()=>router.push('/admin/orders')}
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Orders"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineShoppingCart />
              </span>{" "}
              Orders
            </li>
            <li
            onClick={()=>router.push('/admin/payments')}
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Payments"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlinePayments />
              </span>{" "}
              Payments
            </li>
            <li
            onClick={()=>router.push('/admin/settings')}
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Settings"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <LuSettings />
              </span>{" "}
              Settings
            </li>
            <li
            onClick={()=>router.push('/admin/enquiry')}
              className="py-3  w-full flex items-center px-4 rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="enquiry"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineSupportAgent />
              </span>{" "}
              Enquiry
            </li>
          </ul>
          <div className="py-2 w-full rounded-lg bg-blue-400 font-bold text-center flex gap-2 items-center justify-center text-white">
            {" "}
            <RiLogoutCircleLine></RiLogoutCircleLine> Logout
          </div>
        </div>
      ) : (
        <div className="h-full p-2  w-[60px] min-w-[60px] flex flex-col border-r-2 border-blue-400 transition-all duration-300 ease-in-out relative bg-white">
          
          <div onClick={handleCloseSidebar} className=" flex items-center absolute top-[40%] right-[-45%] bg-white border-2  rounded-full translate-y-1/2 justify-end   p-3 border-blue-400 text-[25px]">
            <span className="text-blue-400">
              <RiExpandRightLine />
            </span>{" "}
          </div>
          <div className="py-2 w-full shadow-md rounded-lg text-center bg-blue-400 text-white text-[25px] font-black flex items-center justify-center gap-3">
            <FaKitchenSet />{" "}
          </div>
          <ul className="flex-1 w-full py-3 m-0 text-gray-700  flex flex-col gap-2 ">
            <li
            onClick={()=>router.push('/admin/users')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Customers"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <RiCustomerService2Fill />
              </span>{" "}
            </li>
            <li
            onClick={()=>router.push('/admin/products')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Product Management Metrics"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px] ">
                <AiOutlineProduct />
              </span>{" "}
            </li>
            <li
            onClick={()=>router.push('/admin/orders')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Orders"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineShoppingCart />
              </span>{" "}
            </li>
            <li
            onClick={()=>router.push('/admin/payments')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Payments"
            >
              {" "}
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlinePayments />
              </span>{" "}
            </li>
            <li
            onClick={()=>router.push('/admin/settings')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="Settings"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <LuSettings />
              </span>{" "}
            </li>
            <li
            onClick={()=>router.push('/admin/enquiry')}
              className="py-3  w-full flex items-center justify-center rounded-2xl hover:shadow-lg hover:bg-blue-400 hover:text-white  gap-3 text-[16px] group"
              title="enquiry"
            >
              <span className="group-hover:text-white text-blue-400 text-[22px]">
                <MdOutlineSupportAgent />
              </span>{" "}
            </li>
          </ul>
          <div
            className="py-2 w-full rounded-lg bg-blue-400 font-bold flex items-center justify-center text-center  text-white"
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
