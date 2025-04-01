import React from 'react'

const Section3 = () => {
  return (
    <div className='bg-[#EAEAEA] w-full flex py-[3rem] px-[4rem]'>
        <div className='w-[50%] text-gray-600 '>
            <h2 className='text-gray-900 text-[30px] font-semibold'>Why frostmaster.in?</h2>
            <p>Welcome to our unique platform for restaurant owners! We provide location analysis, premium kitchen tools, expert consultations, and comprehensive maintenance packages. Designed to address your challenges, ensure smooth operations, and drive success.</p>
            <br></br>
            <p>{"Whether finding the ideal site, upgrading your kitchen, or maintaining equipment, we've got you covered. Elevate your restaurant business with our innovative solutions and support. Join us for growth and excellence in every aspect of your operation."}</p>
             </div>
        <div className='relative w-[50%]'>
            <span className='absolute left-[20%] top-0 olive rounded-full py-[2rem] px-[1.4rem] text-[18px] text-center'>
            Serving Pan <br></br> India!
            </span>
            <span className='absolute olive top-[20%] left-[70%] rounded-full py-[2rem] px-[2rem] text-[18px] text-center'>Cumulative<br></br> 100+ Years <br></br> Experience</span>
            <span className='absolute olive top-[60%] left-[40%] rounded-full py-[3.3rem] px-[2rem] text-[18px] text-center'>4500+ Commercial <br></br> Kitchen  <br></br>Equipments </span>
            <span className='olive absolute top-[40%] left-[40%] rounded-full h-[60px] w-[60px]'> </span>
            <span className='olive absolute top-[65%] left-[35%] rounded-full h-[40px] w-[40px]'> </span>
            <span className='olive absolute top-[65%] right-[0%] rounded-full h-[40px] w-[40px]'> </span>
        </div>
    </div>
  )
}

export default Section3