'use client'
import React from "react";
import { IoSearch } from "react-icons/io5";
import ProductCard from "../../../../components/ProductCard";
import Pagination from "@/components/Pagination";
const ProductContainer = () => {

     const products=[
        {
          "title": "Large Mixing Bowl",
          "image": "/Images/bak1.jpg",
          "category": "Mixing",
          "in_stock": true,
          "review": 4.5
        },
        {
          "title": "Wooden Rolling Pin",
          "image": "/Images/bak2.jpg",
          "category": "Baking",
          "in_stock": false,
          "review": 4.7
        },
        {
          "title": "Heavy-Duty Whisk",
          "image": "/Images/bak3.jpg",
          "category": "Whisking",
          "in_stock": true,
          "review": 4.3
        },
        {
          "title": "Metal Spatula",
          "image": "/Images/bak4.jpg",
          "category": "Flipping",
          "in_stock": true,
          "review": 4.6
        },
        {
          "title": "Large Strainer",
          "image": "/Images/bak5.png",
          "category": "Straining",
          "in_stock": false,
          "review": 4.4
        },
        {
          "title": "Big Soup Ladle",
          "image": "/Images/bak6.jpg",
          "category": "Serving",
          "in_stock": true,
          "review": 4.8
        },
        {
          "title": "Oversized Cutting Board",
          "image": "/Images/bak7.png",
          "category": "Cutting",
          "in_stock": false,
          "review": 4.2
        },
        {
          "title": "Large Chef’s Knife",
          "image": "/Images/bak8.jpg",
          "category": "Chopping",
          "in_stock": true,
          "review": 4.9
        },
        {
          "title": "Big Pasta Strainer",
          "image": "/Images/bak9.jpg",
          "category": "Draining",
          "in_stock": false,
          "review": 4.5
        }
      ]
      
    const handlePrevPages = () => {
        console.log("prev");
      };
      const handleNextPages = () => {
        console.log("next");
      };
  return (
    <div className="h-fit w-full  px-[2rem]">
      <h1 className="text-[35px] font-bold">Our Collection Of Products</h1>

      <span className="h-fit w-full relative">
        <input
          type="search"
          className="py-2 rounded-full my-5 border border-gray-300 px-4 w-full"
          placeholder="Search an Item"
        ></input>
        <span className="h-[35px] w-[35px] absolute flex items-center justify-center top-[-50%] right-1 rounded-full olive">
          <IoSearch></IoSearch>
        </span>
      </span>

      <div className="grid w-full grid-cols-3 py-[1rem] gap-5">
        {products.map((product, index) => 
        <span key={index} className="h-[55dvh]" >
        <ProductCard title={product.title} image= {product.image} review={product.review} ></ProductCard>
        </span>
        )}
      </div>
      <Pagination
        totalPages={45}
        currentPage={1}
        handleNextPages={handleNextPages}
        handlePrevPages={handlePrevPages}
        user='user'
      ></Pagination>
    </div>
  );
};

export default ProductContainer;
