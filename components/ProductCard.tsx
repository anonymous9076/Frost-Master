"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import Link from "next/link";
import UserAuthContext from "@/app/context/userAuthContext";
import { useCartStore } from "@/app/stores/CartStore";

interface productprops {
  title: string;
  image: string;
  review: number;
  totalReview: number;
  productId: string;
  price: number;
  rating: number;
}
interface productTypes {
  userId: string;
  productId: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
}
const ProductCard = ({
  title,
  image,
  review,
  totalReview,
  productId,
  price,
  rating,
}: productprops) => {
  const { user } = useContext(UserAuthContext)!;
  const addProductIntoCart = useCartStore((store) => store.addProductIntoCart);
  const [liked, setLiked] = React.useState(false);
  const handleLikeItem = () => {
    setLiked((curr) => !curr);
  };
  const data: productTypes = {
    userId: user?.id || "Guest",
    productId: productId,
    quantity: 1,
    title: title,
    price: price,
    rating: rating,
    image: image,
  };
  function handleCartItem() {
    addProductIntoCart(data);
  }
  return (
    <div className=" relative p-4 rounded-lg shadow-md border w-full cursor-pointer h-fit  border-gray-300">
      <Link
        href={`/customer/products/product-details/${productId}`}
        className="flex-1 "
      >
        <Image
          className=" rounded-lg w-[100%] h-[150px] min-h-[50%] object-contain"
          src={image}
          alt="product image"
          height={500}
          width={500}
        />
      </Link>
      <span
        className={`absolute top-5 right-5 ${
          liked ? "text-red-500" : "text-gray-400"
        } text-[22px]   z-20`}
        onClick={(e) => {
          e.stopPropagation();
          handleLikeItem();
        }}
      >
        <FaHeart></FaHeart>
      </span>
      <div className=" h-[40%] flex flex-col  justify-evenly  ">
        <div>
          <h5 className="text-lg tracking-tight ">{title}</h5>
          <span className="text-sm text-gray-600 ">
            {review} ({totalReview} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between mt-1 gap-2">
          <Link
            className="flex-1  border border-[#35736E] whitespace-nowrap   text-[#35736E] hover:shadow-md rounded-md flex  justify-center items-center gap-2 px-4 py-2"
            href="/customer/mycart"
            onClick={handleCartItem}
          >
            <BsCart3></BsCart3> Add to cart
          </Link>
          <Link href="/customer/products/product-details/2" className="flex-1 ">
            <span className="olive  rounded-md flex whitespace-nowrap items-center justify-center hover:shadow-md gap-2 px-4 py-2">
              <BsCart3></BsCart3> Buy Now
            </span>
          </Link>
        </div>
        <span className="border border-[#35736E] mt-2 whitespace-nowrap w-full hover:shadow-md  justify-center text-[#35736E] rounded-md flex items-center gap-2 px-4 py-2">
          <GrNotes></GrNotes> Make an Enquiry
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
