"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TermData {
  name: string;
  category: string;
  image: string;
  desc: string;
}

const TermAndConditions = () => {
  const categories = [
    { name: "Bakery Equipment" },
    { name: "Ice Cream Machine" },
    { name: "Refrigerated Display Case" },
    { name: "Terms and Conditions" },
  ];
  const termsData = [
    {
      name: "",
      category: "Bakery Equipment",
      image: "",
      desc: "",
    },
    {
      name: "",
      category: "Ice Cream Machine",
      image: "",
      desc: "",
    },
    {
      name: "",
      category: "Ice Cream Machine",
      image: "",
      desc: "",
    },
    {
      name: "",
      category: "Refrigerated Display Case",
      image: "",
      desc: "",
    },
    {
      name: "",
      category: "Terms and Conditions",
      image: "",
      desc: "",
    },
  ];
  const [filterData, setFilterData] = useState<TermData[]>(termsData);

  const handleFilterPost = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const filter = termsData.filter(
      (item) => value.toLowerCase() == item.category.toLowerCase()
    );
    setFilterData(filter);
  };
  return (
    <>
      <Navbar active="/customer/T&C"></Navbar>
      <div className="h-fit min-h-screen w-full light py-[2rem]">
        <div className="h-[4rem]  w-[90%] lg:w-[70%] mx-auto mb-[2rem] flex-col items-start  flex md:flex-row md:items-center justify-between text-[#35736E] text-[25px] md:text-[30px] font-bold">
          FROST MASTER UPDATES :
          <select
            className="text-[18px] font-normal border rounded-md px-3 py-2"
            onChange={handleFilterPost}
          >
            <option value="all">All Posts</option>
            {categories.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" w-[90%] lg:w-[70%]  gap-8 h-fit grid md:grid-cols-2 grid-col-1  place-items-center items-center justify-evenly mx-auto">
          {filterData.map((item, index) => (
            <div
              key={index}
              className="w-full min-w-[350px]  bg-white border border-gray-200 rounded-lg shadow-sm "
            >
              <Image
                className="rounded-t-lg w-full"
                src="/Images/team1.jpg"
                height={400}
                width={400}
                alt=""
              />
              <div className="p-5">
                <span className="flex gap-2 py-4 text-[#35736E]">
                  <p>21 January 2025</p>
                  <p className="border-l-2 border-[#35736E] px-3">
                    {item.category}
                  </p>
                </span>
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#35736E]">
                  {item.category}
                </h5>
                <p className="mb-3  h-[7.6rem] overflow-hidden font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Here are the
                  biggest enterprise technology acquisitions of 2021 so far, in
                  reverse chronological order. Here are the biggest enterprise
                  technology acquisitions of 2021 so far, in reverse
                  chronological order. Here are the biggest enterprise
                  technology acquisitions of 2021 so far, in reverse
                  chronological order.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center olive rounded-md"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TermAndConditions;
