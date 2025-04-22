"use client";
import { CartState, useCartStore } from "@/app/stores/CartStore";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useShallow } from "zustand/shallow";

const MycartItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cartData, removeProductFromCart, updateProductInCart } = useCartStore(
    useShallow((state: CartState) => ({
      cartData: state.cartData,
      removeProductFromCart: state.removeProductFromCart,
      updateProductInCart: state.updateProductInCart,
    }))
  );
  console.log(cartData, "cartData here");
  // const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  function handleOnChange(pageNo: number) {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  }
  const [numberOfItems, setNumberOfItems] = useState<number>(1);
  const handleChangeItemNumber = (e: number) => {
    setNumberOfItems(e);
  };

  const handleUpdateItemnumber = (productId: string, type: string) => {
    if (type === "add") {
      setNumberOfItems((prev) => prev + 1);
      updateProductInCart(productId, numberOfItems + 1);
    } else {
      if (numberOfItems > 1) {
        setNumberOfItems((prev) => prev - 1);
        updateProductInCart(productId, numberOfItems - 1);
      }
    }
  };
  const handleRemoveItem = (productId: string) => {
    console.log(currentPage, "remove item");
    removeProductFromCart(productId);
    setTotalPages(1);
  };
  const flattenedData = cartData.flatMap((entry) =>
    entry.items.map((item) => ({
      userId: entry.userId,
      productId: item.productId,
      image: entry.image,
      quantity: item.quantity,
      price: entry.price,
      rating: entry.rating,
      title: entry.title,
    }))
  );

  console.log(flattenedData, "flattenedData");
  return (
    <div className="!cursor-pointer select-none">
      <p>{flattenedData.length} Items</p>
      <div className="grid w-full grid-cols-1 py-2 gap-4 ">
        {flattenedData?.map((product, index) => (
          <div
            key={index}
            className="  w-full flex h-fit border-b py-[2rem] px-[2px] lg:px-[2rem] border-gray-400"
          >
            <Image
              src={product?.image}
              alt=""
              height={400}
              width={400}
              className="w-min-[200px] w-[30%] h-[150px] "
            ></Image>
            <div className="px-[2rem] flex-1 flex flex-col gap-3">
              <div className="flex-1 gap-1">
                <h1 className="text-[20px] font-bold overflow-hidden ">{product?.title}</h1>
                <p className="text-[16px] flex gap-2 text-gray-500 items-center">
                  {[...Array(Math.floor(product.rating))].map((_, index) => (
                    <span
                      className={`${
                        product.rating <= 3
                          ? "text-red-500"
                          : product.rating < 4
                          ? "text-amber-400"
                          : "text-green-400"
                      }`}
                      key={index}
                    >
                      {" "}
                      <IoIosStar></IoIosStar>
                    </span>
                  ))}
                  {product.rating % 1 != 0 ? (
                    <span
                      className={`${
                        product.rating <= 3
                          ? "text-red-500"
                          : product.rating < 4
                          ? "text-amber-400"
                          : "text-green-400"
                      }`}
                    >
                      {" "}
                      <IoIosStarHalf></IoIosStarHalf>
                    </span>
                  ) : (
                    ""
                  )}
                  {product.rating}
                </p>
                <p className="text-[20px] ">{product?.price}</p>
              </div>
              <div className="w-[120px] relative">
                <span
                  onClick={() =>
                    handleUpdateItemnumber(product?.productId, "sub")
                  }
                  className="text-[16px] absolute top-1/2 left-2 transform -translate-y-1/2 font-semibold text-[#35736E] flex items-center justify-center "
                >
                  <FiMinus />
                </span>
                <input
                  type="number"
                  min={1}
                  value={product?.quantity}
                  onChange={(e) =>
                    handleChangeItemNumber(Number(e.target.value))
                  }
                  className="border border-[#35736E] outline-none text-[18px] font-semibold text-[#35736E] hover:shadow-md rounded-md flex w-full  justify-center items-center py-1 text-center "
                ></input>
                <span
                  onClick={() =>
                    handleUpdateItemnumber(product?.productId, "add")
                  }
                  className="text-[16px] absolute  font-semibold top-1/2 right-2 transform -translate-y-1/2 text-[#35736E] "
                >
                  <FiPlus />
                </span>
              </div>
            </div>
            <div>
              <span
                className="text-[20px] text-red-600  font-bold"
                onClick={() => handleRemoveItem(product?.productId)}
              >
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={1}
        currentPage={1}
        handleOnChange={handleOnChange}
        user="customer"
      ></Pagination>
    </div>
  );
};

export default MycartItem;
