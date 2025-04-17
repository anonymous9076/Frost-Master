"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CancelOrderModel from "../CancelOrderModel";
import Image from "next/image";
import Stepper from "@/components/Stepper";
import { usePathname } from "next/navigation";
import { getOrderDetails } from "@/app/api/Order";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
interface OrderProduct {
  _id: string;
  productId: { productTitle: string; price: number };
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
  product: OrderProduct[];
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zipCode: number;
    country: string;
  };
}
const OrderDetails = () => {
  const pathname = usePathname();
  const [orderId, setOrderId] = useState(
    pathname.split("/")[pathname.split("/").length - 1]
  );
  const [cancle, setCancle] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [orderDetails, setOrderDetails] = useState<Order>();
  const NUMBER_OF_STEPS = 5;
  const product = {
    title: "Large Mixing Bowl",
    image: "/Images/bak1.jpg",
    category: "Mixing",
    in_stock: true,
    review: 4.5,
    status: "Pending",
    delivery: "Jan 2 2025",
    orderId: "#34HJ85NVI4NJ4BFIEI5",
    deliveryPhase: 3,
  };

  const handleCloseModel = () => {
    setCancle((curr) => !curr);
  };

  const orderDetailsData = async () => {
    const res = await getOrderDetails(orderId);
    setOrderDetails(res.data);
    console.log(res.data, "order details data here");
  };

  useEffect(() => {
    setOrderId(pathname.split("/")[pathname.split("/").length - 1]);
    setCurrentStep(product.deliveryPhase);
    orderDetailsData();
  }, [product.deliveryPhase]);
  return (
    <div>
      <Navbar active="/customer/myorders"></Navbar>

      <div className="min-h-screen h-fit w-full light ">
        <h1 className="text-[35px] font-bold  pt-5 w-[90%] mx-auto">
          Order Detail
        </h1>

        <div className="!cursor-pointer select-none relative  w-[90%] py-[2rem] mx-auto">
          {cancle ? (
            <CancelOrderModel handleclose={handleCloseModel}></CancelOrderModel>
          ) : (
            ""
          )}

          <div className="w-full">
            <div className="  w-full flex h-fit py-[2rem] px-[2rem] ">
              <Image
                src={product.image}
                alt=""
                height={400}
                width={400}
                className="w-min-[200px] w-[22%] h-[200px] "
              ></Image>
              <div className="px-[2rem] flex-1 flex items-center  gap-3">
                <div className="flex-1 gap-1">
                  <p className="whitespace-nowrap overflow-hidden">
                    {" "}
                    Order Id : {orderDetails?._id}
                  </p>
                  <h1 className="text-[20px] font-bold  ">
                    {orderDetails?.product[0]?.productId?.productTitle}
                  </h1>

                  <p className="text-[16px] font-medium ">
                    Total Quantity : {orderDetails?.product[0]?.quantity}
                  </p>
                  <p className="text-[20px] font-medium ">
                    {orderDetails?.product[0]?.productId?.price}
                  </p>
                  {orderDetails?.orderStatus === "Delivered" ||
                  orderDetails?.orderStatus === "Cancelled" ? (
                    ""
                  ) : (
                    <div className="flex gap-4">
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
                      orderDetails?.orderStatus == "Delivered"
                        ? "text-green-500"
                        : orderDetails?.orderStatus === "Cancelled"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {" "}
                    {orderDetails?.orderStatus}
                  </p>
                </div>
                <div className="flex-1 flex items-center text-[20px] flex-col gap-2 font-bold ">
                  Dilevery Excepted By
                  {/* {orderDetails?.orderStatus === "Delivered" ||
                  orderDetails?.orderStatus === "Cancelled" ? (
                    ""
                  ) : ( */}
                  <p className="font-normal">
                    {dateFormate(orderDetails?.createdAt as string)}
                  </p>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[25px] font-bold  py-2 ">Shipping Details</h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              {" "}
              <h3 className="text-[20px]  font-semibold "> Depart From</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                John Smith 123 Maple Street Springfield, IL 62704 United States
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px]   font-semibold "> Shipped To</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                {/* Skyline Technologies Pvt. Ltd. 5th Floor, Orchid Business Park
                Golf Course Road, Sector 54 Gurgaon, Haryana 122002 India */}
                {`${orderDetails?.shippingAddress?.address}`}
                <br />
                {`${orderDetails?.shippingAddress?.city}, ${orderDetails?.shippingAddress?.state}, ${orderDetails?.shippingAddress?.country}`}
                <br />
                {`${orderDetails?.shippingAddress?.zipCode}`}
              </p>
            </div>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">
            Delivery Partner Details
          </h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              <h3 className="text-[20px]   font-semibold "> Delivered By</h3>
              <p className="w-[50%] min-w-[200px] pl-[1rem]">
                Skyline Technologies Pvt. Ltd. 5th Floor, Orchid Business Park
                Golf Course Road, Sector 54 Gurgaon, Haryana 122002 India
              </p>
            </div>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">
            Tracking Details
          </h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <ul className="text-[16px] w-full space-y-[1rem]">
              <li className=" flex items-center gap-3 ">
                <span className="font-semibold">Tracking Id : </span>
                <span>#3JGB59GJH30FM</span>
              </li>
              <Stepper
                currentStep={currentStep}
                numberOfSteps={NUMBER_OF_STEPS}
              />
            </ul>
          </div>
          <h1 className="text-[25px] font-bold mt-6  py-2 ">Cost Details</h1>
          <div className="border flex justify-center border-gray-400 rounded-lg p-[2rem]">
            <div className="flex-1">
              <ul className="text-[16px] space-y-[1rem]">
                <li className=" flex items-center justify-between ">
                  <span>Price</span>
                  <span>$3059</span>
                </li>
                <li className=" flex items-center justify-between">
                  <span>Discount</span>
                  <span>$3059</span>
                </li>
                <li className="flex items-center justify-between ">
                  <span>Delivery Fee</span>
                  <span>$3059</span>
                </li>
              </ul>
              <div className="border border-gray-500 my-[2rem]"></div>
              <ul className="text-[16px] space-y-[1rem]">
                <li className=" flex items-center justify-between ">
                  <span>Net Amnount </span>
                  <span>$3059</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderDetails;
