"use client";
import Image from "next/image";
import React, { useState } from "react";
import CancelOrderModel from "./CancelOrderModel";
import Link from "next/link";

const MyOrderItem = () => {
  const products = [
    {
      title: "Large Mixing Bowl",
      image: "/Images/bak1.jpg",
      category: "Mixing",
      in_stock: true,
      review: 4.5,
      status: "Delivered",
      delivery: "Jan 2 2025",
      orderId: "#34HJ85NVI4NJ4BFIEI5",
    },
    {
      title: "Wooden Rolling Pin",
      image: "/Images/bak2.jpg",
      category: "Baking",
      in_stock: false,
      review: 1.3,
      status: "Pending",
      delivery: "Jan 2 2025",
      orderId: "#34HJ85NVI4NJF9F8H3",
    },
    {
      title: "Wooden Rolling Pin",
      image: "/Images/bak2.jpg",
      category: "Baking",
      in_stock: false,
      review: 3.3,
      status: "Cancelled",
      delivery: "Jan 2 2025",
      orderId: "#34HJ85NVI4NZOAKXKZOA",
    },
  ];

  const [cancle, setCancle] = useState<boolean>(false);

  const handleCloseModel = () => {
    setCancle((curr) => !curr);
  };
  return (
    <div className="!cursor-pointer select-none relative">
      {cancle ? (
        <CancelOrderModel handleclose={handleCloseModel}></CancelOrderModel>
      ) : (
        ""
      )}

      <p>{products.length} Items</p>
      <div className="grid w-full grid-cols-1 py-2 gap-4 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="  w-full flex h-fit border-b py-[2rem] px-[2rem] border-gray-400"
          >
            <Image
              src={product.image}
              alt=""
              height={400}
              width={400}
              className="w-min-[200px] w-[22%] h-[150px] "
            ></Image>
            <div className="px-[2rem] flex-1 flex items-center  gap-3">
              <div className="flex-1 gap-1">
                <p className="whitespace-nowrap overflow-hidden">
                  {" "}
                  Order Id : {product.orderId}
                </p>
                <h1 className="text-[20px] font-bold  ">
                  Gas Oven Three Deck Nine Tray
                </h1>
                <p className="text-[20px] font-medium ">$234,344</p>
                {product.status === "Delivered" ||
                product.status === "Cancelled" ? (
                  ""
                ) : (
                  <div className="flex gap-4">
                    <Link href='myorders/34'>
                    <button className="olive mt-3 text-white w-[120px] text-center py-2 rounded-lg">
                      Track Order
                    </button>
                    </Link>
                    <button
                      onClick={handleCloseModel}
                      className="bg-red-400 mt-3 text-white w-[120px] text-center py-2 rounded-lg"
                    >
                      Cancel Order
                    </button>
                  </div>
                )}
              </div>
              <div className="flex-1 flex items-center text-[20px] font-bold flex-col gap-2  ">
                Status
                <p
                  className={`${
                    product.status == "Delivered"
                      ? "text-green-500"
                      : product.status === "Cancelled"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {" "}
                  {product.status}
                </p>
              </div>
              <div className="flex-1 flex items-center text-[20px] flex-col gap-2 font-bold ">
                Dilevery Excepted By
                {product.status === "Delivered" ||
                product.status === "Cancelled" ? (
                  ""
                ) : (
                  <p className="font-normal">{product.delivery}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderItem;
