"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
const Pagination = dynamic(() => import("@/components/Pagination"));
const AdminLayout = dynamic(() => import("@/components/AdminLayout"));
import { showOrders } from "@/app/api/Admin/routeData";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import dynamic from "next/dynamic";
interface OrderItem {
  productDetails: { productTitle: string }[];
  createdAt: string;
  totalAmount: number;
  orderStatus: string;
}
const ShowOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [orders, setOrders] = useState([]);
  const [dateRage, setDateRange] = useState("none");
  const [status, setStatus] = useState("none");
  // const orders = [
  //   {
  //     orderId: "ORD123456",
  //     customerName: "John Doe",
  //     orderDate: "2025-03-20",
  //     totalAmount: 259.99,
  //     status: "Delivered",
  //   },
  //   {
  //     orderId: "ORD789012",
  //     customerName: "Jane Smith",
  //     orderDate: "2025-03-18",
  //     totalAmount: 149.5,
  //     status: "Pending",
  //   },
  //   {
  //     orderId: "ORD345678",
  //     customerName: "Michael Johnson",
  //     orderDate: "2025-03-15",
  //     totalAmount: 89.99,
  //     status: "Cancelled",
  //   },
  // ];

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

  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  // // console.log()
  useEffect(() => {
    // setIsLoading(true);
    async function loadCustomer() {
      const data = await showOrders(dateRage, status, currentPage);
      // console.log(data.data, "customer data");
      setOrders(data?.data);
      setTotalPages(data?.totalPages);
      // setIsLoading(false);
    }
    loadCustomer();
  }, [dateRage, status, currentPage]);

  return (
    <AdminLayout>
      <div className="h-screen  w-full flex bg-gray-100">
        <Sidebar></Sidebar>
        <div className="flex-1 h-full text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Orders
          </div>
          <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
            <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
              {/* <span className="w-full flex  items-start flex-col ">
                Search
                <input
                  type="search"
                  placeholder="Search by Customer Name"
                  className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                ></input>
              </span> */}
              <span className="flex items-start flex-col ">
                Date Range
                <select
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                >
                  <option value="none">None</option>
                  <option value="today">Today</option>
                  <option value="lastWeek">Last Week</option>
                  <option value="lastMonth">Last Month</option>
                  <option value="lastYear">Last Year</option>
                </select>
              </span>
              <span className="flex items-start flex-col ">
                Order Status
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                >
                  <option value="none">None</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </span>
              {/* <span className="flex items-start flex-col ">
                Payment Status
                <select className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  ">
                  <option value="">None</option>
                  <option value="Today">All Payments</option>
                  <option value="Today">Online</option>
                  <option value="Today">Net Banking</option>
                  <option value="Today">UPI</option>
                </select>
              </span> */}
            </div>
            <div className=" h-fit w-full  pt-[2rem]">
              <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                <li className="w-[17%]">OrderId</li>
                <li className="w-[21%]">Product Name</li>
                <li className="w-[19%]">Order Date</li>
                <li className="w-[17%]">Total Amount</li>
                <li className="w-[16%]">Status</li>
                <li className="w-[10%]">Actions</li>
              </ul>

              {orders
                ? orders.map((item: OrderItem, index: number) => (
                    <ul
                      className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                      key={index}
                    >
                      <li className="w-[17%]">#{index + 1}</li>
                      <li className="w-[21%] flex h-full gap-1 items-center">
                        {/* <BsPerson></BsPerson>{" "} */}
                        {item?.productDetails[0]?.productTitle}
                      </li>
                      <li className="w-[19%]">
                        {dateFormate(item?.createdAt)}
                      </li>
                      <li className="w-[17%]">${item?.totalAmount}</li>
                      <li className="w-[16%]">
                        <span
                          className={`w-fit h-fit bg-gray-100 rounded-xl px-4 py-1 ${getStatusColor(
                            item?.orderStatus
                          )}`}
                        >
                          {item?.orderStatus}
                        </span>
                      </li>
                      <li className="w-[10%] flex items-center gap-3">
                        <span className="text-[18px] text-blue-400">
                          <LuEye></LuEye>
                        </span>
                        <span className="text-[16px] text-blue-400">
                          <FiEdit></FiEdit>
                        </span>
                      </li>
                    </ul>
                  ))
                : ""}
              <div className="  flex items-center justify-between  w-full">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
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

export default ShowOrders;
