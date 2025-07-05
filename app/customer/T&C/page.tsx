"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"));
const Footer = dynamic(() => import("@/components/Footer"));
// const cdnUrl = process.env.NEXT_PUBLIC_CDNURL;

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
      name: "Frost Master Bakery Equipment",
      category: "Bakery Equipment",
      image: "/tempcontrol.jpg",
      desc: "If you're looking for high-quality bakery equipment to help you run your bakery business smoothly and efficiently, look no further than Frost Master Bakery Equipment.",
    },
    {
      name: "FRIED ICE CREAM MACHINE",
      category: "Ice Cream Machine",
      image: "/machine.jpg",
      desc: "Ice cream is a beloved dessert around the world. People of all ages and backgrounds enjoy the creamy, cold treat, especially during the hot summer months.",
    },
    {
      name: "Our Frost Master Ice Cream Machine",
      category: "Ice Cream Machine",
      image: "/ice-machine2.jpg",
      desc: "If you're in the market for an ice cream machine, you'll likely come across the Frost Master Ice Cream Machine. This popular ice cream maker has been making waves in the market due to its efficient performance and ease of use.",
      
    },
    {
      name: "Our New Design of Frost Master Refrigerated Display Case",
      category: "Refrigerated Display Case",
      image: "/showcase.jpg",
      desc: "If you own a bakery, restaurant, or any other type of food establishment that requires the display of perishable food items, you know how important it is to have a reliable and effective refrigerated display case.",
    },
    {
      name: "Terms and Conditions",
      category: "Terms and Conditions",
      image: "/terms.jpg",
      desc: ". All goods & especially custom-made machines, once goods are sold cannot be returned or canceled after the manufacturing process has commenced.",
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

    const stringFormattingFun = (sent: string) => {
    const a = sent.split(" ");
    const b = a.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1));
    const c = b.join(" ");
    return (c)
  };
  return (
    <>
      <Navbar active="/customer/T&C"></Navbar>
      <div className="h-fit min-h-screen w-full px-[5%] light py-[2rem]">
        <div className="h-fit  w-full  mx-auto mb-[2rem] flex-col items-start  flex md:flex-row md:items-center justify-between text-[#35736E] text-[25px] md:text-[30px] font-bold">
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
        <div className=" w-full  gap-8 h-fit grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  place-items-center ">
          {filterData.map((item, index) => (
            <div
              key={index}
              className=" w-full  hover:shadow-lg   bg-white border border-gray-200 rounded-lg shadow-sm "
            >
              <div className="w-full aspect-16/10 object-center rounded-t-lg  overflow-hidden ">

              <Image
                className="rounded-t-lg w-full object-center h-full hover:scale-110 transition-all duration-500"
                src={item.image}
                height={400}
                width={400}
                alt=""
                />
                </div>
              <div className="p-5">
                <span className="flex gap-2 py-4 overflow-clip whitespace-nowrap text-[#35736E]">
                  <p>21 January 2025</p>
                  <p className="border-l-2 whitespace-nowrap border-[#35736E] px-3">
                    {item.category}
                  </p>
                </span>
                <h5 className="mb-2 lg:text-xl xl:text-2xl whitespace-nowrap overflow-clip  font-bold tracking-tight text-[#35736E]">
                  {stringFormattingFun(item.name)}
                </h5>
                <p className="mb-3  h-[7.6rem] overflow-hidden text-justify font-normal text-gray-700 dark:text-gray-400">
                  {item.desc}
                </p>
                <Link
                  href={`/customer/tnc/${item.name}`}
                  className="transition-all duration-400 hover:translate-x-1 hover:translate-y-0.5 inline-flex items-center px-3 py-2 text-sm font-medium text-center olive rounded-md"
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
