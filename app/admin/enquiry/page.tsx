"use client";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("@/components/Sidebar"));
import React, { useEffect, useState } from "react";
const Pagination = dynamic(() => import("@/components/Pagination"));
import { FaRegTrashAlt } from "react-icons/fa";
const DeleteModel = dynamic(() => import("@/components/DeleteModel"));
const AddProductForm = dynamic(() => import("@/components/AddProductForm"));
const AdminLayout = dynamic(() => import("@/components/AdminLayout"));
import { deleteEnquiry, showEnquires } from "@/app/api/Admin/routeData";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
const EditProductForm = dynamic(() => import("@/components/EditProductForm"));
import enquires from "../../../EditModelData";

interface EnquiryTypes {
  name: string;
  email: string;
  phone: number;
  date: string;
  status: string;
  _id: string;
}
const ProductManagement = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [showModel1, setShowModel1] = useState<boolean>(false);
  const [showModel2, setShowModel2] = useState<boolean>(true);
  const [enquiries, setEnquiries] = useState([]);
  const [sortBy, setsortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [enquiryId, setEnquiryId] = useState("");
  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-200 text-green-500"; // Green for Delivered
      case "pending":
        return "bg-yellow-200 text-yellow-700"; // Yellow for Pending

      default:
        return "bg-gray-200"; // Gray for other cases
    }
  };

  async function deleteEnquiryData() {
    const res = await deleteEnquiry(enquiryId);
    toast.success(res.message);
    setShowModel(false);
    loadCustomer();
  }
  const handleCloseModel = () => {
    setShowModel(false);
  };
  const handleCloseAddProductModel = () => {
    setShowModel1(false);
  };
  const handleCloseEditProductModel = () => {
    setShowModel2(false);
  };
  const handleUpdateForm = (data: string) => {
    console.log(data);
  };

  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  async function loadCustomer() {
    const data = await showEnquires(sortBy, currentPage);
    console.log(data.data, "customer data");
    setEnquiries(data.data);
    setTotalPages(data.totalPages);
    // setIsLoading(false);
  }
  useEffect(() => {
    // setIsLoading(true);

    loadCustomer();
  }, [sortBy, currentPage]);
  return (
    <AdminLayout>
      <div className="h-screen overflow-y-hidden w-full flex bg-gray-100 relative">
        {showModel ? (
          <DeleteModel
            handleCloseModel={handleCloseModel}
            category={"Enquiry"}
            deleteData={deleteEnquiryData}
          ></DeleteModel>
        ) : (
          ""
        )}
        {showModel1 ? (
          <AddProductForm
            handleCloseModel={handleCloseAddProductModel}
          ></AddProductForm>
        ) : (
          ""
        )}
        {showModel2 ? (
          <EditProductForm
            handleCloseModel={handleCloseEditProductModel}
            title="Enquiry"
            fields={enquires.enquiryFields}
            // data={enquires.enquiryData}
            onsubmit={handleUpdateForm}
            productId={"1"}
          ></EditProductForm>
        ) : (
          ""
        )}
        <Sidebar></Sidebar>
        <div className="flex-1 min-w-[1200px] h-[100dvh] text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Customer Enquiry
            {/* <span className="w-fit h-fit relative">
    <div className="h-screen  w-full flex bg-gray-100 relative">
      {showModel?<DeleteModel handleCloseModel={handleCloseModel} category={'Product'}></DeleteModel>:''}
      {showModel1?<AddProductForm handleCloseModel={handleCloseAddProductModel}></AddProductForm>:''}
      {showModel2?<EditProductForm handleCloseModel={handleCloseEditProductModel} title='Enquiry' fields={enquires.enquiryFields} data={enquires.enquiryData} onsubmit={handleUpdateForm} ></EditProductForm>:''}
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
          </div>
          <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
            <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
              {/* <span className="w-full flex  items-start flex-col ">
                Search
                <input
                  type="search"
                  placeholder="Search by Product Name"
                  className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                ></input>
              </span> */}
              {/* <span className="flex items-start flex-col ">
                Filter by Status
                <select className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  ">
                  <option value="">None</option>
                </select>
              </span> */}

              <span className="flex items-start flex-col outline-none">
                Sort By
                <select
                  onChange={(e) => setsortBy(e.target.value)}
                  className="bg-gray-100 outline-none py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                >
                  <option value="None">None</option>
                  <option value="resolved">Resolved</option>
                  <option value="pending">Pending</option>
                </select>
              </span>
            </div>
            <div className=" h-fit w-full max-h-[60dvh] overflow-y-auto pt-[2rem]">
              <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                <li className="w-[15%]">Customer</li>
                <li className="w-[16%]">Email</li>
                <li className="w-[28%]">Phone </li>
                <li className="w-[15%]">Date</li>
                <li className="w-[15%]">Status</li>
                <li className="w-[11%]">Actions</li>
              </ul>

              {enquiries
                ? enquiries.map((item: EnquiryTypes, index: number) => (
                    <ul
                      className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                      key={index}
                    >
                      <li className="w-[15%]  whitespace-nowrap overflow-hidden">
                        {item?.name}
                      </li>
                      <li className="w-[16%] whitespace-nowrap overflow-hidden">
                        {item?.email}
                      </li>
                      <li className="w-[28%] flex h-full gap-1 items-center">
                        {item?.phone}
                      </li>
                      <li className="w-[15%]">{dateFormate(item.date)}</li>
                      <li className="w-[15%]">
                        <span
                          className={`w-fit h-fit bg-gray-100 rounded-xl px-4 py-1 ${getStatusColor(
                            item?.status
                          )}`}
                        >
                          {item?.status}
                        </span>
                      </li>
                      <li className="w-[11%] flex items-center gap-3">
                        <span
                          className="text-[16px] text-blue-400"
                          title="edit"
                          onClick={() => {
                            setShowModel(true);
                            setEnquiryId(item?._id);
                          }}
                        >
                          <FiEdit></FiEdit>
                        </span>

                        <span
                          className="text-[16px] text-red-400"
                          title="Delete"
                          onClick={() => {
                            setShowModel(true);
                            setEnquiryId(item?._id);
                          }}
                        >
                          <FaRegTrashAlt></FaRegTrashAlt>
                        </span>
                      </li>
                    </ul>
                  ))
                : ""}
            </div>
              <div className="  flex items-center justify-between  w-full">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  handleOnChange={handleOnChange}
                  user="admin"
                ></Pagination>
              </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
