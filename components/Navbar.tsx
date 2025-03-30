import React from 'react'
import { FaKitchenSet } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
    <div className='h-[10dvh] w-full absolute top-0 left-0 bg-transparent text-white flex items-center justify-between px-[5rem] '>
        <span className='text-[40px]'><FaKitchenSet></FaKitchenSet></span>
        <div className='text-[#ffffff] flex items-start gap-[45px] text-[16px]'>
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