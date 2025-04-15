"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CancelOrderModel from "./CancelOrderModel";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { getAllOrders } from "@/app/api/Order";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
interface OrderProduct {
  _id: string;
  productId: string;
  quantity: number;
  price: number;
  productTitle: string;
  images: string[];
}
interface Order {
  _id: string;
  userId: string;
  createdAt: string; // or Date
  orderStatus: string;
  products: OrderProduct[];
}

const MyOrderItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [orders, setOrders] = useState([]);
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  // const products = [
  //   {
  //     title: "Large Mixing Bowl",
  //     image: "/Images/bak1.jpg",
  //     category: "Mixing",
  //     in_stock: true,
  //     review: 4.5,
  //     status: "Delivered",
  //     delivery: "Jan 2 2025",
  //     orderId: "#34HJ85NVI4NJ4BFIEI5",
  //   },
  //   {
  //     title: "Wooden Rolling Pin",
  //     image: "/Images/bak2.jpg",
  //     category: "Baking",
  //     in_stock: false,
  //     review: 1.3,
  //     status: "Pending",
  //     delivery: "Jan 2 2025",
  //     orderId: "#34HJ85NVI4NJF9F8H3",
  //   },
  //   // {
  //   //   title: "Wooden Rolling Pin",
  //   //   image: "/Images/bak2.jpg",
  //   //   category: "Baking",
  //   //   in_stock: false,
  //   //   review: 3.3,
  //   //   status: "Cancelled",
  //   //   delivery: "Jan 2 2025",
  //   //   orderId: "#34HJ85NVI4NZOAKXKZOA",
  //   // },
  // ];

  const [cancle, setCancle] = useState<boolean>(false);

  const handleCloseModel = () => {
    setCancle((curr) => !curr);
  };
  async function showOrdersData() {
    const res = await getAllOrders(currentPage);
    console.log(res, "res data orders ");
    setOrders(res.data);
    setTotalPages(res.totalPages);
  }
  useEffect(() => {
    showOrdersData();
  }, [currentPage]);
  return (
    <div className="!cursor-pointer select-none relative ">
      {cancle ? (
        <CancelOrderModel handleclose={handleCloseModel}></CancelOrderModel>
      ) : (
        ""
      )}

      <p>{orders?.length} Items</p>
      <div className="grid w-full grid-cols-1 py-2 gap-4 min-h-90">
        {orders?.map((product: Order, index: number) => (
          <div
            key={index}
            className="  w-full flex h-fit border-b py-[2rem] px-[2rem] border-gray-400"
          >
            <Image
              src={product?.products[0]?.images[0] || ""}
              alt=""
              height={400}
              width={400}
              className="w-min-[200px] w-[22%] h-[150px] "
            ></Image>
            <div className="px-[2rem] flex-1 flex items-center  gap-3">
              <div className="flex-1 gap-1">
                <p className="whitespace-nowrap overflow-hidden">
                  {" "}
                  Order Id : {product?._id}
                </p>
                <h1 className="text-[20px] font-bold  ">
                  {/* Gas Oven Three Deck Nine Tray */}
                  {product?.products[0]?.productTitle}
                </h1>
                {/* <p className="text-[20px] font-medium ">$234,344</p> */}
                {product?.orderStatus === "Delivered" ||
                product?.orderStatus === "Cancelled" ? (
                  <Link href={`myorders/${product?._id}`}>
                    <button className="olive mt-3 text-white w-[120px] text-center py-2 rounded-lg">
                      Order Details
                    </button>
                  </Link>
                ) : (
                  <div className="flex gap-4">
                    <Link href={`myorders/${product?._id}`}>
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
                    product?.orderStatus == "Delivered"
                      ? "text-green-500"
                      : product?.orderStatus === "Cancelled"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {" "}
                  {product?.orderStatus}
                </p>
              </div>
              <div className="flex-1 flex items-center text-[20px] flex-col gap-2 font-bold ">
                Order On
                {/* {product?.orderStatus === "Delivered" ||
                product?.orderStatus === "Cancelled" ? (
                  ""
                ) : ( */}
                <p className="font-normal">{dateFormate(product.createdAt)}</p>
                {/* )} */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleOnChange={handleOnChange}
        user="customer"
      ></Pagination>
    </div>
  );
};

export default MyOrderItem;
