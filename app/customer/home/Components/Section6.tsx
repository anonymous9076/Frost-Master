"use client";
import { getHomePageReviews } from "@/app/api/Review";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import CardSwiper from "@/components/Swiper";
// interface ReviewType {
//   name: string;
//   position: string;
//   image: string;
//   comment: string;
//   rating: number;
//   _id: string;
// }
type ReviewItem = {
  comment: string;
  ratings: number;
  id: string;
  image: string;
  userId?: {
    userName: string;
    roleType: string;
  };
};

const Section6 = () => {
  // const scrollRef = useRef<HTMLDivElement | null>(null);
  const [reviews, setReviews] = useState<ReviewItem[]>([
    // {
    //   name: "",
    //   // position: "Restaurant Owner",
    //   // image: "/Images/Boy/boy.png",
    //   image:
    //     "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    //   comment:
    //     "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    //   ratings: 0,
    //   id: "",
    // },
  ]);
  // Interval and Timeout Logic
  // React.useEffect(() => {
  //   const scrollDistance = 480; // Adjust the scroll distance as needed

  //   const intervalId = setInterval(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollBy({
  //         left: scrollDistance,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 1700);

  //   const timeoutId = setTimeout(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollBy({ left: -(480 * 5), behavior: "smooth" });
  //     }
  //   }, 7500);

  //   // Cleanup interval and timeout on component unmount
  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  async function fetchReviewData() {
    const data = await getHomePageReviews();
    console.log(data, "review data");
    setReviews(data.data);
  }
  useEffect(() => {
    fetchReviewData();
  }, []);

  return (
    <div className="w-full px-[5%] h-fit light border-y py-[4rem]  border-gray-300">
      <div className="w-[100%] text-center pb-[4rem] mx-auto ">
        <h1 data-aos="fade-up" className=" responsive-heading">
          Experiences Shared by Our Clients
        </h1>
        <p data-aos="fade-up" className="responsive-subtext text-gray-500">
          The team at FrostMaster provided unparalleled support throughout our
          purchase. Their expertise and dedication were evident from day one,
          helping us choose the perfect kitchen equipment and ensuring seamless
          installation
        </p>
      </div>
      {/* view below tab */}
      {/* <div className="sm:hidden flex flex-wrap overflow-x-hidden justify-center gap-3 items-center w-full h-fit px-[2rem]">
        <CardSwiper
          slides={reviews}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {(item) => (
            <div
           
              className="border  md:min-w-[35rem] min-w-[350px] min-h-[268px]  px-[2rem] border-gray-300 rounded-lg w-[40%] h-fit flex items-center justify-center flex-col"
            >
              <p className="text-[16px] flex gap-2 text-gray-500 items-center">
                {[...Array(Math.floor(item?.ratings))].map((_, index) => (
                  <span
                    className={`${
                      item.ratings <= 3
                        ? "text-red-500"
                        : item.ratings < 4
                        ? "text-amber-400"
                        : "text-green-400"
                    }`}
                    key={index}
                  >
                    {" "}
                    <IoIosStar></IoIosStar>
                  </span>
                ))}
                {item.ratings % 1 != 0 ? (
                  <span
                    className={`${
                      item.ratings <= 3
                        ? "text-red-500"
                        : item.ratings < 4
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
              </p>
              <p className="text-gray-500 text-center overflow-clip flex items-center justify-center h-[70px]">
                {item.comment}
              </p>
              <div className="py-[2rem] flex items-center gap-3 justify-center">
                <Image
                  src="/Images/Boy/boy.png"
                  alt="person"
                  height={500}
                  width={500}
                  className="h-[3rem] w-[3rem] rounded-full"
                ></Image>
                <div className="text-left">
                  <p>Test12</p>
                  <p className="text-gray-500 ">Testing</p>
                </div>
              </div>
            </div>
          )}
        </CardSwiper>
      </div> */}

      {/* view above mobile */}
      <div className=" items-center h-fit w-[100%]   mx-auto justify-start text-center overflow-hidden scrollbar-hide">
        <CardSwiper
          slides={reviews}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {(item) => (
            <div className="border min-h-[268px] w-full border-gray-300 rounded-lg h-fit flex items-center justify-center flex-col">
              <p className="text-[16px] flex gap-2 text-gray-500 items-center">
                {[...Array(Math.floor(item?.ratings))].map((_, index) => (
                  <span
                    className={`${
                      item.ratings <= 3
                        ? "text-red-500"
                        : item.ratings < 4
                        ? "text-amber-400"
                        : "text-green-400"
                    }`}
                    key={index}
                  >
                    {" "}
                    <IoIosStar></IoIosStar>
                  </span>
                ))}
                {item.ratings % 1 != 0 ? (
                  <span
                    className={`${
                      item.ratings <= 3
                        ? "text-red-500"
                        : item.ratings < 4
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
              </p>
              <p className="text-gray-500 overflow-clip text-center px-[5%] flex items-start pt-[10px]  justify-center h-[7ch]">
                {item.comment}
              </p>
              <div className="py-[2rem] flex items-center gap-3 justify-center">
                <Image
                  src={
                    item?.image ||
                    "data:image/jpeg;base64,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"
                  }
                  alt="person"
                  height={700}
                  width={700}
                  className="h-[rem] w-[5rem] rounded-full"
                ></Image>
                <div className="text-left">
                  {/* <p>Test12</p> */}
                  <p>{item?.userId?.userName || "Anonymous"}</p>

                  {/* <p className="text-gray-500 ">Testing</p> */}
                </div>
              </div>
            </div>
          )}
        </CardSwiper>
      </div>
    </div>
    // </div>
  );
};

export default Section6;
