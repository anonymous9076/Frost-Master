"use client";
import React, { useState } from "react";
const ProductCard = dynamic(() => import("./ProductCard"));
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
import { productSuggestionType } from "@/app/customer/products/product-details/ProductDetailSection";
import dynamic from "next/dynamic";
import EnquiryModel from "../app/customer/products/components/EnquiryModel";
import CardSlider from "./AutoSlider";
// interface Product {
//   avgRating: number;
//   category: string;
//   images: string[];
//   material: string;
//   numberOfRatings: number;
//   price: number;
//   productDescription: string;
//   productTitle: string;
//   subCategory: string;
//   _id: string;
// }
interface ProductSuggestionInterface {
  productSuggestion: productSuggestionType[];
}
interface EnquiryPropField {
  id: string;
  active: boolean;
}
const Recommendation = ({ productSuggestion }: ProductSuggestionInterface) => {
  console.log(productSuggestion[0], "props data 9090");
  // const productsList = [
  //   {
  //     title: "Large Mixing Bowl",
  //     image: "/Images/bak1.jpg",
  //     category: "Mixing",
  //     in_stock: true,
  //     review: 4.5,
  //     allReview: 3,
  //   },
  //   {
  //     title: "Heavy-Duty Whisk",
  //     image: "/Images/bak3.jpg",
  //     category: "Whisking",
  //     in_stock: true,
  //     review: 4.3,
  //     allReview: 3,
  //   },
  //   {
  //     title: "Wooden Rolling Pin",
  //     image: "/Images/bak2.jpg",
  //     category: "Baking",
  //     in_stock: false,
  //     review: 4.7,
  //     allReview: 3,
  //   },

  //   {
  //     title: "Heavy-Duty Whisk",
  //     image: "/Images/bak3.jpg",
  //     category: "Whisking",
  //     in_stock: true,
  //     review: 4.3,
  //     allReview: 3,
  //   },
  // ];
  // const [products, setProducts] = useState<Product[]>([...productSuggestion]);
  const [enquiryProp, setEnquiryProp] = useState<EnquiryPropField>({
    id: "",
    active: false,
  });

  // const handleShiftLeft = () => {
  //   setProducts((prevProducts) => {
  //     if (prevProducts.length === 0) return prevProducts; // Handle empty array case

  //     const newProducts = [...prevProducts]; // Clone the array
  //     const lastItem = newProducts.pop(); // Remove the last item

  //     return lastItem ? [lastItem, ...newProducts] : newProducts; // Add it to the start
  //   });
  // };

  // const handleShiftRight = () => {
  //   setProducts((prevProducts) => {
  //     if (prevProducts.length === 0) return prevProducts; // Handle empty array case

  //     const newProducts = [...prevProducts]; // Clone the array
  //     const firstItem = newProducts.shift(); // Remove the first item

  //     return firstItem ? [...newProducts, firstItem] : newProducts; // Add it to the end
  //   });
  // };

  const handleEnquiryModel = (ids: string, active: boolean) => {
    console.log("data===>", typeof ids, active);
    // to make imidate change use funtional state
    setEnquiryProp(() => ({
      id: ids,
      active: active,
    }));
  };
  console.log(productSuggestion, "chekkckt hios tojwoittoooosdo2");

  return (
    <div className=" flex h-fit  items-center w-full ">
      {enquiryProp.id !== "" && <EnquiryModel data={enquiryProp} />}

      <CardSlider
        slides={productSuggestion}
        slidesPerView={4}
        spaceBetween={30}
        navigation
        pagination={false}
        autoplay={false}
        className="custom-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1500: { slidesPerView: 4 },
        }}
      >
        {(product) => (
          <div className="w-full ">
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
          </div>
        )}
      </CardSlider>

      {/* <span
        onClick={handleShiftRight}
        className="flex-1 scale-200 transform flex items-center justify-center"
      >
        <FaChevronRight></FaChevronRight>
      </span> */}
    </div>
  );
};

export default Recommendation;
