"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ProformaForm from "./ProfromaForm";
interface ProformaInterface {
  proformaName: string;
  createdAt: string;
  buyerName: string;
  totalValue: number;
}

const Proforma = () => {
  const [filterTransactionId, setFilterTransactionId] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [proformaData, setProformaData] = useState<ProformaInterface[]>([]);
  const [showModel1, setShowModel1] = useState<boolean>(true);

  const Proforma = [
    {
      proformaName: "proforma1",
      buyerName: "proforma1",
      totalValue: 123,
      createdAt: "12.3.2025",
    },
    {
      proformaName: "proforma2",
      buyerName: "proforma1",
      totalValue: 256,
      createdAt: "12.3.2025",
    },
  ];

  console.log(showModel1);
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  useEffect(() => {
    setTotalPages(2);
    setProformaData(Proforma);
  }, []);

  return (
    <div className="h-screen overflow-y-hidden w-full flex bg-gray-100">
      <Sidebar></Sidebar>
      <div className="flex-1 h-[100dvh] text-gray-700 ">
        <div className="bg-white w-full h-[8%] md:px-[4rem] px-[1rem] flex items-center text-[20px] font-bold justify-between">
          Proforma Invoice
          <span
            className="px-4 py-2 rounded-md bg-blue-400 whitespace-nowrap text-white text-[16px] font-normal hover:shadow-lg cursor-pointer"
            onClick={() => setShowModel1((curr) => !curr)}
          >
            {showModel1 ? "+ New Proforma" : "Back"}
          </span>
        </div>
        <div className=" max-w-[90dvw]  h-full overflow-x-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {showModel1 ? (
            <div className="px-[4rem]  w-full bg-gray-100 min-w-[900px] overflow-x-auto   h-[92%] py-[2rem] text-[14px] ">
              <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
                <span className="w-full flex  items-start flex-col ">
                  Search
                  <input
                    type="search"
                    onChange={(e) => setFilterTransactionId(e.target.value)}
                    value={filterTransactionId}
                    placeholder="Search by Proforma Name"
                    className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                  ></input>
                </span>
                <span className="flex items-start flex-col ">
                  Date
                  <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="bg-gray-100 py-1 px-2 w-full  md:w-[160px] border-2 border-gray-200 rounded-md  "
                  ></input>
                </span>
              </div>
              <div className=" h-fit max-h-[60dvh] overflow-y-auto w-full  pt-[2rem]">
                <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                  <li className="w-[25%]">Proforma Name</li>
                  <li className="w-[25%]">Buyer Name</li>
                  <li className="w-[20%]">Total Value</li>
                  <li className="w-[15%]">Date</li>
                  <li className="w-[15%]">Actions</li>
                </ul>

                {proformaData
                  ? proformaData?.map(
                      (item: ProformaInterface, index: number) => (
                        <ul
                          className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                          key={index}
                        >
                          <li className="w-[25%] ">{item?.proformaName}</li>
                          <li className="w-[25%] ">{item?.buyerName}</li>
                          <li className="w-[20%] ">{item?.totalValue}</li>

                          <li className="w-[15%]">
                            {dateFormate(item?.createdAt)}
                          </li>

                          <li className="w-[15%] flex items-center gap-3">
                            <span
                              className="text-[18px] text-blue-400"
                              title="view"
                            >
                              <LuEye></LuEye>
                            </span>
                            <span
                              className="text-[20px] text-blue-400"
                              title="download"
                            >
                              <MdOutlineFileDownload></MdOutlineFileDownload>
                            </span>
                            <span
                              className="text-[20px] text-blue-400"
                              title="delete"
                            >
                              <MdDelete></MdDelete>
                            </span>
                            {/* <span
                        className="text-[16px] text-blue-400"
                        title="reload"
                      >
                        <IoReload></IoReload>
                      </span> */}
                          </li>
                        </ul>
                      )
                    )
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
          ) : (
            <ProformaForm></ProformaForm>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proforma;
