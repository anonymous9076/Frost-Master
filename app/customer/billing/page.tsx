"use client";
import { CartState, useCartStore } from "@/app/stores/CartStore";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const PriceCard = dynamic(() => import("@/components/PriceCard"));
const BillingForm = dynamic(() => import("./BillingForm"));
interface FlattenedCartProduct {
  userId: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string | null;
  rating: number;
}
const Page = () => {
  const { cartData } = useCartStore(
    useShallow((state: CartState) => ({
      cartData: state.cartData,
    }))
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);
  function calculatePrice() {
    const totalPrice = cartData.reduce(
      (acc: number, item: FlattenedCartProduct) =>
        acc + item.price * item.quantity,
      0
    );

    console.log(totalPrice, cartData, "price totak");
    setTotalPrice(totalPrice);
  }
  useEffect(() => {
    calculatePrice();
  }, []);
  return (
    <div className="relative">
      <Navbar active=""></Navbar>
      <div className="h-fit w-full flex flex-col lg:flex-row   light">
        <div className=" w-full lg:w-[70%] h-fit py-[2rem] px-[4rem] ">
          <BillingForm></BillingForm>
        </div>
        <div className="flex-1 py-[2rem] lg:px-[1rem] px-[2rem] xl:px-[2rem]">
          <PriceCard button={false} totalPrice={totalPrice}></PriceCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Page;
