/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
const Pagination = dynamic(() => import("@/components/Pagination"));
import { FaRegTrashAlt } from "react-icons/fa";
const DeleteModel = dynamic(() => import("@/components/DeleteModel"));
const AddProductForm = dynamic(() => import("@/components/AddProductForm"));
const EditProductForm = dynamic(() => import("@/components/EditProductForm"));
import product from "../../../EditModelData";
const AdminLayout = dynamic(() => import("@/components/AdminLayout"));
import { showProducts } from "@/app/api/Admin/routeData";
import { dateFormate } from "@/app/utlis/dateFormate/dateFormating";
import useDebouncing from "@/app/hooks/useDebouncing";
import dynamic from "next/dynamic";
interface productsData {
  productTitle: string;
  category: string;
  price: string;
  date: string;
}
const ProductManagement = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [showModel1, setShowModel1] = useState<boolean>(false);
  const [showModel2, setShowModel2] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [searchProduct, setSearchProduct] = useState("");
  const [productCategory, setProductCategory] = useState("none");
  const [products, setProducts] = useState([]);
  const debouncedData = useDebouncing(searchProduct, 800);
  // const products = [
  //   {
  //     name: "Wireless Headphones 5G.hz",
  //     category: "Electronics", // Example category
  //     price: 259.99,
  //     status: "Delivered",
  //     stock: 20, // Example stock value
  //   },
  //   {
  //     name: "Black T-shirt",
  //     category: "Clothing", // Example category
  //     price: 149.5,
  //     status: "Pending",
  //     stock: 15, // Example stock value
  //   },
  //   {
  //     name: "Mixer Grinder 200W",
  //     category: "Home Appliances", // Example category
  //     price: 89.99,
  //     status: "Cancelled",
  //     stock: 0, // Stock is 0 for cancelled
  //   },
  // ];

  const productsCategory = [
    "Cookware",
    "Bakeware",
    "Cutlery",
    "Storage",
    "Kitchen Appliances",
    "Tableware",
    "Others",
  ];

  const handleCloseModel = () => {
    setShowModel(false);
  };
  const handleCloseAddProductModel = () => {
    setShowModel1(false);
  };
  const handleCloseEditProductModel = () => {
    setShowModel2(false);
  };
  const handleUpdateForm = (data: any) => {
    console.log(data);
  };
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  function deleteCustomerData() {}
  // // console.log()
  useEffect(() => {
    // setIsLoading(true);
    async function loadCustomer() {
      const data = await showProducts(
        debouncedData,
        productCategory,
        currentPage
      );
      // console.log(data.data, "customer data");
      setProducts(data?.data);
      setTotalPages(data?.totalPages);
      // setIsLoading(false);
    }
    loadCustomer();
  }, [currentPage, debouncedData, productCategory]);
  return (
    <AdminLayout>
      <div className="h-screen  w-full flex bg-gray-100 relative">
        {showModel ? (
          <DeleteModel
            handleCloseModel={handleCloseModel}
            category={"Product"}
            deleteCustomerData={deleteCustomerData}
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
            fields={product.productFields}
            data={product.productData}
            onsubmit={handleUpdateForm}
          ></EditProductForm>
        ) : (
          ""
        )}
        <Sidebar></Sidebar>
        <div className="flex-1 h-full text-gray-700 ">
          <div className="bg-white w-full h-[8%] px-[4rem] flex items-center text-[20px] font-bold justify-between">
            Products Management
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
            <span
              className="px-3 py-1 rounded-md bg-blue-400 text-white text-[16px] font-normal hover:shadow-lg cursor-pointer"
              onClick={() => setShowModel1(true)}
            >
              + New Product
            </span>
          </div>
          <div className="px-[4rem] w-full bg-gray-100 min-w-[900px] overflow-x-auto  h-[92%] py-[2rem] text-[14px] ">
            <div className="bg-white h-[5rem] w-full rounded-lg px-[1.5rem] flex items-center gap-3">
              <span className="w-full flex  items-start flex-col ">
                Search
                <input
                  type="search"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  placeholder="Search by Product Name"
                  className="bg-gray-100 py-1 px-2 w-full border-2 border-gray-200 rounded-md  "
                ></input>
              </span>
              <span className="flex items-start flex-col ">
                Category
                <select
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="bg-gray-100 py-1 px-2 w-[160px] border-2 border-gray-200 rounded-md  "
                >
                  <option value="none">None</option>
                  {productsCategory?.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <div className=" h-fit w-full  pt-[2rem]">
              <ul className=" m-0 p-0 flex items-center  px-[1.5rem]">
                <li className="w-[24%]">Product Name</li>
                <li className="w-[20%]">Category</li>
                <li className="w-[15%]">Price </li>
                <li className="w-[18%]">Date</li>
                <li className="w-[11%]">Actions</li>
              </ul>

              {products
                ? products.map((item: productsData, index: number) => (
                    <ul
                      className=" my-1 p-0 flex items-center py-3 px-[1.5rem] bg-white rounded-sm shadow-sm  "
                      key={index}
                    >
                      <li className="w-[24%] whitespace-nowrap overflow-hidden">
                        {item?.productTitle}
                      </li>
                      <li className="w-[20%] whitespace-nowrap overflow-hidden">
                        {item?.category}
                      </li>
                      <li className="w-[15%] flex h-full gap-1 items-center">
                        {item?.price}
                      </li>

                      <li className="w-[12%]">{dateFormate(item.date)}</li>
                      <li className="w-[11%] flex items-center gap-3">
                        {/* <span className="text-[18px] text-blue-400" title="view"><LuEye></LuEye></span> */}
                        <span
                          className="text-[16px] text-blue-400"
                          title="edit"
                          onClick={() => setShowModel2(true)}
                        >
                          <FiEdit></FiEdit>
                        </span>
                        <span
                          className="text-[16px] text-red-400"
                          title="Delete"
                          onClick={() => setShowModel(true)}
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

export default ProductManagement;
