"use client";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("@/components/Sidebar"));
import React, { useEffect, useState } from "react";
const Pagination = dynamic(() => import("@/components/Pagination"));
import { FaRegTrashAlt } from "react-icons/fa";
const DeleteModel = dynamic(() => import("@/components/DeleteModel"));
const AddProductForm = dynamic(() => import("@/components/AddProductForm"));
const AdminLayout = dynamic(() => import("@/components/AdminLayout"));
import {
  deleteEnquiry,
  fetchEnquiriesTypesWithCount,
  fetchWeeklyEnquiryGraph,
  showEnquires,
  updateEnquiry,
} from "@/app/api/Admin/routeData";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
const EditProductForm = dynamic(() => import("@/components/EditProductForm"));
import enquires from "../../../EditModelData";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import PolarChart from "@/components/PolarGraph";
import LineChart from "@/components/LineGraph";
import { EnquiryCardData, EnquiryTypeResponse } from "@/app/types/enquiry";
interface EnquiryTypes {
  name: string;
  email: string;
  phone: string;
  date: string;
  status: string;
  _id: string;
}

const ProductManagement = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [editModel, setEditModel] = useState<boolean>(false);
  const [showModel1, setShowModel1] = useState<boolean>(false);
  const [showModel2, setShowModel2] = useState<boolean>(false);
  const [enquiries, setEnquiries] = useState([
    {
      _id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 234 567 8901",
      date: "2025-04-20T10:30:00Z",
      status: "Pending",
    },
    {
      _id: "2",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "+1 987 654 3210",
      date: "2025-04-21T14:45:00Z",
      status: "Completed",
    },
    {
      _id: "3",
      name: "Carol Davis",
      email: "carol.davis@example.com",
      phone: "+1 555 678 1234",
      date: "2025-04-22T09:15:00Z",
      status: "In Progress",
    },
    {
      _id: "4",
      name: "David Lee",
      email: "david.lee@example.com",
      phone: "+1 333 456 7890",
      date: "2025-04-23T16:20:00Z",
      status: "Cancelled",
    },
    {
      _id: "5",
      name: "Eva Green",
      email: "eva.green@example.com",
      phone: "+1 444 999 8888",
      date: "2025-04-24T11:05:00Z",
      status: "Pending",
    },
  ]);
  const [sortBy, setsortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [enquiryId, setEnquiryId] = useState("");
  const [enquiryType, setEnquiryType] = useState("none");
  const [numberOfEnquiriesInMonth, setNumberOfEnquiriesInMonth] = useState<
    number[]
  >([]);

  const enquiryStatuses = ["pending", "resolved"];
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [dataArray, setDataArray] = useState<EnquiryCardData[]>([]);
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
  // const numberOfEnquiriesInMonth = [45, 67, 33, 70];
  const enquiryTypeStyles: Record<
    string,
    {
      color: string;
      bg_color: string;
      text_color: string;
      icon: React.ReactNode;
    }
  > = {
    Feedback: {
      color: "#FA812F",
      bg_color: "bg-[#FA812F]",
      text_color: "text-[#FA812F]",
      icon: <IoChatbubbleEllipsesOutline />,
    },
    Sales: {
      color: "#6EC207",
      bg_color: "bg-[#6EC207]",
      text_color: "text-[#6EC207]",
      icon: <IoHelpCircleOutline />,
    },
    General: {
      color: "#60B5FF",
      bg_color: "bg-[#60B5FF]",
      text_color: "text-[#60B5FF]",
      icon: <IoInformationCircleOutline />,
    },
    Support: {
      color: "#FFD63A",
      bg_color: "bg-[#FFD63A]",
      text_color: "text-[#FFD63A]",
      icon: <IoCartOutline />,
    },
  };

  const handleEdit = async () => {
    try {
      await updateEnquiry(enquiryId, selectedStatus);
      setEditModel(false);
      loadCustomer();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while updating.");
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
    setEnquiryType("none");
    const data = await showEnquires(sortBy, enquiryType, currentPage);
    console.log(data.data, "customer data");
    setEnquiries(data.data);
    setTotalPages(data.totalPages);
    // setIsLoading(false);
  }

  async function getWeeklyDataInGraph() {
    try {
      const data = await fetchWeeklyEnquiryGraph();
      setNumberOfEnquiriesInMonth(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getEnquiryTypeAndCount() {
    try {
      const data = await fetchEnquiriesTypesWithCount();

      const allCategories = ["General", "Sales", "Feedback", "Support"];

      const mappedData: EnquiryCardData[] = allCategories.map((type) => {
        const apiItem = data.find(
          (item: EnquiryTypeResponse) => item.typeName === type
        );

        const style = enquiryTypeStyles[type] || {
          color: "#CCCCCC",
          bg_color: "bg-[#CCCCCC]",
          text_color: "text-[#CCCCCC]",
          icons: <IoInformationCircleOutline />,
        };

        return {
          ...style,
          category: type,
          numbers: apiItem ? apiItem.count : 0,
        };
      });

      setDataArray(mappedData);
      return mappedData;
    } catch (error) {
      console.log("Error fetching enquiry types:", error);
      return [];
    }
  }

  useEffect(() => {
    // setIsLoading(true);
    getWeeklyDataInGraph();
    getEnquiryTypeAndCount();
    loadCustomer();
  }, [sortBy, currentPage]);
  return (
    <AdminLayout>
      <div className="h-screen overflow-y-hidden overflow-x-hidden w-full flex bg-gray-100 relative">
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

        {editModel && (
          <div className="absolute flex items-center justify-center h-full w-full top-0 left-0 bg-[#00000080]">
            <div className="h-[200px] min-w-[300px] w-[30%] bg-white rounded-lg shadow-lg p-[1rem] px-[2rem] text-gray-600 flex items-start justify-evenly flex-col">
              <div className="w-full mb-4">
                <label className="block mb-1 font-medium">Change Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                >
                  {enquiryStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 w-full justify-end">
                <button
                  className="px-3 py-1 cursor-pointer border-2 border-gray-300 rounded-md"
                  onClick={() => setEditModel(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={handleEdit} // Call API here
                  className="px-3 py-1 border-2 cursor-pointer bg-green-500 border-green-500 text-white rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        <Sidebar></Sidebar>
        <div className="flex-1  h-[100dvh]  text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[2rem] sm:px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Customer Enquiry
            {/* <span className="w-fit h-fit relative">
    <div className="h-screen  w-full flex bg-gray-100 relative">
      {showModel?<DeleteModel handleCloseModel={handleCloseModel} category={'Product'}></DeleteModel>:''}
      {showModel1?<AddProductForm handleCloseModel={handleCloseAddProductModel}></AddProductForm>:''}
      {showModel2?<EditProductForm handleCloseModel={handleCloseEditProductModel} title='Enquiry' fields={enquires.enquiryFields} data={enquires.enquiryData} onsubmit={handleUpdateForm} ></EditProductForm>:''}
      <Sidebar ></Sidebar>
      <div className="flex-1 h-full text-gray-700 ">
        <div className="bg-white w-full h-[8%] px-[2rem] sm:px-[4rem] flex items-center text-[20px] font-bold justify-between">
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
          <div className=" max-w-[90dvw]  h-full overflow-x-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="px-[2rem] sm:px-[4rem] w-full bg-gray-100 min-w-[1200px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
              <div className="  w-full  grid pb-[1rem] grid-cols-4  place-items-center gap-5">
                {dataArray.map((item, index) => (
                  <span
                    key={index}
                    className="w-full min-w-[250px] h-[100px] p-2 flex gap-3 items-center bg-white shadow-sm rounded-lg"
                  >
                    <span
                      className={`w-[30%] h-full flex items-center justify-end`}
                    >
                      <span
                        className={`h-[65px] w-[65px] ${item.bg_color} text-white flex items-center justify-center text-[30px] rounded-full`}
                      >
                        {item.icon}
                      </span>
                    </span>
                    <span
                      className={`w-[70%] h-full flex justify-center flex-col  `}
                    >
                      <h1
                        className={`text-[30px] font-semibold ${item.text_color}`}
                      >
                        {item.numbers}
                      </h1>
                      <p>{item.category}</p>
                    </span>
                  </span>
                ))}
              </div>
              <div className="h-[50dvh] mb-[1rem] flex items-center gap-4  justify-center rounded-lg overflow-hidden w-full">
                <div className="w-[60%] h-full light flex items-center rounded-lg px-[1rem] justify-center">
                  <LineChart dataValues={numberOfEnquiriesInMonth}></LineChart>
                </div>
                <div className="w-[40%] h-full light flex items-center rounded-lg p-[1rem] justify-center">
                  <PolarChart dataValues={dataArray}></PolarChart>
                </div>
              </div>
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
                    <option value="none">All</option>
                    <option value="resolved">Resolved</option>
                    <option value="pending">Pending</option>
                  </select>
                </span>
                {/* <span className="flex items-start flex-col outline-none">
                  Enquiry Type
                  <select
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="bg-gray-100 outline-none py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                  >
                    <option value="None">None</option>
                    <option value="General">General</option>
                    <option value="Sales">Sales</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Support">Support</option>
                  </select>
                </span> */}
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
                              setEditModel(true);
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
      </div>
    </AdminLayout>
  );
};

export default ProductManagement;
