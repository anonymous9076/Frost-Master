const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const MyOrderItem = dynamic(() => import("./MyOrdersItem"));
import dynamic from "next/dynamic";
import React from "react";

const Page = () => {
  return (
    <div className="light ">
      <Navbar active="/customer/myorders"></Navbar>
      <div className="w-[100%] mx-auto h-full py-[2rem] px-5 lg:px-[4rem]">
        <div className=" gap-4">
          <h1 className="text-[25px] font-bold  ">My Orders</h1>
        </div>
        <MyOrderItem></MyOrderItem>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Page;
