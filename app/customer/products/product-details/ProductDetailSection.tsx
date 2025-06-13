"use client";
import React, { useEffect, useState } from "react";
import { TiArrowLeft } from "react-icons/ti";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
// import { FiMinus } from "react-icons/fi";
// import { FiPlus } from "react-icons/fi";
const Accordion = dynamic(() => import("@/components/Accordion"));
const Recommendation = dynamic(() => import("@/components/Recommendation"));
const Section6 = dynamic(() => import("../../home/Components/Section6"));
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import EnquiryModel from '../components/EnquiryModel'
import {
  showProductDetails,
  showProductSpec,
  showProductSuggestion,
} from "@/app/api/Product";
interface productDetailsType {
  productTitle: string;
  price: number;
  subCategory: string;
  category: string;
  productDescription: string;
}

export interface productSuggestionType {
  avgRating: number;
  category: string;
  images: string[];
  material: string;
  numberOfRatings: number;
  price: number;
  productDescription: string;
  productTitle: string;
  subCategory: string;
  _id: string;
  __v: number;
}
interface EnquiryPropField{
  id:string,
  active:boolean
}

interface ProductSpecs {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  productId: string;
  decks: string;
  trays: string;
  materialBody: string;
  digitalDisplay: boolean;
  energyEfficiency: string;
  fuelConsumption: string;
  maximumTemperature: number;
  powerType: string;
  safety: string;
  suitableFor: string;
  temperatureControl: string;
  usage: string;
}
const ProductDetailSection = () => {
  const pathname = usePathname();

  const [productId, setProductId] = useState(
    pathname.split("/")[pathname.split("/").length - 2]
  );
  const [productCategory, setProductCategory] = useState(
    pathname.split("/")[pathname.split("/").length - 1]
  );
  const [productDetails, setProductDetails] = useState<productDetailsType>();
  const [productSuggestion, setProductSuggestion] = useState<
    productSuggestionType[]
  >([]);
  const [enquiryProp,setEnquiryProp]=useState<EnquiryPropField>({
    id:'0',
    active:false
  })
  const [productSpecification, setProductSpecification] = useState<
    ProductSpecs[]
  >([]);
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

  // const productSpecifications = [
  //   {
  //     title: "General Information",
  //     specifications: {
  //       "Product Name": "Gas Oven Three Deck Nine Tray",
  //       Price: "$225,790",
  //       Warranty: "1 Year",
  //       "Suitable For": "Bakery",
  //       Categories: ["Bakery Machinery", "Baking Ovens", "Deck Oven"],
  //     },
  //   },
  //   {
  //     title: "Technical Specifications",
  //     specifications: {
  //       Decks: "Three",
  //       Trays: "Nine",
  //       "Maximum Temperature": "400°C",
  //       "Material (Front)": "Stainless Steel",
  //       "Material (Body)": "Powder Coated",
  //     },
  //   },
  //   {
  //     title: "Power & Fuel",
  //     specifications: {
  //       "Power Type": "Gas",
  //       "Ignition Type": "Automatic Ignition",
  //       "Energy Efficiency": "High Efficiency",
  //       "Fuel Consumption": "Optimized for commercial use",
  //     },
  //   },
  //   {
  //     title: "Additional Features",
  //     specifications: {
  //       "Digital Display": "Yes",
  //       "Temperature Control": "Adjustable",
  //       "Safety Features": "Overheat Protection, Auto Shut-off",
  //       Usage: "Heavy-duty commercial bakery operations",
  //     },
  //   },
  // ];
  // const [numberOfItems, setNumberOfItems] = useState<number>(1);

  // const handleChangeItemNumber = () => {
  //   console.log("item number changed");
  // };
  // const handleUpdateItemnumber = (type: string) => {
  //   if (type === "add") {
  //     setNumberOfItems((prev) => prev + 1);
  //   } else {
  //     if (numberOfItems > 1) setNumberOfItems((prev) => prev - 1);
  //   }
  // };

  async function showProductData() {
    const res = await showProductDetails(productId);
    setProductDetails(res.data);
    console.log(res, "res here data");
  }

  async function showProductSpecDetails() {
    const data = await showProductSpec(productId);
    console.log(data.data, "spec data");
    setProductSpecification(Array(data.data));
  }

  async function showProductSuggestionData() {
    const data = await showProductSuggestion(productCategory, productId);
    setProductSuggestion(data.data);
    console.log(data, "suggestion data");
  }

  function formatLabel(key: string): string {
    return key
      .replace(/([A-Z])/g, " $1") // insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // capitalize the first letter
  }

  useEffect(() => {
    setProductId(pathname.split("/")[pathname.split("/").length - 2]);
    setProductCategory(pathname.split("/")[pathname.split("/").length - 1]);
    showProductData();
    showProductSpecDetails();
    showProductSuggestionData();
  }, []);

  console.log(productId, "productId");

  const handleEnquiryModel=(ids:string,active:boolean)=>{
    console.log('data===>',typeof ids,active)
    // to make imidate change use funtional state
    setEnquiryProp(()=>({
      id:ids,
      active:active
    }))
  }
  return (
    <>
      <div className="w-full px-[1rem] lg:px-[3rem] light">
      <EnquiryModel data={enquiryProp}></EnquiryModel>

        <div>
          <Link
            href="/customer/products"
            className="flex items-center py-[2rem] gap-1"
          >
            <TiArrowLeft />
            Back
          </Link>
          {/* <p>Products / {productDetails?.category} / ItemName</p> */}
        </div>
        <div className="flex flex-col md:flex-row  items-start py-[2rem] border-b border-gray-400">
          <div className="flex-1 ">
            <h1 className="text-[40px] font-semibold">
              {productDetails?.productTitle}
            </h1>
            <p className="py-1 text-[22px] font-medium">
              {productDetails?.price}
            </p>
            <span className="flex flex-col gap-2 ">
              <p>
                <span className="font-semibold">Warranty</span>: 1 Year
              </p>
              <p>
                <span className="font-semibold">Suitable For</span> :{" "}
                {productDetails?.subCategory}
              </p>
              <p>
                {productDetails?.category} | {productDetails?.subCategory}
              </p>
            </span>
            <p className="text-[14px] w-[80%] pt-3 ">
              {productDetails?.productDescription}
            </p>
            <span className="text-[14px] w-[80%] pt-2 ">
              <span className="font-semibold text-[16px]">Note:</span>
              {
                " This is a DO IT YOURSELF product. Assembly of the product needs to be done at customer's end."
              }
            </span>

            <div className="min-w-[350px] w-[60%] space-y-4 py-[1rem] mt-[1rem] ">
              <div className="flex items-center justify-between gap-2">
                {/* <div className="w-[40%] relative">
                  <span
                    onClick={() => handleUpdateItemnumber("sub")}
                    className="text-[25px] absolute top-1/2 left-5 transform -translate-y-1/2 font-semibold text-[#35736E] flex items-center justify-center "
                  >
                    <FiMinus />
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={numberOfItems}
                    onChange={handleChangeItemNumber}
                    className="border border-[#35736E] outline-none text-[25px] font-semibold text-[#35736E] hover:shadow-md rounded-md flex w-full  justify-center items-center py-1 text-center "
                  ></input>
                  <span
                    onClick={() => handleUpdateItemnumber("add")}
                    className="text-[25px] absolute  font-semibold top-1/2 right-5 transform -translate-y-1/2 text-[#35736E] "
                  >
                    <FiPlus />
                  </span>
                </div> */}
                <Link className="flex-1" href="/customer/billing">
                  <span className="olive  rounded-md flex items-center  justify-center hover:shadow-md gap-2 px-4 py-3">
                    <AiOutlineShoppingCart></AiOutlineShoppingCart> Add to cart
                  </span>
                </Link>
              </div>
              <span onClick={()=>handleEnquiryModel(productId,true)} className="border border-[#35736E] w-full hover:shadow-md  justify-center text-[#35736E] rounded-md flex items-center gap-2 px-4 py-3">
                <AiOutlineFileText></AiOutlineFileText> Make an Enquiry
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
            <div className="flex w-[90%] md:w-[70%] py-[1rem] items-center justify-center flex-cols-4 gap-2">
              {image?.map((item, index) => (
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
            {productSpecification?.map((item: ProductSpecs, index) => (
              <div key={index} className="md:w-[90%] w-[100%] ">
                <h2 className="text-[16px] font-bold  border olive border-gray-400 py-1 px-3">
                  General Information
                </h2>
                <ul className="list-disc">
                  {/* {Object.entries(item.specifications).map(
                    ([key, value], specIndex) => (
                      <li
                        key={specIndex}
                        className="text-[16px] border flex items-center py-1 px-3 border-gray-400"
                      >
                        <span className="font-semibold flex-1">{key}:</span>{" "}
                        <span className="flex-1">
                          { {Array.isArray(value) ? value.join(", ") : value} }
                        </span>
                      </li>
                    )
                  )} */}
                  {item &&
                    Object?.entries(item)?.map(
                      ([key, value], index: number) => (
                        <li
                          key={index}
                          className="text-[16px] border flex items-center py-1 px-3 border-gray-400"
                        >
                          <span className="font-semibold flex-1">
                            {formatLabel(key)}:
                          </span>
                          <span className="flex-1">
                            {value === false
                              ? "False"
                              : value === true
                              ? "True"
                              : value}
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
            <Recommendation
              productSuggestion={productSuggestion}
            ></Recommendation>
          </div>
        </div>
      </div>
      <Section6></Section6>
    </>
  );
};

export default ProductDetailSection;
