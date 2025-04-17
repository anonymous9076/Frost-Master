"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
interface Product {
  title: string;
  image: string;
  category: string;
  in_stock: boolean;
  review: number;
  allReview: number;
}
const Recommendation = () => {
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
    <div className=" flex h-fit felx items-center  w-full">
      <span
        onClick={handleShiftLeft}
        className="flex-1 scale-200 transform  flex items-center justify-center"
      >
        <FaChevronLeft />
      </span>
      <div className="w-[90%] mx-auto h-fit py-4  grid grid-cols-4 gap-5 ">
        {products.map((product, index) => (
          <span key={index} className="h-fit ">
            <ProductCard
              title={product.title}
              image={product.image}
              review={product.review}
              totalReview={product.allReview}
            ></ProductCard>
          </span>
        ))}
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
