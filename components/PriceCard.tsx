import React from 'react'

const PriceCard = () => {
  return (
    <div className=' h-fit w-full border py-[2rem] px-[2rem] border-gray-500 rounded-lg'>
            <h1 className="text-[25px] font-bold pb-[1rem] ">Order Summary</h1>
            <ul className='text-[16px] space-y-[1rem]'>
                <li className=" flex items-center justify-between ">
                    <span>Price</span>
                    <span>$3059</span>
                </li>
                <li className=" flex items-center justify-between">
                    <span>Discount</span>
                    <span>$3059</span>
                </li>
                <li className="flex items-center justify-between ">
                    <span>Shipping</span>
                    <span>$3059</span>
                </li>
            </ul>
            <div className='border border-gray-500 my-[2rem]'></div>
            <ul className='text-[16px] space-y-[1rem]'>
                <li className=" flex items-center justify-between ">
                    <span>Net Amnount </span>
                    <span>$3059</span>
                </li>
                <li className=" flex items-center justify-between">
                    <span>Est. Delivery Time</span>
                    <span>1 Feb 2025</span>
                </li>
                
            </ul>
            <button className='olive w-full text-center rounded-lg py-2 mt-7 '>Proceed to Checkout</button>
    </div>
  )
}

export default PriceCard