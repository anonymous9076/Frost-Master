"use client";
import Sidebar from "@/components/Sidebar";
import React, { useContext, useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import Pagination from "@/components/Pagination";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteModel from "@/components/DeleteModel";
import UserAuthContext from "@/app/context/userAuthContext";
import AdminLayout from "@/components/AdminLayout";
import { showCustomers } from "@/app/api/Admin/route";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import useDebouncing from "@/app/hooks/useDebouncing";

const ShowUsers = () => {
  const [deleteModel, setDeleteModel] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const { user } = useContext(UserAuthContext);
  const [searchName, setSeachName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  console.log(user, "user yes yes");
  const debouncedData = useDebouncing(searchName, 800);
  // const users = [
  //   {
  //     userId: "USR123456",
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     registrationDate: "2025-03-20",
  //     status: "Active",
  //   },
  //   {
  //     userId: "USR789012",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     registrationDate: "2025-03-18",
  //     status: "Pending",
  //   },
  //   {
  //     userId: "USR345678",
  //     name: "Michael Johnson",
  //     email: "michael.johnson@example.com",
  //     registrationDate: "2025-03-15",
  //     status: "Inactive",
  //   },
  // ];

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case "Delivered":
  //       return "bg-green-200 text-green-500"; // Green for Delivered
  //     case "Pending":
  //       return "bg-yellow-200 text-yellow-700"; // Yellow for Pending
  //     case "Approved":
  //       return "bg-blue-200 text-blue-500"; // Blue for Approved
  //     case "Cancelled":
  //       return "bg-red-200 text-red-500"; // Red for Cancelled
  //     default:
  //       return "bg-gray-200"; // Gray for other cases
  //   }
  // };
  const handleCloseModel = () => {
    setDeleteModel(false);
  };

  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    async function loadCustomer() {
      const data = await showCustomers(debouncedData, currentPage);
      console.log(data.data, "customer data");
      setCustomers(data.data);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    }
    loadCustomer();
  }, [debouncedData, currentPage]);

  return (
    <AdminLayout>
      <div className="h-screen  w-full flex bg-gray-100">
        {deleteModel ? (
          <DeleteModel
            handleCloseModel={handleCloseModel}
            category={"User"}
          ></DeleteModel>
        ) : (
          ""
        )}
        <Sidebar></Sidebar>
        <div className="flex-1 h-full text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Users
          </div>
          <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
            <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
              <span className="w-full flex  items-start flex-col ">
                Search
                <input
                  type="search"
                  value={searchName}
                  onChange={(e) => setSeachName(e.target.value)}
                  placeholder="Search Customer By Name"
                  className="bg-gray-100 outline-none py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                ></input>
              </span>
            </div>
            <div className=" h-fit w-full  pt-[2rem]">
              <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                <li className="w-[15%]">User ID</li>
                <li className="w-[17%]">Name</li>
                <li className="w-[25%]">Email Address</li>
                <li className="w-[18%]">Registration Date</li>
                <li className="w-[10%]">Actions</li>
              </ul>

              {customers
                ? customers.map((item, index) => (
                    <ul
                      className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                      key={index}
                    >
                      <li className="w-[15%]">{index + 1}</li>
                      <li className="w-[17%] flex h-full gap-1 items-center">
                        <BsPerson></BsPerson> {item?.userName}
                      </li>
                      <li className="w-[25%]">{item?.email}</li>
                      <li className="w-[18%]">
                        {dateFormate(item?.createdAt)}
                      </li>

                      <li className="w-[10%] flex items-center gap-3">
                        <span
                          className="text-[16px] text-red-400"
                          title="Delete"
                          onClick={() => setDeleteModel(true)}
                        >
                          <FaRegTrashAlt></FaRegTrashAlt>
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

export default ShowUsers;
