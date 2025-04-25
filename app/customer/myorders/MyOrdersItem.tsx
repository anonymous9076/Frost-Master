"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const CancelOrderModel = dynamic(() => import("./CancelOrderModel"));
import Link from "next/link";
const Pagination = dynamic(() => import("@/components/Pagination"));
import { getAllOrders } from "@/app/api/Order";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import dynamic from "next/dynamic";
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
  // const products: Order[] = [
  //   {
  //     _id: '#34HJ85NVI4NJ4BFIEI5',
  //     userId: 'string',
  //     createdAt: '2025-01-02',
  //     orderStatus: 'pending',
  //     products: [
  //       {
  //         _id: 'prod-001',
  //         productId: '123',
  //         productTitle: 'Large Mixing Bowl',
  //         quantity: 5,
  //         price: 4.5,
  //         images: ['/Images/bak1.jpg', '/Images/bak1.jpg', '/Images/bak1.jpg'],
  //       },
  //     ],
  //   },
  //   {
  //     _id: '#34HJ85NVI4NJ4BFIEI5',
  //     userId: 'string',
  //     createdAt: '2025-01-02',
  //     orderStatus: 'pending',
  //     products: [
  //       {
  //         _id: 'prod-001',
  //         productId: '123',
  //         productTitle: 'Large Mixing Bowl',
  //         quantity: 5,
  //         price: 4.5,
  //         images: ['/Images/bak1.jpg', '/Images/bak1.jpg', '/Images/bak1.jpg'],
  //       },
  //     ],
  //   },
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
            className="  w-full flex h-fit border-b py-[2rem] px-0 md:px-[2rem] border-gray-400"
          >
            <Image
              src={product?.products[0]?.images[0] || ""}
              alt=""
              height={400}
              width={400}
              className=" md:w-[22%] w-[27%] h-[80px] md:h-[150px] "
            ></Image>
            <div className="px-3 md:px-[2rem]  flex-1 flex items-center  gap-3">
              <div className="flex-1 gap-1">
                <p className="whitespace-nowrap text-[10px] md:text-[16px]  overflow-hidden">
                  {" "}
                  Order Id : {product?._id}
                </p>
                <h1 className="text-[10px] md:text-[20px] font-bold  ">
                  {/* Gas Oven Three Deck Nine Tray */}
                  {product?.products[0]?.productTitle}
                </h1>
                <div className="flex-1 flex flex-row items-center md:hidden text-[10px] lg:text-[20px] font-bold  gap-2  ">
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
                {/* <p className="text-[20px] font-medium ">$234,344</p> */}
                {product?.orderStatus === "Delivered" ||
                product?.orderStatus === "Cancelled" ? (
                  <Link href={`myorders/${product?._id}`}>
                    <button className="olive mt-3 text-white px-3 whitespace-nowrap  md:w-[120px] text-[8px] md:text-[16px] text-center py-2 rounded-md">
                      Order Details
                    </button>
                  </Link>
                ) : (
                  <div className="flex gap-1 md:gap-4">
                    <Link href={`myorders/${product?._id}`}>
                      <button className="olive mt-3 text-white px-3 whitespace-nowrap  md:w-[120px] text-[8px] md:text-[16px] text-center py-2 rounded-md">
                        Track Order
                      </button>
                    </Link>
                    <button
                      onClick={handleCloseModel}
                      className="bg-red-400 mt-3 text-white text-[8px] whitespace-nowrap md:text-[16px] px-3  md:w-[120px] text-center py-2 rounded-md"
                    >
                      Cancel Order
                    </button>
                  </div>
                )}
              </div>
              <div className="flex-1 md:flex items-center hidden text-[10px] md:text-[20px] font-bold flex-col gap-2  ">
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
              <div className="flex-1 flex items-center text-[10px] whitespace-nowrap md:text-[20px] flex-col gap-2 font-bold ">
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
