/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
interface ProductsProps {
  title: string;
  image: string;
}
interface ReviewProps {
  title: string;
  desc: string;
}

const page = () => {
  const data: ProductsProps[] = [
    {
      title: "Oven",
      image:
        "https://s3-alpha-sig.figma.com/img/2084/589e/76fe2afdfd9676204fe654b52045e80b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gQoQZaEz1e7NMSHcbI7IDr50kca5UQb3bmWadzS8SJYB2yqMur8bKw6Uxo8IioBwP3QjTBidxuANT9xYo4B99kyKz2~1P5Aeu37Wndjd6~j3K04rbXlikgoGDM5rxHvbGmsLymOuF0Zu78jH2rVV4qA5LMbnVR~cJWZbyX-RLJCEBIHY44W8YElvXVuWX4tla666SSezvDW~MKRSb~HkkoeDe7X3bKZyKcWp1qWGNLjHEcEb~DVxyKHtBTSc1SCcamv5w9vRH-YQkML9i2VCdmSUPAkWhWYhP7kMRiAv81lZyUI72GP~zLV6tNKnKbG4neStFE5pfDtsu9qaEpU7OA__",
    },
    {
      title: "Refrigerator",
      image:
        "https://s3-alpha-sig.figma.com/img/7794/6eeb/bcd01995accabe5ec18ce26bf83b2815?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pa-27c5ioAhbFdYQPe0pBpz1LoNrke~gFF2uN8bQv-pKn2k0jhdRGtnghDD1HR7ISx8i4HBqubk7tCOarmmiH9roYlPe2bqukRNycWeBIGhgldZYaXv7KOODCs7djFfzGMU87lzg77~jrKhCamKYfyQKs~CtMz7hqsAQ2459otq02TPDc2Iuc6ySYe-mPwWbrcfTEXeSpD23nWB30xrrhFIZDhG8dgZz~4WQrdtkSLE6JD9pSGW-O9ymah5zWuifiIVGqqw5k54Jz7nyDrWIBlWXkmfHipvAGqiwxbwjn55bNd4pu2lZ6x32LBZb6VZUpfu6oduaVZZWnO3G4tMAFg__",
    },
    {
      title: "Dough Mixer",
      image:
        "https://s3-alpha-sig.figma.com/img/a472/737a/b8dd88f7a043ed804dd2d0694e295e68?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q21LYu17chb7KUHmxG3DajzgNvhjJUmRp7fOY6RCMOXuF3hINrrRUk3bokAU6c5ZLLPJPor4EFOm1oP6zKamkVyHI4Q1tjJGRZcBk3ieSm5-JwCxHgNubsYWCR6VHHfO-jfak4gcmwi70xgNGv8bu8HMTObO-UnILyautTjroAEEY3GJ2Pk0ePLhcEYASGeqOSom9yXBcMedH3Na17RCD04perJG-V1Ed6TN9TEsgKCL8KsWcWEuwERcMsrQusu1LTlqgl5FFV9Hu1WciILOelwW~7soKxjUm2JI7EKT5x2n0BKlhL7AWxHsZqdAVVE-~YZNkwkL5KD-lDnSXaq7uw__",
    },
    {
      title: "Freezer",
      image:
        "https://s3-alpha-sig.figma.com/img/dc08/041b/07c142b350d189f53197be259f0b44ef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bMDe-5mTEDuMXGkk3OiEqQABvXi6dIhRXcuHAGJ9IrsTn28KbteHDGu0H3FXg93MmPK2Jb0nErvhHNSSg5mWGTKKDHLdZWWnzY~~Zhh-9rm~WRtOWADXbx1hTqs30KL8fDwkNLG51NiuEkbAZH3fAfJik9-jCKmfKqSfL6G1cIeX1byZGbHlkD4rl-xu-O631WWG1poWALO7WHPG7xOIX7dTT2nz9oQUGVwsV9U8kpw4qrT-AQsC~ZQ8XLIj73lR9RH08XnhbftefEr2d8-uShSN0zhw0B8iAsUCPeAPrfSnXLd7xs17aCBWBc7gD~9frhk6~1EbeQpKab4NVLhvdw__",
    },
  ];
  const review:ReviewProps[] =[
    {
      title: 'Our Quality',
      desc:"We believe in long term relations so we never end our relations or service after one sale "
    },
    {
      title: 'Our Commitment',
      desc:"We never believe in an incomplete end. Thus, we help you until your investment is capitalized into a valuable end."
    },
    {
      title: 'Our Excellence',
      desc:" We always try to deliver best so that you can maximize your output on each investment. it will surely add some."
    },
    {
      title:'Releationship for life',
      desc:"We will be focused on our customer's success. We will constantly be in touch with our stakeholders and give them a box solution. We will invest to build the caliber of leadership and value adding."
    },
    {
      title: 'Team Work',
      desc:" We will work as a TEAM. We will work with utmost Team Sprit to achieve greater organization as well as a personal goal. We will play the role of mentor for the upliftment of our future resources."
    },
    {
      title: 'Attractive Designs',
      desc:"Glass-encased with attractive designs and a superior finish, these pieces enhance any space with elegance. They are highly effective at preventing stains, scratches, and ensuring long-lasting durability. "
    },
  ]

  const [products, setProducts] = useState([...data]);

  function handleMoveElement(arr: any, fromIndex: number, toIndex: number) {
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    setProducts([...arr]);
  }

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="h-[90dvh] flex items-center w-full bg-white">
        <div className="flex-1 h-full  flex items-center justify-center flex-col">
          <p className="text-[#4C585B] leading-15 w-[75%] text-center text-[42px] font-bold">
            WELCOME TO <br></br>
            FORST MASTER PVT.LTD
          </p>
          <p className="text-[#4C585B] w-[70%] text-center text-[28px]">
            Manufacturer of commercial kitchen equipment, commercial
            refrigerators, chillers, display cabinets, food service equipment,
            stainless steel worktables, cooking ranges, exhaust hoods, and
            custom kitchen solutions for restaurants, hotels, and catering
            businesses.
          </p>
          <button className="bg-gray-300 rounded-md px-4 py-2 text-black mt-[4rem] tracking-wide">
            Shop Now
          </button>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <Image
            className="h-[80%] w-[65%] rounded-md"
            src={
              "https://s3-alpha-sig.figma.com/img/09bf/9265/db5c78d7a92d2b9106eb99db17234f22?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JeMmInaAJEqfsqWKDbyX6wIVVcE3QaaS8sBxD0JN36tTMB3js-Zy5321us813J76XhpryhVt8Rr-A6R~JUZnTpEy5L42O4taf~vUmakIg9kEEfcFP1yRQY9QB-N792u~H12X4nOet1pHvv0XMdzNYjrLxn4UImlyndXFwJIs3N4eY50IUnjJEP1MZtIk03JAKQDepgrfb6BZNl10JG-MRjPwNo9-SeHNRPYsKmSo9yC~dWfzFag4yCm6f9Q~zDwsy6YBGeVkf-mvP4AKIsmbT1NW2iMU8BLGCdjqhdR5gr-2MOO8sVrEIpZf4dhxLYtATAmTG626hLHif9uRSfGLsQ__"
            }
            alt="frost"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
      {/* section 2 */}
      <div className="h-[70dvh] flex items-center w-full bg-white">
        <div className="flex-1 h-full flex items-center justify-end">
          <Image
            className="h-[80%] w-[90%]"
            src="https://s3-alpha-sig.figma.com/img/d4e4/d339/7cdb53da4a81ef7cdae1e05253f63f8c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sI1IhwMI~CkbdsXk7VDYmbyBJIa8AqWUo01NqVy~aCF1JtN0nQU55YvN5MKs9m7P1XIxfr-lizu6MBAO9kcQxnvc49WZiFRj0ig6fA3RmheT0jAXxAJPuAMjtSGj05JsrAVAP~Ga~QNs9ErLoK1TJ5hnhXnhCR86tuBklv~JKKBkxzGE5764bz7CeGk3JeLYn3Zets0yUPgo~qlmbDm24Rf3Z0lmy12n~as4R3PuURLDt78ml4Uszx8volVjU4Xgvur2oSI4TrsZ6xZEyz6IgWsQZxUxxyNAnUu-nG60xSubrlzJNqIGCZXY7UFOTfuPtt7yJzRsBSjKR-9ATPKdqQ__"
            alt="frost"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="flex-1 h-full pl-[4rem] flex items-start justify-center flex-col">
          <p className="text-[#4C585B] leading-12 w-[75%]  text-[36px] font-bold">
            Innovative Manufacturing with<br></br> FROST MASTER
          </p>
          <p className="text-[#4C585B] w-[70%]  text-[22px]">
            FROST MASTER | Manufacturer of Commercial Refrigerators, we are
            dedicated to providing innovative manufacturing solutions for our
            clients. Our state-of-the-art technology and experienced team ensure
            that we deliver exceptional products every time. Contact us today to
            learn more about our services and how we can help yo
          </p>
          <button className="bg-gray-300 rounded-md px-4 py-2 text-black mt-6 tracking-wide">
            Find out More
          </button>
        </div>
      </div>
      {/* section3 */}
      <h2 className="w-full text-center text-[40px] font-bold text-[#4C585B] bg-white py-[1rem]">
        Our Products
      </h2>
      <div className="bg-[#F4EDD3] h-[40dvh] flex items-center transition-all  duration-500   justify-between text-black px-[2rem]  w-full">
        <span
          className="text-[30px] text-gray-600"
          onClick={() => handleMoveElement(products, 0, products.length)}
        >
          <FaChevronLeft></FaChevronLeft>
        </span>
        <div className="h-full flex-1  flex justify-evenly items-center">
          {products &&
            products.slice(0, 4).map((item, index) => (
              <span
                key={index}
                className="text-center min-w-[250px] w-[15%] font-bold text-[30px] gap-2 text-gray-700  flex flex-col items-center justify-center h-full "
              >
                <Image
                  className="rounded-md w-full h-[62%] "
                  src={item.image}
                  alt="Product"
                  width={500}
                  height={500}
                ></Image>
                {item.title}
              </span>
            ))}
        </div>
        <span
          className="text-[30px] text-gray-600"
          onClick={() => handleMoveElement(products, products.length - 1, 0)}
        >
          <FaChevronRight></FaChevronRight>
        </span>
      </div>
      {/* section 4 */}
      <div className="h-fit w-full bg-white pb-[3rem]">
        <h1 className=" w-full text-center font-bold text-[40px] text-[#4C585B] py-[3rem]">
          What Makes us prominent players
        </h1>
        <div className="h-fit px-[3rem] w-full grid-cols-3 gap-y-14 grid">
          {review && review.splice(0,6).map((item,index)=>
          <div key={index} className="h-full rounded-lg  p-[2rem] mx-[2rem] bg-[#D0DDD0]">
            <h1 className=" w-full text-center font-semibold text-[30px] text-[#4C585B]">
              {item.title}
            </h1>
            <p className=" w-full  text-justify text-[20px] text-[#4C585B] ">
             {item.desc}
            </p>
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
