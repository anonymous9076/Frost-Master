"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ProformaForm from "./ProfromaForm";
import { deleteProforma, getProforma } from "@/app/api/Admin/routeData";
import DeleteModel from "@/components/DeleteModel";
import { toast } from "react-toastify";
interface buyerInterface {
  buyer_name: string;
}
interface ProformaInterface {
  proformaName: string;
  createdAt: string;
  buyerName: string;
  totalValue: number;
  invoiceNumber: string;
  grand_total: number;
  buyer: buyerInterface;
  pdf_path: string;
  _id: string;
}

const Proforma = () => {
  const [filterTransactionId, setFilterTransactionId] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [proformaData, setProformaData] = useState<ProformaInterface[]>([]);
  const [showModel1, setShowModel1] = useState<boolean>(true);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [proformaId, setProformaId] = useState<string>("");
  // const Proforma = [
  //   {
  //     proformaName: "proforma1",
  //     buyerName: "proforma1",
  //     totalValue: 123,
  //     createdAt: "12.3.2025",
  //   },
  //   {
  //     proformaName: "proforma2",
  //     buyerName: "proforma1",
  //     totalValue: 256,
  //     createdAt: "12.3.2025",
  //   },
  // ];

  console.log(showModel1);
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }

  async function showProforma() {
    const data = await getProforma(1);
    console.log(data, "proforma data is");
    setProformaData(data);
  }


  const handleCloseModel = () => {
    setShowModel(false);
  };
  async function deleteProformaData() {
    const res = await deleteProforma(proformaId);
    console.log(res)
    toast.success("data deleted successfully");
    setShowModel(false);
    showProforma();
  }
  useEffect(() => {
    setTotalPages(2);
    showProforma();
  }, []);

  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden w-full flex bg-gray-100">
      <Sidebar></Sidebar>
      {showModel && (
        <DeleteModel
          handleCloseModel={handleCloseModel}
          category={"Proforma"}
          deleteData={deleteProformaData}
        ></DeleteModel>
      )}
      <div className="flex-1 h-[100dvh] text-gray-700 ">
        <div className="bg-white w-full h-[8%] sm:px-[4rem] px-[2rem] flex items-center text-[20px] font-bold justify-between">
          Proforma Invoice
          <span
            className="px-4 py-2 rounded-md bg-blue-400 whitespace-nowrap text-white text-[16px] font-normal hover:shadow-lg cursor-pointer"
            onClick={() => setShowModel1((curr) => !curr)}
          >
            {showModel1 ? "+ New Proforma" : "Back"}
          </span>
        </div>
        <div className=" max-w-[90dvw] mx-auto  h-full  overflow-x-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {showModel1 ? (
            <div className="px-[2rem] sm:px-[4rem]  w-full  bg-gray-100 min-w-[900px] overflow-x-auto   h-[92%] py-[2rem] text-[14px] ">
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
                  <li className="w-[25%]">Buyer Name</li>
                  <li className="w-[25%]">Invoice Number</li>
                  <li className="w-[20%]">Total Value</li>
                  <li className="w-[15%]">Date</li>
                  <li className="w-[15%]">Actions</li>
                </ul>

                {proformaData && proformaData.length > 0
                  ? proformaData?.map(
                      (item: ProformaInterface, index: number) => (
                        <ul
                          className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                          key={index}
                        >
                          <li className="w-[25%] ">
                            {item?.buyer?.buyer_name}
                          </li>
                          <li className="w-[25%] ">{item?.invoiceNumber}</li>
                          <li className="w-[20%] ">{item?.grand_total}</li>

                          <li className="w-[15%]">
                            {dateFormate(item?.createdAt)}
                          </li>

                          <li className="w-[15%] flex items-center gap-3">
                            <a
                              href={`${process.env.NEXT_PUBLIC_BACKENDURL}${item.pdf_path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View"
                              className="text-[18px] text-blue-400"
                            >
                              <LuEye></LuEye>
                            </a>
                            <a
                              href={`${process.env.NEXT_PUBLIC_BACKENDURL}${item.pdf_path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Download"
                              className="text-[20px] text-blue-400"
                            >
                              <MdOutlineFileDownload></MdOutlineFileDownload>
                            </a>
                            <span
                              className="text-[20px] text-blue-400 cursor-pointer"
                              title="delete"
                              onClick={() => {
                                setShowModel(true);
                                setProformaId(item?._id);
                              }}
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
