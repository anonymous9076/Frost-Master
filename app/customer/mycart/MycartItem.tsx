"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const MycartItem = () => {
  const [numberOfItems,setNumberOfItems] =useState<number>(1)
  const products = [
    {
      title: "Large Mixing Bowl",
      image: "/Images/bak1.jpg",
      category: "Mixing",
      in_stock: true,
      review: 4.5,
    },
    {
      title: "Wooden Rolling Pin",
      image: "/Images/bak2.jpg",
      category: "Baking",
      in_stock: false,
      review: 1.3,
    },
    {
      title: "Wooden Rolling Pin",
      image: "/Images/bak2.jpg",
      category: "Baking",
      in_stock: false,
      review: 3.3,
    },
  ];
  const handleChangeItemNumber = (e:number) => {
    setNumberOfItems(e)
  };

  const handleUpdateItemnumber = (type: string) => {
    if(type === 'add'){
      setNumberOfItems((prev) => prev + 1)
    }
    else{
      setNumberOfItems((prev) => prev - 1)
    }
  };
  const handleRemoveItem = () => {
    console.log("remove item");
  }

  return (
    <div className="!cursor-pointer select-none">
        <p>{products.length} Items</p>
      <div className="grid w-full grid-cols-1 py-2 gap-4 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="  w-full flex h-fit border-b py-[2rem] px-[2rem] border-gray-400"
          >
            <Image
              src={product.image}
              alt=""
              height={400}
              width={400}
              className="w-min-[200px] w-[22%] h-[150px] "
            ></Image>
            <div className="px-[2rem] flex-1 flex flex-col gap-3">
              <div className="flex-1 gap-1">
                <h1 className="text-[20px] font-bold  ">
                  Gas Oven Three Deck Nine Tray
                </h1>
                <p className="text-[16px] flex gap-2 text-gray-500 items-center">
                  {[...Array(Math.floor(product.review))].map((_, index) => (
                    <span className={`${product.review<=3?'text-red-500':(product.review<4?'text-amber-400':'text-green-400')}`} key={index}>
                      {" "}
                      <IoIosStar></IoIosStar>
                    </span>
                  ))}
                  {product.review % 1 != 0 ? (
                    <span className={`${product.review<=3?'text-red-500':(product.review<4?'text-amber-400':'text-green-400')}`}>
                      {" "}
                      <IoIosStarHalf></IoIosStarHalf>
                    </span>
                  ) : (
                    ""
                  )}
                  {product.review}
                </p>
                <p className="text-[20px] ">$234,344</p>
              </div>
              <div className="w-[120px] relative">
                <span
                  onClick={() => handleUpdateItemnumber("add")}
                  className="text-[16px] absolute top-1/2 left-2 transform -translate-y-1/2 font-semibold text-[#35736E] flex items-center justify-center "
                >
                  <FiMinus />
                </span>
                <input
                  type="number"
                  value={numberOfItems}
                  onChange={(e)=>handleChangeItemNumber(Number(e.target.value))}
                  className="border border-[#35736E] outline-none text-[18px] font-semibold text-[#35736E] hover:shadow-md rounded-md flex w-full  justify-center items-center py-1 text-center "
                ></input>
                <span
                  onClick={() => handleUpdateItemnumber("add")}
                  className="text-[16px] absolute  font-semibold top-1/2 right-2 transform -translate-y-1/2 text-[#35736E] "
                >
                  <FiPlus />
                </span>
              </div>
            </div>
            <div>
              <span className="text-[20px] text-red-600  font-bold" onClick={handleRemoveItem}>
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MycartItem;
