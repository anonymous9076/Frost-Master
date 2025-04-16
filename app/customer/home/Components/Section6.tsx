"use client";
// import AutoSlider from "@/components/AutoSlider";
// import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import Image from "next/image";
import React,{useRef} from "react";
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
interface sectionprops {
  head: boolean;
}
const review = [
  {
    name: "Amit Sharma",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/87e9/9376/018b7cca44838e0924a7bcf6363b25ee?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UqEWDEBXlC~yh4Nb6QgG5St1qjE22MN5q3aTrYUs9BMlF3SbJAWhHT2xZeIlmTtVJXabcfopkikAx8rbOomTiaC6ZV1VyjKYk9uMV-LMaD3sTvHElOUBo7vw~XCWQv7bltCHUAq0sQrF2FBCbIPqeX9XTdYvcb6GGv74Wlf7cSWks1wsrCNk55ICDRn252jh911m3W-IlERUHre6r33cXFgQEWbsIjP7E-nwUH~df3~46fYdYAcAdyJtnIk3t78DySGwbFgyLNqezxWYnxrrcl6bzLQLUDF0NBaN6~oJnp5SI7FQo0Fcof70~RQ8JnzXbayfE5vX7fYVTtvXg4cRIA__",
    desc: "FrostMaster provides excellent kitchen equipment! The durability and performance exceeded my expectations. Highly recommended for any professional kitchen!",
    rating: 5,
    id: "1",
  },
  {
    name: "Rahul Mehta",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    desc: "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    rating: 5,
    id: "2",
  },
  {
    name: "Rahul Mehta",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    desc: "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    rating: 5,
    id: "3",
  },
  {
    name: "Rahul Mehta",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    desc: "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    rating: 5,
    id: "4",
  },
  {
    name: "Rahul Mehta",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    desc: "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    rating: 5,
    id: "5",
  },
  {
    name: "Rahul Mehta",
    position: "Restaurant Owner",
    image:"/Images/Boy/boy.png",
    // image:
    //   "https://s3-alpha-sig.figma.com/img/1fd7/58b3/ecff39bd78a901a6090493d79b5e913d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g28qRBs38olWSHdq9Ke8q8fl6FOEL7-cXpI2jksX6uj85ckzHhVGmA27Rjr-ZfflfI~vvVf~2xzm2xb~svYJZoxamwlqbBgZezpsMeS0loOrl5w6LIKKdo3iK9UlZaHrmha~-P5yer8J-ESm7prthWBUdUQQPnyG1renOGgu5wc8TQ2VbhSPiL2oo7CUiXnq3-WsIe69KXqdQiDG5C1Z9wMkwlb6XTWnl7p7JbrQ2VhhBvqkcRKulLvTfwfx6VciWqJq4UIUnMFlBZzYp8aJsD8Q6UTZjITgs4pj7AcZJSVNfYgBNem-c7GvCt7-f8MZjvy1N4B-IgSeWDxksYmhMw__",
    desc: "I’ve been using FrostMaster’s products for over a year now, and they never disappoint. Fast delivery and great customer support!",
    rating: 5,
    id: "6",
  },
];

 
const Section6 = ({ head }: sectionprops) => {

  const scrollRef = useRef(null);
  
  // 30rem is roughly 480 pixels (if 1rem = 16px)
  const scrollDistance = 480;

 setInterval(() => {
  if (scrollRef.current) {
    scrollRef.current?.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  }
 }, 3000);
 setTimeout(() => {
  if (scrollRef.current) {
    scrollRef.current?.scrollBy({ left: -(480*6), behavior: 'smooth' });
  }
 }, 18000);
  
  // const scrollLeft = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current?.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current?.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  //   }
  // };


  return (
    <div className="w-full h-fit light border-y py-[4rem]  border-gray-300">
      {head ? (
        <div className="w-[50%] text-center pb-[4rem] mx-auto ">
          <h1 data-aos="fade-up" className="text-[50px]">
            Experiences Shared by Our Clients
          </h1>
          <p
            data-aos="fade-up"
            className="text-[16px] leading-[20px] text-gray-500"
          >
            The team at FrostMaster provided unparalleled support throughout our
            purchase. Their expertise and dedication were evident from day one,
            helping us choose the perfect kitchen equipment and ensuring
            seamless installation
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="relative w-[90%] mx-auto">
        {/* Left Button */}
        {/* <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-[40px] w-[40px]  olive rounded-full z-10"
        >
          &#8249;
        </button> */}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-center h-fit w-[85%] mx-auto justify-start gap-7 text-center overflow-hidden scrollbar-hide"
        >
          {review.map((item) => (
            <div
              key={item.id}
              data-aos="fade-left"
              className="border  min-w-[35rem] min-h-[268px]  px-[2rem] border-gray-300 rounded-lg w-[40%] h-fit flex items-center justify-center flex-col"
            >
              <span className="flex items text-yellow-400 justify-center py-[2rem] gap-1">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </span>
              <p className="text-gray-500 overflow-clip h-[70px]">
                {item.desc}
              </p>
              <div className="py-[2rem] flex items-center gap-3 justify-center">
                <Image
                  src={item.image}
                  alt="person"
                  height={500}
                  width={500}
                  className="h-[3rem] w-[3rem] rounded-full"
                ></Image>
                <div className="text-left">
                  <p>{item.name}</p>
                  <p className="text-gray-500 ">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        {/* <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 items-center justify-center h-[40px] w-[40px] olive  rounded-full z-20"
        >
          &#8250;
        </button> */}
      </div>
    </div>
  );
};

export default Section6;
