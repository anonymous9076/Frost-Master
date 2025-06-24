"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
// import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import Link from "next/link";
import UserAuthContext from "@/app/context/userAuthContext";
import { useCartStore } from "@/app/stores/CartStore";
import { useRouter } from "next/navigation";

interface productprops {
  title: string;
  image: string;
  review: number;
  totalReview: number;
  productId: string;
  price: number;
  rating: number;
  category: string;
  handleEnquiryModel: (a: string, b: boolean) => void;
}
export interface productTypes {
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
  category,
  handleEnquiryModel,
}: productprops) => {
  const router = useRouter();
  const { user } = useContext(UserAuthContext)!;
  const addProductIntoCart = useCartStore((store) => store.addProductIntoCart);
  const cartData = useCartStore((state) => state.cartData);
  const isProductInCart = cartData.some(
    (product) => product.productId === productId
  );

  const [liked, setLiked] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [formattedTitle, setFormattedTitle] = React.useState("");
  console.log(added);
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
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }
  // console.log(process.env.NEXT_PUBLIC_CDNURL, image, "process.env.CDNURL");
  // const urlFriendly: string = category?.replace(/\s+/g, "");
  const stringFormattingFun = (sent: string) => {
    const a = sent.split(" ");
    const b = a.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1));
    const c = b.join(" ");
    console.log(c, "===>");
    setFormattedTitle(c);
  };

  useEffect(() => {
    stringFormattingFun(title);
  }, []);

  return (
    <div className=" relative p-4 rounded-lg shadow-md border w-full cursor-pointer h-fit  border-gray-300">
      <Link
        href={`/customer/products/product-details/${productId}/${category}`}
        className="flex-1 "
      >
        <Image
          className=" rounded-lg w-[100%] h-[150px] min-h-[50%] object-contain"
          src={
            `${process.env.NEXT_PUBLIC_CDNURL}${image}` ||
            "https://d2a7v7ze64lo1c.cloudfront.net/67e9947392685c757d78d526/1745856658135-IMG_20241201_164223.jpg"
          }
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
        {/* <FaHeart></FaHeart> */}
      </span>
      <div className=" h-[40%] flex flex-col  justify-evenly  ">
        <div>
          <h5
            className="text-lg tracking-tight whitespace-nowrap w-full overflow-clip "
            title={formattedTitle}
          >
            {/* {formattedTitle} */}
            {title}
          </h5>
          <span className="text-sm text-gray-600 ">
            {review} ({totalReview} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between mt-1 gap-2">
          {/* Conditionally show Add or Go to Cart */}
          <button
            className="flex-1 border border-[#35736E] text-[#35736E] hover:shadow-md rounded-md flex justify-center items-center gap-2 px-4 py-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!isProductInCart) {
                handleCartItem(); // use your store action here
              } else {
                router.push("/customer/mycart");
              }
            }}
          >
            <BsCart3 />
            {isProductInCart ? "Go to cart" : "Add to cart"}
          </button>

          <Link href="/customer/mycart" className="flex-1">
            <span className="olive rounded-md flex whitespace-nowrap items-center justify-center hover:shadow-md gap-2 px-4 py-2">
              <BsCart3 />
              Buy Now
            </span>
          </Link>
        </div>

        <span
          onClick={() => handleEnquiryModel(productId, true)}
          className="border border-[#35736E] mt-2 whitespace-nowrap w-full hover:shadow-md  justify-center text-[#35736E] rounded-md flex items-center gap-2 px-4 py-2"
        >
          <GrNotes></GrNotes> Make an Enquiry
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
