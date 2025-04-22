import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import PriceCard from "@/components/PriceCard";
import BillingForm from "./BillingForm";

const page = () => {
  return (
    <div className="relative" >
      <Navbar active=""></Navbar>
      <div className="h-fit w-full flex flex-col lg:flex-row   light">
        <div className=" w-full lg:w-[70%] h-fit py-[2rem] px-[4rem] ">
            <BillingForm></BillingForm>
        </div>
        <div className="flex-1 py-[2rem] lg:px-[1rem] px-[2rem] xl:px-[2rem]">
          <PriceCard button={false}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
