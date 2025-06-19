import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
const ProductCard = dynamic(() => import("../../../../components/ProductCard"));
const Pagination = dynamic(() => import("@/components/Pagination"));
import { FaFilter } from "react-icons/fa";
import EnquiryModel from "../components/EnquiryModel";

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
  // const products = [
  //   {
  //     title: "Large Mixing Bowl",
  //     image: "/Images/bak1.jpg",
  //     category: "Mixing",
  //     in_stock: true,
  //     review: 4.5,
  //   },
  //   {
  //     title: "Wooden Rolling Pin",
  //     image: "/Images/bak2.jpg",
  //     category: "Baking",
  //     in_stock: false,
  //     review: 4.7,
  //   },
  //   {
  //     title: "Heavy-Duty Whisk",
  //     image: "/Images/bak3.jpg",
  //     category: "Whisking",
  //     in_stock: true,
  //     review: 4.3,
  //   },
  //   {
  //     title: "Metal Spatula",
  //     image: "/Images/bak4.jpg",
  //     category: "Flipping",
  //     in_stock: true,
  //     review: 4.6,
  //   },
  //   {
  //     title: "Large Strainer",
  //     image: "/Images/bak5.png",
  //     category: "Straining",
  //     in_stock: false,
  //     review: 4.4,
  //   },
  //   {
  //     title: "Big Soup Ladle",
  //     image: "/Images/bak6.jpg",
  //     category: "Serving",
  //     in_stock: true,
  //     review: 4.8,
  //   },
  //   // {
  //   //   title: "Oversized Cutting Board",
  //   //   image: "/Images/bak7.png",
  //   //   category: "Cutting",
  //   //   in_stock: false,
  //   //   review: 4.2,
  //   // },
  //   // {
  //   //   title: "Large Chef’s Knife",
  //   //   image: "/Images/bak8.jpg",
  //   //   category: "Chopping",
  //   //   in_stock: true,
  //   //   review: 4.9,
  //   // },
  //   // {
  //   //   title: "Big Pasta Strainer",
  //   //   image: "/Images/bak9.jpg",
  //   //   category: "Draining",
  //   //   in_stock: false,
  //   //   review: 4.5,
  //   // },
  // ];

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

  return (
    <div className="h-fit w-full  px-[2rem]">
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
    </div>
  );
};

export default ProductContainer;
