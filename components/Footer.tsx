import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='olive w-full h-fit min-h-[2rem] pt-[3rem] pb-[1rem] px-[2rem] cursor-pointer'>
      <div className='flex w-full gap-5 pb-[3rem] justify-evenly'>
        <div className='px-[2rem] w-full'>
          <h1 className='py-2 border-b-3 border-white text-[30px]'>Details</h1>
          <ul className='flex flex-col py-[1rem]'>
            <li className='py-2'>Plot no B-307/a Kh no 16/5 Ground floor Block-b Rajeev nagar Begampur New delhi 110086
            </li>
            <li className='flex items-center gap-3 mt-[2rem]'>
              <span><FaInstagram></FaInstagram></span>
              <span><FaFacebookF></FaFacebookF></span>
              <span><FaYoutube></FaYoutube></span>
              <span><FaLinkedinIn></FaLinkedinIn></span>
            </li>
          </ul>
        </div>
        <div className='px-[2rem] w-full'>
          <h1 className='py-2 border-b-3 border-white text-[30px]'>Quick links</h1>
          <ul className='flex flex-col py-[1rem]'>
            <li className='py-2'>About us </li>
            <li className='py-2'>Contact us </li>
            <li className='py-2'>Blog</li>
          </ul>
        </div>
        <div className='px-[2rem] w-full'>
          <h1 className='py-2 border-b-3 border-white text-[30px]'>Categories</h1>
          <ul className='flex flex-col py-[1rem]'>
            <li className='py-2'>Bakery Machinery</li>
            <li className='py-2'>Restaurant Equipment</li>
            <li className='py-2'>Commercial Refrigerator</li>
            <li className='py-2'>Cloud Kitchen Equipment</li>
          </ul>
        </div>
        <div className='px-[2rem] w-full'>
          <h1 className='py-2 border-b-3 border-white text-[30px]'>Services</h1>
          <ul className='flex flex-col py-[1rem]'>
            <li className='py-2'>Annual Maintenance Contract</li>
            <li className='py-2'>Kitchen Set Up Consultancy</li>
            <li className='py-2'>Commercial Kitchen Equipments</li>
          </ul>
        </div>
        
      </div>
      <div className='text-center py-[1rem]'>Copyright © 2025 Frost Master Private Limited - All Rights Reserved.</div>
    </div>
  )
}

export default Footer