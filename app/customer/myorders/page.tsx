import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import MyOrderItem from "./MyOrdersItem";

const page = () => {
  return (
    <div className="light ">
      <Navbar active="/customer/myorders"></Navbar>
      <div className="w-[100%] mx-auto h-full py-[2rem] px-[4rem]">
        <div className=" gap-4">
          <h1 className="text-[25px] font-bold  ">My Orders</h1>
        </div>
        <MyOrderItem></MyOrderItem>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
