"use client";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

interface productprops {
title:string;
image:string;
review:number
}

const ProductCard = ({title,image,review}:productprops) => {
  const [liked, setLiked] = React.useState(false);
  const handleLikeItem = () => {
    setLiked((curr) => !curr);
  };
  return (
    <div className=" relative p-4 rounded-lg shadow-md border w-full cursor-pointer h-[400px] border-gray-300">
      <Image
        className=" rounded-lg w-[100%] h-[60%] object-contain"
        src={image}
        alt="product image"
        height={500}
        width={500}
      />
      <span
        className={`absolute top-5 right-5 ${
          liked ? "text-red-500" : "text-gray-400"
        } text-[22px]   z-20`}
        onClick={handleLikeItem}
      >
        <FaHeart></FaHeart>
      </span>
      <div className=" h-[40%] flex flex-col  justify-evenly  ">
        <div>

        <h5 className="text-lg tracking-tight ">{title}</h5>
        <span className="text-sm text-gray-600 ">{review}k (5k reviews)</span>
        </div>
        <div className="flex items-center justify-between mt-1 gap-2">
          <span className="border border-[#35736E] whitespace-nowrap   text-[#35736E] hover:shadow-md rounded-md flex flex-1 justify-center items-center gap-2 px-4 py-2">
            <BsCart3></BsCart3> Add to cart
          </span>
          <span className="olive  rounded-md flex whitespace-nowrap items-center hover:shadow-md gap-2 px-4 py-2">
            <BsCart3></BsCart3> Buy Now
          </span>
        </div>
        <span className="border border-[#35736E] mt-2 whitespace-nowrap w-full hover:shadow-md  justify-center text-[#35736E] rounded-md flex items-center gap-2 px-4 py-2">
          <GrNotes></GrNotes> Make an Enquiry
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
