'use client'
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
const ProductCard = dynamic(() => import("../../../../components/ProductCard"));
const Pagination = dynamic(() => import("@/components/Pagination"));
import { FaFilter } from "react-icons/fa";
import EnquiryModel from "../components/EnquiryModel";
import Loader from "@/components/Loader";

interface ProductsProps {
  searchProduct: string;
  setSearchProduct: (value: string) => void;
  handleToggleFilter: () => void;
  productsData: [];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: number) => void;
}
interface EnquiryPropField {
  id: string;
  active: boolean;
}
interface ProductTypes {
  productTitle: string;
  images: [string];
  avgRating: number;
  numberOfRatings: number;
  _id: string;
  price: number;
  category: string;
}
const ProductContainer = (props: ProductsProps) => {
  const [showLoader, setShowLoader] = useState(true);
  const {
    searchProduct,
    setSearchProduct,
    productsData,
    currentPage,
    handleToggleFilter,
    totalPages,
    setCurrentPage,
  } = props;

  const [enquiryProp, setEnquiryProp] = useState<EnquiryPropField>({
    id: "",
    active: false,
  });
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  const handleEnquiryModel = (ids: string, active: boolean) => {
    console.log("data===>", ids, active);
    // to make imidate change use funtional state
    setEnquiryProp(() => ({
      id: ids,
      active: active,
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000); 

    
  }, [productsData]);

  return (
    <div className="h-fit w-full  px-[5%]">
      {enquiryProp.id !== "" && <EnquiryModel data={enquiryProp} />}

      <div className=" text-[25px] md:text-[35px] px-3   flex items-center justify-between font-bold">
        Our Collection Of Products{" "}
        <span
          className="text-[#35736E] xl:hidden text-[25px]"
          onClick={() => handleToggleFilter()}
        >
          <FaFilter></FaFilter>
        </span>{" "}
      </div>

      <span className="h-fit w-full relative">
        <input
          type="search"
          className="py-2 rounded-full my-5 border border-gray-300 px-4 w-full"
          placeholder="Search an Item"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        ></input>
        <span className="h-[35px] w-[35px] absolute flex items-center justify-center top-[-50%] right-1 rounded-full olive">
          <IoSearch></IoSearch>
        </span>
      </span>

      {totalPages > 0 && !showLoader ? (
        <>
          <div className="grid w-full  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full  py-[1rem] gap-5">
            {productsData?.map((product: ProductTypes, index: number) => (
              <span key={index} className="">
                <ProductCard
                  title={product?.productTitle}
                  image={product?.images[0]}
                  review={product?.avgRating}
                  totalReview={product?.numberOfRatings}
                  productId={product?._id}
                  price={product?.price}
                  rating={product?.avgRating}
                  category={product?.category}
                  handleEnquiryModel={handleEnquiryModel}
                ></ProductCard>
              </span>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleOnChange={handleOnChange}
            user="customer"
          ></Pagination>
        </>
      ) : showLoader ? (
        <div className=" py-4 w-full justify-center flex items-center">
          <Loader />
        </div>
      ) : (
        <div className="py-4 text-center text-xl">No Data Found</div>
      )}
    </div>
  );
};

export default ProductContainer;
