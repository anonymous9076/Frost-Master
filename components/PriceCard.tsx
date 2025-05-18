"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface priceProps {
  button: boolean;
}

const PriceCard = ({ button }: priceProps) => {
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [delivery, setDelivery] = useState<number>(0);
  const [netprice, setNetPrice] = useState<number>(0);
  const [DeliveryDate, setDeliveryDate] = useState<string>('--/--/----');
  const data = [{ price: 0 }, { price: 0 }, { price: 0 }];

  useEffect(() => {
    let initialPrice = 0;
    const initialDiscount = 254;
    const initialDelivery = 85;

    data.map((item) => {
      initialPrice = initialPrice + item.price;
    });
    console.log(initialPrice);
    setPrice(initialPrice);
    setDelivery(initialDelivery);
    setDiscount(initialDiscount);
  }, []);
  useEffect(() => {
    setNetPrice(price + discount + delivery);
    const date = getFormattedDateFiveDaysFromNow()
    setDeliveryDate(date);
  }, [price, discount, delivery]);

  const getFormattedDateFiveDaysFromNow = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 5);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className=" h-fit w-full border py-[2rem] px-[2rem] border-gray-500 rounded-lg">
      <h1 className="text-[25px] font-bold pb-[1rem] ">Order Summary</h1>
      <ul className="text-[16px] space-y-[1rem]">
        <li className=" flex items-center justify-between ">
          <span>Price</span>
          <span>${price}</span>
        </li>
        <li className=" flex items-center justify-between">
          <span>Discount</span>
          <span>${discount}</span>
        </li>
        <li className="flex items-center justify-between ">
          <span>Delivery Fee</span>
          <span>${delivery}</span>
        </li>
      </ul>
      <div className="border border-gray-500 my-[2rem]"></div>
      <ul className="text-[16px] space-y-[1rem]">
        <li className=" flex items-center justify-between ">
          <span>Net Amnount </span>
          <span>${netprice}</span>
        </li>
        <li className=" flex items-center justify-between">
          <span>Est. Delivery Time</span>
          <span>{DeliveryDate}</span>
        </li>
      </ul>
      {button ? (
        <Link href="billing">
          <button className="olive w-full text-center rounded-lg py-2 mt-7 ">
            Proceed to Checkout
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default PriceCard;
