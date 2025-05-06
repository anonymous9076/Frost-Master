"use client";
import { getHomePageReviews } from "@/app/api/Review";
import CardSlider from "@/components/AutoSlider";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import { FaStar } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Section6 = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [reviews, setReviews] = useState([
    {
      // name: "Rahul Mehta",
      // position: "Restaurant Owner",
      // image: "/Images/Boy/boy.png",
      // image:
      //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
      comment:
        "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
      ratings: 0,
      id: "",
    },
  ]);
  // Interval and Timeout Logic
  React.useEffect(() => {
    const scrollDistance = 480; // Adjust the scroll distance as needed

    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollDistance,
          behavior: "smooth",
        });
      }
    }, 1700);

    const timeoutId = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -(480 * 5), behavior: "smooth" });
      }
    }, 7500);

    // Cleanup interval and timeout on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  async function fetchReviewData() {
    const data = await getHomePageReviews();
    console.log(data, "data");
    setReviews(data.data);
  }
  useEffect(() => {
    fetchReviewData();
  }, []);
  console.log(reviews, "review9999==>");

  return (
    <div className="w-full px-[1rem] md:px-[2rem] h-fit light border-y py-[4rem]  border-gray-300">
      <div className="w-[50%] text-center pb-[4rem] mx-auto ">
        <h1
          data-aos="fade-up"
          className=" md:text-[40px] text-[30px] lg:text-[50px]"
        >
          Experiences Shared by Our Clients
        </h1>
        <p
          data-aos="fade-up"
          className="text-[16px] leading-[20px] text-gray-500"
        >
          The team at FrostMaster provided unparalleled support throughout our
          purchase. Their expertise and dedication were evident from day one,
          helping us choose the perfect kitchen equipment and ensuring seamless
          installation
        </p>
      </div>
   
      <CardSlider
        slides={reviews}
        slidesPerView={3}
        spaceBetween={10}
        navigation={false}
        pagination={false}
        autoplay={true}
        autoplayDelay={2000}
        className="custom-swiper"
        breakpoints={{
          0: {slidesPerView:1},
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1500: { slidesPerView: 4 },
        }}
      >
        {(item) => (
          <div
            key={item.id}
            data-aos="fade-left"
            className="border  w-full min-h-[268px]  px-[2rem] border-gray-300 rounded-lg min-w-[340px] h-fit flex items-center justify-center flex-col"
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
            <p className="text-gray-500 overflow-clip text-center flex items-center justify-center h-[70px]">
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
      </CardSlider>
    </div>
    // </div>
  );
};

export default Section6;
