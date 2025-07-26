"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { getCategory } from "@/app/api/Product";
import { catNSubCatResponse } from "@/components/AddProductForm";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const [categories, setCategories] = useState<catNSubCatResponse>([]);
  

   async function getcategories() {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    useEffect(()=>{
      getcategories()
    },[])

    console.log(categories)

  return (
    <div className="olive w-full h-fit min-h-[2rem] pt-[3rem] pb-[1rem] px-[5%] cursor-pointer">
      <div className="grid w-full gap-5 pb-[3rem] justify-evenly lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="px-[2rem] w-full">
          <h1 className="py-2 border-b-3 border-white text-[30px]">Details</h1>
          <ul className="flex flex-col py-[1rem]">
            <li className="py-2">
              PLOT NO B-307/A KH NO 16/5 GROUND FLOOR BLOCK-B RAJEEV NAGAR NEW DELHI 110086
            </li>
            
            <li className="flex items-center flex-wrap gap-4 mt-[1rem]">
              <Link href='https://www.instagram.com/frostmaster_ltd/#' target="_blank" className="aspect-square h-[30px]">
                <FaInstagram className="h-full w-full"></FaInstagram>
              </Link>
              <Link href='https://www.facebook.com/frostmaster.ltd' target="_blank" className="aspect-square h-[27px]">
                <FaFacebookF className="h-full w-full"></FaFacebookF>
              </Link>
              <Link href='https://www.linkedin.com/company/frostmaster' target="_blank" className="aspect-square h-[30px]">
                <FaLinkedinIn className="h-full w-full"></FaLinkedinIn>
              </Link>
              <Link href='https://www.pinterest.com/frostmaster_ltd/' target="_blank" className="aspect-square h-[28px]">
                <FaPinterest className="h-full w-full"></FaPinterest>
              </Link>
              <Link href='https://x.com/frostmaster_ltd' target="_blank" className="aspect-square h-[26px]">
                <FaXTwitter className="h-full w-full"></FaXTwitter>
              </Link>
          
            </li>
          </ul>
        </div>
        <div className="px-[2rem] w-full">
          <h1 className="py-2 border-b-3 border-white text-[30px]">
            Quick links
          </h1>
          <ul className="flex flex-col py-[1rem]">
            <Link href="/customer/about">
              <li className="py-2">About us </li>
            </Link>
            <Link href="/customer/career">
              <li className="py-2">Career </li>
            </Link>
            <Link href="/customer/T&C">
              <li className="py-2">T&C </li>
            </Link>
            <Link href="/customer/blog">
              <li className="py-2">Blog</li>
            </Link>
          </ul>
        </div>
        <div className="px-[2rem] w-full">
          <h1 className="py-2 border-b-3 border-white text-[30px]">
            Categories
          </h1>
          <ul className="flex flex-col py-[1rem]">
            {/* <li className='py-2'>Bakery Machinery</li>
            <li className='py-2'>Restaurant Equipment</li>
            <li className='py-2'>Commercial Refrigerator</li>
            <li className='py-2'>Cloud Kitchen Equipment</li>
            <li className='py-2'>Cloud Kitchen Equipment</li> */}
            {categories
              ? categories.map((item, index) => (
                  <Link href={`products?category=${item.name}`} key={index}>
                    <li className="py-2">{item.name}</li>
                  </Link>
                ))
              : ""}
          </ul>
        </div>
        <div className="px-[2rem] w-full">
          <h1 className="py-2 border-b-3 border-white text-[30px]">Services</h1>
          <ul className="flex flex-col py-[1rem]">
            <Link href="/customer/services">
              <li className="py-2">Our Features</li>
            </Link>
            <Link href="/customer/services">
              <li className="py-2">After Sale Servies Or AMC</li>
            </Link>
            <Link href="/customer/services">
              <li className="py-2">Installation</li>
            </Link>
            <Link href="/customer/services">
              <li className="py-2">LPG Pipeline Design</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-center py-[1rem]">
        Copyright © 2025 Frost Master Private Limited - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
