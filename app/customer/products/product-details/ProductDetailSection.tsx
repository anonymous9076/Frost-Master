"use client";
import React from "react";
import { ArrowLeft } from "@deemlol/next-icons";
import Image from "next/image";
import { ShoppingCart } from "@deemlol/next-icons";
import { FileText } from "@deemlol/next-icons";
import { Minus } from "@deemlol/next-icons";
import { Plus } from "@deemlol/next-icons";
const Accordion = dynamic(() => import("@/components/Accordion"));
const Recommendation = dynamic(() => import("@/components/Recommendation"));
const Section6 = dynamic(() => import("../../home/Components/Section6"));

import Link from "next/link";
import dynamic from "next/dynamic";
const ProductDetailSection = () => {
  const image = [
    {
      image: "/Images/bak8.jpg",
    },
    {
      image: "/Images/bak8.jpg",
    },
    {
      image: "/Images/bak8.jpg",
    },
    {
      image: "/Images/bak8.jpg",
    },
  ];
  const quesAns = [
    {
      heading: "How do I place an order?",
      content:
        "You can place an order by visiting our website, browsing our kitchen equipment, and adding your chosen items to the cart. Proceed to checkout, enter your details, make the payment, and receive an order confirmation.",
    },
    {
      heading: " Can I request custom kitchen equipment?",
      content:
        "You can place an order by visiting our website, browsing our kitchen equipment, and adding your chosen items to the cart. Proceed to checkout, enter your details, make the payment, and receive an order confirmation.",
    },
    {
      heading: " What is the warranty period?",
      content:
        "You can place an order by visiting our website, browsing our kitchen equipment, and adding your chosen items to the cart. Proceed to checkout, enter your details, make the payment, and receive an order confirmation.",
    },
    {
      heading: "Do you offer installation services?",
      content:
        "You can place an order by visiting our website, browsing our kitchen equipment, and adding your chosen items to the cart. Proceed to checkout, enter your details, make the payment, and receive an order confirmation.",
    },
  ];

  const productSpecifications = [
    {
      title: "General Information",
      specifications: {
        "Product Name": "Gas Oven Three Deck Nine Tray",
        Price: "$225,790",
        Warranty: "1 Year",
        "Suitable For": "Bakery",
        Categories: ["Bakery Machinery", "Baking Ovens", "Deck Oven"],
      },
    },
    {
      title: "Technical Specifications",
      specifications: {
        Decks: "Three",
        Trays: "Nine",
        "Maximum Temperature": "400°C",
        "Material (Front)": "Stainless Steel",
        "Material (Body)": "Powder Coated",
      },
    },
    {
      title: "Power & Fuel",
      specifications: {
        "Power Type": "Gas",
        "Ignition Type": "Automatic Ignition",
        "Energy Efficiency": "High Efficiency",
        "Fuel Consumption": "Optimized for commercial use",
      },
    },
    {
      title: "Additional Features",
      specifications: {
        "Digital Display": "Yes",
        "Temperature Control": "Adjustable",
        "Safety Features": "Overheat Protection, Auto Shut-off",
        Usage: "Heavy-duty commercial bakery operations",
      },
    },
  ];

  const handleChangeItemNumber = () => {
    console.log("item number changed");
  };
  const handleUpdateItemnumber = (type: string) => {
    console.log("item number updated", type);
  };
  return (
    <>
      <div className="w-full px-[3rem] light">
        <div>
          <Link
            href="/customer/products"
            className="flex items-center py-[2rem] gap-1"
          >
            <ArrowLeft />
            Back
          </Link>
          <p>Products / Category / ItemName</p>
        </div>
        <div className="flex flex-col md:flex-row  items-start py-[2rem] border-b border-gray-400">
          <div className="flex-1 ">
            <h1 className="text-[40px] font-semibold">
              Gas Oven Three Deck Nine Tray
            </h1>
            <p className="py-1 text-[22px] font-medium">$ 225,790</p>
            <span className="flex flex-col gap-2 ">
              <p>
                <span className="font-semibold">Warranty</span>: 1 Year
              </p>
              <p>
                <span className="font-semibold">Suitable For</span> : Bakery
              </p>
              <p>Bakery Machinery | Baking Ovens | Deck Oven</p>
            </span>
            <p className="text-[14px] w-[80%] pt-3 ">
              Get a three-deck, nine tray gas oven with a maximum 400°C
              temperature and stainless steel front and powder coated body.
            </p>
            <span className="text-[14px] w-[80%] pt-2 ">
              <span className="font-semibold text-[16px]">Note:</span>
              {
                " This is a DO IT YOURSELF product. Assembly of the product needs to be done at customer's end."
              }
            </span>

            <div className="min-w-[350px] w-[60%] space-y-4 py-[1rem] mt-[1rem] ">
              <div className="flex items-center justify-between gap-2">
                <div className="w-[40%] relative">
                  <span
                    onClick={() => handleUpdateItemnumber("add")}
                    className="text-[25px] absolute top-1/2 left-5 transform -translate-y-1/2 font-semibold text-[#35736E] flex items-center justify-center "
                  >
                    <Minus />
                  </span>
                  <input
                    type="number"
                    value={1}
                    onChange={handleChangeItemNumber}
                    className="border border-[#35736E] outline-none text-[25px] font-semibold text-[#35736E] hover:shadow-md rounded-md flex w-full  justify-center items-center py-1 text-center "
                  ></input>
                  <span
                    onClick={() => handleUpdateItemnumber("add")}
                    className="text-[25px] absolute  font-semibold top-1/2 right-5 transform -translate-y-1/2 text-[#35736E] "
                  >
                    <Plus />
                  </span>
                </div>
                <span className="olive  rounded-md flex items-center flex-1 justify-center hover:shadow-md gap-2 px-4 py-3">
                  <ShoppingCart></ShoppingCart> Add to cart
                </span>
              </div>
              <span className="border border-[#35736E] w-full hover:shadow-md  justify-center text-[#35736E] rounded-md flex items-center gap-2 px-4 py-3">
                <FileText></FileText> Make an Enquiry
              </span>
            </div>
            <p>Free 3-5 day shipping • Tool-free assembly </p>
          </div>
          <div className="flex-1 flex flex-col items-center  justify-start ">
            <Image
              src="/Images/bak8.jpg"
              alt=""
              height={500}
              width={500}
              className="w-[60%] h-[50dvh]"
            ></Image>
            <div className="flex w-[70%] py-[1rem] items-center justify-center flex-cols-4 gap-2">
              {image.map((item, index) => (
                <span key={index}>
                  <Image
                    src={item.image}
                    alt=""
                    height={500}
                    width={500}
                    className=" border-2 border-gray-200 p-2 rounded-md w-[7rem]  h-[5rem]"
                  ></Image>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  py-[2rem]">
          <div>
            <h1 className="text-[25px] font-bold py-[1rem]">
              Product Specifications
            </h1>
            {productSpecifications.map((item, index) => (
              <div key={index} className="w-[80%]">
                <h2 className="text-[16px] font-bold  border olive border-gray-400 py-1 px-3">
                  {item.title}
                </h2>
                <ul className="list-disc">
                  {Object.entries(item.specifications).map(
                    ([key, value], specIndex) => (
                      <li
                        key={specIndex}
                        className="text-[16px] border flex items-center py-1 px-3 border-gray-400"
                      >
                        <span className="font-semibold flex-1">{key}:</span>{" "}
                        <span className="flex-1">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="py-[2rem]">
            <h1 className="text-[25px] font-bold">
              Frequently asked questions.
            </h1>
            {quesAns.map((item, index) => (
              <span key={index}>
                <Accordion
                  heading={item.heading}
                  content={item.content}
                ></Accordion>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-[25px] font-bold">Most Recommended Products:</h1>
          <div className="h-fit w-full py-[2rem]  ">
            <Recommendation></Recommendation>
          </div>
        </div>
      </div>
      <Section6 head={false}></Section6>
    </>
  );
};

export default ProductDetailSection;
