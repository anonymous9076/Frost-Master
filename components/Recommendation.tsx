"use client";
import React, { useState } from "react";
const ProductCard = dynamic(() => import("./ProductCard"));
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { productSuggestionType } from "@/app/customer/products/product-details/ProductDetailSection";
import dynamic from "next/dynamic";
interface Product {
  title: string;
  image: string;
  category: string;
  in_stock: boolean;
  review: number;
  allReview: number;
}
const Recommendation = (props: any) => {
  const { productSuggestion } = props;
  console.log(props, "props data 9090");
  const productsList = [
    {
      title: "Large Mixing Bowl",
      image: "/Images/bak1.jpg",
      category: "Mixing",
      in_stock: true,
      review: 4.5,
      allReview: 3,
    },
    {
      title: "Heavy-Duty Whisk",
      image: "/Images/bak3.jpg",
      category: "Whisking",
      in_stock: true,
      review: 4.3,
      allReview: 3,
    },
    {
      title: "Wooden Rolling Pin",
      image: "/Images/bak2.jpg",
      category: "Baking",
      in_stock: false,
      review: 4.7,
      allReview: 3,
    },

    {
      title: "Heavy-Duty Whisk",
      image: "/Images/bak3.jpg",
      category: "Whisking",
      in_stock: true,
      review: 4.3,
      allReview: 3,
    },
  ];
  const [products, setProducts] = useState<Product[]>([...productsList]);

  const handleShiftLeft = () => {
    setProducts((prevProducts) => {
      if (prevProducts.length === 0) return prevProducts; // Handle empty array case

      const newProducts = [...prevProducts]; // Clone the array
      const lastItem = newProducts.pop(); // Remove the last item

      return lastItem ? [lastItem, ...newProducts] : newProducts; // Add it to the start
    });
  };

  const handleShiftRight = () => {
    setProducts((prevProducts) => {
      if (prevProducts.length === 0) return prevProducts; // Handle empty array case

      const newProducts = [...prevProducts]; // Clone the array
      const firstItem = newProducts.shift(); // Remove the first item

      return firstItem ? [...newProducts, firstItem] : newProducts; // Add it to the end
    });
  };

  return (
    <div className=" flex h-fit  items-center  w-full">
      <span
        onClick={handleShiftLeft}
        className="flex-1 scale-200 transform  flex items-center justify-center"
      >
        <FaChevronLeft />
      </span>
      <div className=" w-[95%] md:w-[90%]  mx-auto h-fit py-4  flex overflow-hidden gap-5 ">
        {productSuggestion?.map(
          (product: productSuggestionType, index: number) => (
            <span key={index} className="h-fit ">
              <ProductCard
                title={product?.productTitle}
                image={product?.images[0]}
                review={product?.avgRating}
                totalReview={product?.numberOfRatings}
                productId={product?._id}
                price={product?.price}
                rating={product?.avgRating}
                category={product?.category}
              ></ProductCard>
            </span>
          )
        )}
      </div>
      <span
        onClick={handleShiftRight}
        className="flex-1 scale-200 transform flex items-center justify-center"
      >
        <FaChevronRight></FaChevronRight>
      </span>
    </div>
  );
};

export default Recommendation;
