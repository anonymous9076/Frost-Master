"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
// import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import { FiEdit } from "react-icons/fi";

import { MdDelete } from "react-icons/md";
import BlogForm from "./BlogForm";
// import { deleteProforma } from "@/app/api/Admin/routeData";
import DeleteModel from "@/components/DeleteModel";
import { toast } from "react-toastify";
import EditBlogForm from "./EditBlog";
// interface buyerInterface {
//   buyer_name: string;
// }
// interface ProformaInterface {
//   proformaName: string;
//   createdAt: string;
//   buyerName: string;
//   totalValue: number;
//   invoiceNumber: string;
//   grand_total: number;
//   buyer: buyerInterface;
//   pdf_path: string;
//   _id: string;
// }

interface Article {
  title: string;
  imagePath?: string;
  status?: "draft" | "published" | "archived";
  content: string;
  category: string;
}
const BlogCreation = () => {
  const [filterTransactionId, setFilterTransactionId] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // const [blogData, setBlogData] = useState<Article[]>([]);
  const [showModel1, setShowModel1] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [showEditModel, setShowEditModel] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<string>("");

  const dummyData: Article[] = [
    {
      title: "How to Start Gardening",
      imagePath: "/images/gardening.jpg",
      status: "published",
      content:
        "Gardening is a relaxing and rewarding hobby. This guide will help you get started with simple tips.",
      category: "Lifestyle",
    },
    {
      title: "Understanding JavaScript Closures",
      imagePath: "/images/js-closures.png",
      status: "draft",
      content:
        "Closures are a fundamental concept in JavaScript. They allow functions to access variables from an outer scope.",
      category: "Programming",
    },
  ];

  // console.log(showModel1);
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }

  async function showBlogData() {
    // setBlogData(data);
  }

  async function deleteBlogData() {
    console.log(blogId);
    toast.success("data deleted successfully");
    setShowModel(false);
    showBlogData();
  }
  useEffect(() => {
    setTotalPages(2);
    showBlogData();
  }, []);

  const handleCloseModel = () => {
    setShowModel(false);
  };
  const handleCloseModel1 = () => {
    setShowModel1(false);
    setShowEditModel(false);
  };
  // const handleCloseModel2 = () => {
  // };
  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden w-full flex bg-gray-100">
      <Sidebar></Sidebar>
      {showModel && (
        <DeleteModel
          handleCloseModel={handleCloseModel}
          category={"Blog"}
          deleteData={deleteBlogData}
        ></DeleteModel>
      )}
      <div className="flex-1 h-[100dvh] text-gray-700 ">
        <div className="bg-white w-full h-[8%] sm:px-[4rem] px-[2rem] flex items-center text-[20px] font-bold justify-between">
          Blog Management
          <span
            className="px-4 py-2 rounded-md bg-blue-400 whitespace-nowrap text-white text-[16px] font-normal hover:shadow-lg cursor-pointer"
            onClick={() => setShowModel1(true)}
          >
             + New Blog
          </span>
        </div>
        <div className=" max-w-[90dvw] mx-auto  h-full  overflow-x-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {showModel1 || showEditModel ? (
            showModel1 ? (
              <div className="px-[5%]  w-full  bg-gray-100  overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
                <BlogForm handleCloseModel1={handleCloseModel1}></BlogForm>
              </div>
            ) : (
              <div className="px-[5%]  w-full  bg-gray-100  overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
                <EditBlogForm
                  blogId={blogId}
                  handleCloseModel1={handleCloseModel1}
                ></EditBlogForm>
              </div>
            )
          ) : (
            <div className="px-[2rem] sm:px-[4rem]  w-full  bg-gray-100 min-w-[900px] overflow-x-auto   h-[92%] py-[2rem] text-[14px] ">
              <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
                <span className="w-full flex  items-start flex-col ">
                  Search
                  <input
                    type="search"
                    onChange={(e) => setFilterTransactionId(e.target.value)}
                    value={filterTransactionId}
                    placeholder="Search by Blog Name"
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
              {dummyData ? (
                <>
                  <div className=" h-fit max-h-[60dvh] overflow-y-auto w-full  pt-[2rem]">
                    <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                      <li className="w-[25%]">Title</li>
                      <li className="w-[30%]">Content</li>
                      <li className="w-[10%]"></li>
                      <li className="w-[15%]">Category</li>
                      <li className="w-[12%]">Status</li>
                      <li className="w-[8%]">Actions</li>
                    </ul>

                    {dummyData &&
                      dummyData.map((data, index) => (
                        <>
                          <ul
                            className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                            key={index}
                          >
                            <li className="w-[25%] line-clamp-1 pr-2 ">
                              {data.title}
                            </li>
                            <li className="w-[30%] line-clamp-1 pr-2 ">
                              {data.content}
                            </li>
                            <li className="w-[10%]"></li>

                            <li className="w-[15%] ">{data.category}</li>
                            <li className="w-[12%]">{data.status}</li>

                            <li className="w-[8%] flex items-center gap-3">
                              <span
                                className="text-[20px] text-blue-400 cursor-pointer"
                                title="Edit"
                                onClick={() => {
                                  setShowEditModel(true);
                                  //give id here
                                  setBlogId(data?.title);
                                }}
                              >
                                <FiEdit></FiEdit>
                              </span>
                              <span
                                className="text-[20px] text-blue-400 cursor-pointer"
                                title="delete"
                                onClick={() => {
                                  setShowModel(true);
                                  setBlogId(data?.title);
                                }}
                              >
                                <MdDelete></MdDelete>
                              </span>
                            </li>
                          </ul>
                        </>
                      ))}
                  </div>
                  <div className="  flex items-center justify-between  w-full">
                    <Pagination
                      totalPages={totalPages}
                      currentPage={currentPage}
                      handleOnChange={handleOnChange}
                      user="admin"
                    ></Pagination>
                  </div>
                </>
              ) : (
                <div className="w-full text-center py-5 text-xl">
                  No Date Found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCreation;
