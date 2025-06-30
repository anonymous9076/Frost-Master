"use client";
import {
  removeItemFromCart,
  showCartData,
  updateItemQuantityInCart,
} from "@/app/api/MyCart";
import UserAuthContext from "@/app/context/userAuthContext";
import { CartState, useCartStore } from "@/app/stores/CartStore";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useShallow } from "zustand/shallow";

interface productTypes {
  productId: string;
  productTitle: string;
  price: number;
  quantity: number;
  images: [string];
  rating: number;
}

interface cartDataTypes {
  userId: string;
  _id: string;
  products: productTypes[];
}
interface PropsType {
  setTotalPrice: (price: number) => void;
}

const MycartItem = ({ setTotalPrice }: PropsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useContext(UserAuthContext)!;
  const [cartDataFromDataStore, setCartDataFromDataStore] = useState([]);
  const { cartData, removeProductFromCart, updateProductInCart } = useCartStore(
    useShallow((state: CartState) => ({
      cartData: state.cartData,
      removeProductFromCart: state.removeProductFromCart,
      updateProductInCart: state.updateProductInCart,
      addProductIntoCart: state.addProductIntoCart,
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

  const handleUpdateItemnumber = (
    productId: string,
    cartId: string,
    type: string
  ) => {
    if (cartId !== "none") {
      if (type === "add") {
        setNumberOfItems((prev) => prev + 1);
        updateProductInCart(productId, numberOfItems + 1);
        updateItemQuantityInCart(cartId, numberOfItems + 1);
      } else {
        if (numberOfItems > 1) {
          setNumberOfItems((prev) => prev - 1);
          updateProductInCart(productId, numberOfItems - 1);
          updateItemQuantityInCart(cartId, numberOfItems - 1);
        }
      }
    } else {
      if (type === "add") {
        setNumberOfItems((prev) => prev + 1);
        updateProductInCart(productId, numberOfItems + 1);
      } else {
        if (numberOfItems > 1) {
          setNumberOfItems((prev) => prev - 1);
          updateProductInCart(productId, numberOfItems - 1);
        }
      }
    }
  };
  const handleRemoveItem = async (productId: string, cartId: string) => {
    console.log(currentPage, "remove item");
    if (cartId !== "none") {
      await removeItemFromCart(cartId);
    } else {
      removeProductFromCart(productId);
    }
    showCartDatas();
  };

  interface FlattenedCartProduct {
    userId: string;
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string | null;
    rating: number;
  }

  // using userId
  async function showCartDatas() {
    if (user) {
      const res = await showCartData(currentPage);
      const flattenData = res.data.flatMap((cartData: cartDataTypes) =>
        cartData.products.map((product: productTypes) => ({
          userId: cartData.userId,
          productId: product.productId,
          title: product.productTitle,
          price: product.price,
          quantity: product.quantity,
          image: product.images[0] ?? null,
          rating: product.rating,
          cartId: cartData._id,
        }))
      );
      setCartDataFromDataStore(flattenData);
      // addProductIntoCart(...flattenData);
      setTotalPages(res.totalPages);

      // console.log(flattenedOrders, "Res cart here");
    } else {
      console.log(cartData, "cartData");
      const totalPrice = cartData.reduce(
        (acc: number, item: FlattenedCartProduct) =>
          acc + item.price * item.quantity,
        0
      );

      // // ✅ Calculate total price: sum of price * quantity
      // const total: number = flattenData.reduce(
      //   (acc: number, item: FlattenedCartProduct) =>
      //     acc + item.price * item.quantity,
      //   0
      // );
      // console.log(total, "total777777");
      setTotalPrice(totalPrice);
    }
  }
  const flattenedData = cartData.flatMap((entry) => ({
    userId: entry.userId,
    productId: entry.productId,
    image: entry.image,
    quantity: entry.quantity,
    price: entry.price,
    rating: entry.rating,
    title: entry.title,
    cartId: "none",
  }));

  useEffect(() => {
    showCartDatas();
  }, [currentPage]);
  console.log([...flattenedData, ...cartDataFromDataStore], "flattenedData");
  return (
    <div className="!cursor-pointer select-none">
      <p>{[...flattenedData, ...cartDataFromDataStore]?.length} Items</p>
      <div className="grid w-full grid-cols-1 py-2 gap-4 ">
        {[...flattenedData, ...cartDataFromDataStore]?.length > 0 ? (
          <>
            {" "}
            {[...flattenedData, ...cartDataFromDataStore]?.map(
              (product, index) => (
                <div
                  key={index}
                  className="  w-full flex h-fit  border-b py-[2rem]  border-gray-400"
                >
                  <Image
                    // src={product?.image}
                    src={`${
                      process.env.NEXT_PUBLIC_CDNURL
                    }${product?.image?.replace(/^\/+/, "")}`}
                    alt=""
                    height={400}
                    width={400}
                    className="min-w-[150px] w-[30%] h-[150px] "
                  ></Image>
                  <div className=" px-[2%] md:px-[2rem] flex-1 flex flex-col gap-3">
                    <div className="flex-1 gap-1">
                      <h1 className="text-[16px] md:text-[20px] font-bold overflow-hidden ">
                        {product?.title}{'this is foos i need more of this on write now '}
                      </h1>
                      <p className="text-[16px] flex gap-2 text-gray-500 items-center">
                        {[...Array(Math.floor(product?.rating))].map(
                          (_, index) => (
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
                          )
                        )}
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
                          "No Review Yet"
                        )}
                        {product.rating? product.rating:''}
                      </p>
                      <p className="text-[20px] ">₹ {product?.price}</p>
                    </div>
                    <div className="w-[120px] relative">
                      <span
                        onClick={() =>
                          handleUpdateItemnumber(
                            product?.productId,
                            product?.cartId,
                            "sub"
                          )
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
                          handleUpdateItemnumber(
                            product?.productId,
                            product?.cartId,
                            "add"
                          )
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
                      onClick={() =>
                        handleRemoveItem(product?.productId, product?.cartId)
                      }
                    >
                      <MdDelete />
                    </span>
                  </div>
                </div>
              )
            )}
          </>
        ) : (
          "No data is Available,Add Product into Cart"
        )}
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

export default MycartItem;
