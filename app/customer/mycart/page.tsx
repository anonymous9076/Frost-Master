import dynamic from "next/dynamic";
import React from "react";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
const PriceCard = dynamic(() => import("@/components/PriceCard"));
import MycartItem from "./MycartItem";

const mycart = () => {
  return (
    <>
      <Navbar active="/customer/mycart"></Navbar>
      <div className="h-fit w-full flex flex-col lg:flex-row  light">
        <div className="lg:w-[70%] w-full h-full py-[2rem] px-[1rem] lg:px-[4rem]">
          <div className=" gap-4">
            <h1 className="text-[25px] font-bold  ">My Cart</h1>
          </div>
          <MycartItem></MycartItem>
        </div>
        <div className="flex-1 p-[2rem]">
          <PriceCard button={true}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default mycart;
