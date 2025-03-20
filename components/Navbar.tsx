import React from 'react'
import { FaKitchenSet } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
    <div className='h-[12dvh] w-full bg-white border-2 text-[#4C585B] flex items-center justify-between px-[5rem] border-gray-300'>
        <span className='text-[40px]'><FaKitchenSet></FaKitchenSet></span>
        <div className='text-[#4C585B] flex items-start gap-[45px] text-[20px]'>
            <a href='/customer' className='font-semibold'>Home</a>
            <a href='/about'>About Us</a>
            <a href=''>Our Products</a>
            <a href=''>Careers</a>
            <a href=''>Track shipment</a>
        </div>
    </div>
    </>
  )
}

export default Navbar