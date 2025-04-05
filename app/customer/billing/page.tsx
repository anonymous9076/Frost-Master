import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import PriceCard from "@/components/PriceCard";
import BillingForm from "./BillingForm";

const page = () => {
  return (
    <div className="relative" >
      <Navbar active=""></Navbar>
      <div className="h-fit w-full flex   light">
        <div className="w-[70%] h-fit py-[2rem] px-[4rem] ">
            <BillingForm></BillingForm>
        </div>
        <div className="flex-1 p-[2rem]">
          <PriceCard button={false}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
