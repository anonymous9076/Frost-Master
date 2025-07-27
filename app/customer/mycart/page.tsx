"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
const PriceCard = dynamic(() => import("@/components/PriceCard"));
const MycartItem = dynamic(() => import("./MycartItem"));

const Mycart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <>
      <Navbar active="/customer/mycart"></Navbar>
      <div className="h-fit w-full  px-[5%] lg:px-[3%] flex flex-col lg:flex-row  light">
        <div className="lg:w-[65%] w-full h-[80dvh] py-[2rem] ">
          <div className=" gap-4">
            <h1 className="text-[25px] font-bold  ">My Cart</h1>
          </div>
          <div className=" h-[95%]  ">
          <MycartItem setTotalPrice={setTotalPrice}></MycartItem>
          </div>
        </div>
        <div className="flex-1 py-[2rem] pl-[3%]">
          <PriceCard button={true} totalPrice={totalPrice}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Mycart;
