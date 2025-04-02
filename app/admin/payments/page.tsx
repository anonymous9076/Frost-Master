"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";
// import { IoIosSearch } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
// import { BsPerson } from "react-icons/bs";
import Pagination from "@/components/Pagination";
import { IoReload } from "react-icons/io5";
import AdminLayout from "@/components/AdminLayout";
const showPayments = () => {
  const orders = [
    {
      orderId: "ORD123456",
      customerName: "John Doe",
      date: "2025-03-20",
      totalAmount: 259.99,
      status: "Delivered",
      paymentMethod: "Credit Card",
      paymentId: "PAY987654",
    },
    {
      orderId: "ORD789012",
      customerName: "Jane Smith",
      date: "2025-03-18",
      totalAmount: 149.5,
      status: "Pending",
      paymentMethod: "PayPal",
      paymentId: "PAY654321",
    },
    {
      orderId: "ORD345678",
      customerName: "Michael Johnson",
      date: "2025-03-15",
      totalAmount: 89.99,
      status: "Cancelled",
      paymentMethod: "Debit Card",
      paymentId: "PAY123789",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-200 text-green-500"; // Green for Delivered
      case "Pending":
        return "bg-yellow-200 text-yellow-700"; // Yellow for Pending
      case "Approved":
        return "bg-blue-200 text-blue-500"; // Blue for Approved
      case "Cancelled":
        return "bg-red-200 text-red-500"; // Red for Cancelled
      default:
        return "bg-gray-200"; // Gray for other cases
    }
  };
  function handleOnChange() {}

  return (
    <AdminLayout>
      <div className="h-screen  w-full flex bg-gray-100">
        <Sidebar></Sidebar>
        <div className="flex-1 h-full text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Payments
            {/* <span className="w-fit h-fit relative">
            <input
              type="search"
              className="outline-none py-1 rounded-md px-2 font-normal border-2 text-[15px] border-gray-300 w-[350px]"
              placeholder="Search Order ID or Customer Name..."
            ></input>
            <span className=" absolute right-3 top-[6px] text-gray-500 ">
              <IoIosSearch></IoIosSearch>
            </span>
          </span> */}
          </div>
          <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
            <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
              <span className="w-full flex  items-start flex-col ">
                Search
                <input
                  type="search"
                  placeholder="Search by Transaction ID or Order ID"
                  className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                ></input>
              </span>
              <span className="flex items-start flex-col ">
                Date
                <input
                  type="date"
                  className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                ></input>
              </span>
              <span className="flex items-start flex-col ">
                Payment Status
                <select className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  ">
                  <option value="">None</option>
                  <option value="Today">Approved</option>
                  <option value="Today">Pending</option>
                  <option value="Today">Delivered</option>
                  <option value="Today">Rejected</option>
                </select>
              </span>
            </div>
            <div className=" h-fit w-full  pt-[2rem]">
              <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                <li className="w-[15%]">Transaction ID</li>
                <li className="w-[15%]">Order ID</li>
                <li className="w-[17%]">Payment Method</li>
                <li className="w-[15%]">Status</li>
                <li className="w-[16%]">Date</li>
                <li className="w-[14%]">Total Amount</li>
                <li className="w-[8%]">Actions</li>
              </ul>

              {orders
                ? orders.splice(0, 7).map((item, index) => (
                    <ul
                      className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                      key={index}
                    >
                      <li className="w-[15%]">#{item.paymentId}</li>
                      <li className="w-[15%]">#{item.orderId}</li>
                      <li className="w-[17%] flex h-full gap-1 items-center">
                        {item.paymentMethod}
                      </li>
                      <li className="w-[15%]">
                        <span
                          className={`w-fit h-fit bg-gray-100 rounded-xl px-4 py-1 ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </li>
                      <li className="w-[16%]">{item.date}</li>
                      <li className="w-[14%]">${item.totalAmount}</li>
                      <li className="w-[8%] flex items-center gap-3">
                        <span
                          className="text-[18px] text-blue-400"
                          title="view"
                        >
                          <LuEye></LuEye>
                        </span>
                        <span
                          className="text-[16px] text-blue-400"
                          title="edit"
                        >
                          <FiEdit></FiEdit>
                        </span>
                        <span
                          className="text-[16px] text-blue-400"
                          title="reload"
                        >
                          <IoReload></IoReload>
                        </span>
                      </li>
                    </ul>
                  ))
                : ""}
              <div className="  flex items-center justify-between  w-full">
                <Pagination
                  totalPages={45}
                  currentPage={1}
                  handleOnChange={handleOnChange}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default showPayments;
