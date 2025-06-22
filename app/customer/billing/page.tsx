import dynamic from "next/dynamic";
import React from "react";

const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const PriceCard = dynamic(() => import("@/components/PriceCard"));
const BillingForm = dynamic(() => import("./BillingForm"));

const page = () => {
  return (
    <div className="relative">
      <Navbar active=""></Navbar>
      <div className="h-fit w-full flex flex-col lg:flex-row   light">
        <div className=" w-full lg:w-[70%] h-fit py-[2rem] px-[4rem] ">
          <BillingForm></BillingForm>
        </div>
        <div className="flex-1 py-[2rem] lg:px-[1rem] px-[2rem] xl:px-[2rem]">
          <PriceCard button={false} totalPrice={100}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
