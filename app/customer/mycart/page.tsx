import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
const mycart = () => {
  return (
    <>
      <Navbar active="/customer/mycart"></Navbar>
      <div className="h-[70dvh] w-full flex   light">
        <div className="w-[70%] h-full">a</div>
        <div className="flex-1 p-[2rem]">
        <PriceCard></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default mycart;
