/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
// import { IoIosSearch } from "react-icons/io";
import { LuEye } from "react-icons/lu";
// import { BsPerson } from "react-icons/bs";
import Pagination from "@/components/Pagination";
// import { IoReload } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteModel from "@/components/DeleteModel";
import AddProductForm from "@/components/AddProductForm";
import EditProductForm from "@/components/EditProductForm";
import product from '../../../EditModelData'
const ProductManagement = () => {

  const [showModel,setShowModel] = useState<boolean>(false)
  const [showModel1,setShowModel1] = useState<boolean>(false)
  const [showModel2,setShowModel2] = useState<boolean>(false)

  const enquiry = [
    {
      customer: "John Doe",
      orderId: "ORD123456",
      subject: "New Appointment",
      date: "2025-03-26",
      status: "Confirmed",
    },
    {
      customer: "Jane Smith",
      orderId: "ORD789012",
      subject: "Reschedule Request",
      date: "2025-03-25",
      status: "Pending",
    },
  ];
  
  const getStatusColor = (status:any) => {
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
  const handlePrevPages=()=>{
    console.log('prev')
  }
  const handleNextPages=()=>{
    console.log('next')
  }

  const handleCloseModel=()=>{
    setShowModel(false)
  } 
  const handleCloseAddProductModel=()=>{
    setShowModel1(false)
  } 
  const handleCloseEditProductModel=()=>{
    setShowModel2(false)
  }
  const handleUpdateForm=(data:any)=>{
    console.log(data)
  }
  // console.log()

  return (
    <div className="h-screen  w-full flex bg-gray-100 relative">
      {showModel?<DeleteModel handleCloseModel={handleCloseModel} category={'Product'}></DeleteModel>:''}
      {showModel1?<AddProductForm handleCloseModel={handleCloseAddProductModel}></AddProductForm>:''}
      {showModel2?<EditProductForm handleCloseModel={handleCloseEditProductModel} fields={product.productFields} data={product.productData} onsubmit={handleUpdateForm} ></EditProductForm>:''}
      <Sidebar ></Sidebar>
      <div className="flex-1 h-full text-gray-700 ">
        <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
          Customer Enquiry
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
          <span className="px-3 py-1 rounded-md bg-blue-400 text-white text-[16px] font-normal hover:shadow-lg cursor-pointer" onClick={()=>setShowModel1(true)}>+ New Product</span>
        </div>
        <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
          <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
            <span className="w-full flex  items-start flex-col ">
              Search
              <input type="search" placeholder="Search by Product Name" className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  ">
               
              </input>
            </span>
            <span className="flex items-start flex-col ">
              Filter by Status
              <select className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  ">
                <option value="">None</option>
              </select>
            </span>
            <span className="flex items-start flex-col ">
              Filter by Date
              <select className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  ">
                <option value="">None</option>
              </select>
            </span>
            <span className="flex items-start flex-col ">
              Sort By
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
              <li className="w-[15%]">Customer</li>
              <li className="w-[16%]">Order ID</li>
              <li className="w-[28%]">Subject </li>
              <li className="w-[15%]">Date</li>
              <li className="w-[15%]">Status</li>
              <li className="w-[11%]">Actions</li>
            </ul>

            {enquiry
              ? enquiry.splice(0,7).map((item, index) => (
                  <ul
                    className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                    key={index}
                  >
                    <li className="w-[15%]  whitespace-nowrap overflow-hidden">{item.customer}</li>
                    <li className="w-[16%] whitespace-nowrap overflow-hidden">#{item.orderId}</li>
                    <li className="w-[28%] flex h-full gap-1 items-center">{item.subject}</li>
                        <li className="w-[15%]">{item.date}</li>
                    <li className="w-[15%]">
                      <span className={`w-fit h-fit bg-gray-100 rounded-xl px-4 py-1 ${getStatusColor(
                item.status
              )}`}>
                      {item.status}
                      </span>
                      </li>
                    <li className="w-[11%] flex items-center gap-3">
                      {/* <span className="text-[18px] text-blue-400" title="view"><LuEye></LuEye></span> */}
                      <span className="text-[16px] text-blue-400" title="edit" ><LuEye></LuEye></span>
                      <span className="text-[16px] text-red-400" title="Delete" ><FaRegTrashAlt></FaRegTrashAlt></span>
                    </li>
                  </ul>
                ))
              : ""}
          <div className="  flex items-center justify-between  w-full">
           <Pagination
           totalPages={45}
           currentPage={1}
           handleNextPages={handleNextPages}
           handlePrevPages={handlePrevPages}
           user='admin'
           ></Pagination>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
