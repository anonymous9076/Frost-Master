import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
 <div className="w-full bg-white">
  <div className="max-w-screen-xl mx-auto py-12 px-4 md:px-8 flex flex-col lg:flex-row gap-8 items-center">
    
    {/* Images Section */}
    <div className="flex flex-col lg:flex-row flex-1 gap-4">
      {/* First Image */}
      <div className="w-full xl:w-1/2  ">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img3.jpg`}
          alt="Service 1"
          height={400}
          width={400}
          data-aos="fade-up"
          className="w-full h-[50dvh] max-h-[400px] object-cover rounded-lg"
        />
      </div>
      
      {/* Second Image (hidden on smaller screens) */}
      <div className="w-full lg:w-1/2 hidden xl:flex items-end">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img4.jpg`}
          alt="Service 2"
          height={400}
          width={400}
          data-aos="fade-down"
          className="w-full h-[50dvh] object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="flex-1 px-2 md:px-6 max-h-[70vh] text-black overflow-y-auto space-y-4">
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
        Frost Master: Innovation Meets Perfection.
      </h1>
      <p className='text-justify'>
        At Frost Master Private Limited, we are dedicated to delivering innovative and practical solutions for the food and beverage industry. With our roots dating back to 2021, we have grown to become a leader in the market, offering a wide range of display cabinets, commercial refrigerators, and commercial kitchen equipment.
      </p>
      <p className='text-justify'>
        We take pride in crafting our products with elegance, practicality, and sustainability in mind, ensuring that our customers receive only the highest-quality equipment. Our skilled and experienced workforce closely monitors every aspect of the manufacturing process to guarantee excellence in each and every product.
      </p>
      <p className='text-justify'>
        Frost Master is equipped to provide a full range of services for your kitchen and bakery needs. From consulting and project design to execution and support services, we are here to help you achieve your goals and bring your vision to life.
      </p>
      <p className='text-justify'>
        Our goal is to offer a comprehensive and tailored solution for your commercial kitchen and bakery requirements, and we are committed to delivering an exceptional customer experience every step of the way. Choose Frost Master for your next project and experience the difference in quality and innovation.
      </p>
    </div>
  </div>
</div>

  )
}

export default Section1