import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import MycartItem from "./MycartItem";
const mycart = () => {
  return (
    <>
      <Navbar active="/customer/mycart"></Navbar>
      <div className="h-fit w-full flex   light">
        <div className="w-[70%] h-full py-[2rem] px-[4rem]">
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
