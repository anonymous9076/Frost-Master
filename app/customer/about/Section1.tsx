import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full h-fit light'>
        <div className='w-[80%] py-[3rem] mx-auto h-fit flex flex-col md:flex-row '>
            <div className='flex-1 flex'>
            <span className='h-full  flex-1 py-[1rem] px-[1rem] '>
                <Image
                // src='https://s3-alpha-sig.figma.com/img/c242/d6a3/dfe7018301a81c59188d8d65cdd68470?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiewBPRHyMHw9Iyg3vQK4yvFoZcfrHiWCQd7JRAY78ORSpWl~mYYpJrNdJugNShaQ5CjFlFCD7stfw49CaWXSN5CT1~pzYggQZEFhBCNGRF4eBXUZB6ESeNrFwnQ0Bg9WTqKyJTAkWkrO6BBwn2r-CFfEbz0im1KbDUPPZoqsy7bN4mZ4QpN30dXfgcyQBKQi0bsWy6tPpQcdfw-jbgriRlNcT-jQqXT1ZVFVdwSp-PACzMP4-tuEtgsmE7OHBa5p0SdJZBosomfSiv402wrglVBvWQgsU-KUhi2BO2wSoWxRnB9jzlsP32UJVO3yY6UVBgV31NQm1c4EbycWnP5fQ__'
                src="/Images/frostservices/img3.jpg"
                alt=''
                height={400}
                width={400}
                data-aos='fade-up'
                className='h-[70%] w-full rounded-lg '
                ></Image>
            </span>
            <span className='h-full  flex  items-end flex-1 py-[1rem] px-[1rem] '>
                <Image
                // src='https://s3-alpha-sig.figma.com/img/0850/f2f4/37d8bd377cfcc609b3867befaaaf6c33?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C7qcfixLNFeWTVa~y62lVTghjk8mLgJanGdUufvlHW64050rR-YWarZmblrRPPlQJXlCNeORs1c7oYIGv2LEYKinf7pmUilVSm1e1rBq99tC9tmQz2SLDRslaJk-Wcu-sUvKkiskzJDH~wwxXdRjDYLyvG5dfcjMyn98aHvIGY0A1OxfU9Sx~PJJgqF7ocZ6rAQqQvwGtvmz3xZHlt9aU8RSXS9Jq3ck4bGbYXmd3aPMVeoX11K19yGd-jKVFw8q6xx8aEMArdM9ntY2hOUL~LTHh3HR2sJgkK4WmkoleD9f7Iwy38Xcb1myFPcnPewRcLKbY2K8E5BeQJ-6euV--A__'
                src="/Images/frostservices/img4.jpg"
                alt=''
                height={400}
                width={400}
                data-aos='fade-down'
                className='h-[70%] w-full rounded-lg '
                ></Image>
            </span>
            </div>
            <div className='flex-1 px-[4rem] flex flex-col gap-3 '>
                <h1 className='text-[40px] leading-[40px] font-semibold'>Frost Master: Innovation Meets Perfection.</h1>
                <p>Frost Master Private Limited, we are dedicated to delivering innovative and practical solutions for the food and beverage industry. With our roots dating back to 2021, we have grown to become a leader in the market, offering a wide range of display cabinets, commercial refrigerators, and commercial kitchen equipment.</p>
                <p>We take pride in crafting our products with elegance, practicality, and sustainability in mind, ensuring that our customers receive only the highest-quality equipment. Our skilled and experienced workforce closely monitors every aspect of the manufacturing process to guarantee excellence in each and every product.</p>
                <p> Frost Master, we are equipped to provide a full range of services for your kitchen and bakery needs. From consulting and project design to execution and support services, we are here to help you achieve your goals and bring your vision to life.</p>
                <p>Our goal is to offer a comprehensive and tailored solution for your commercial kitchen and bakery requirements, and we are committed to delivering an exceptional customer experience every step of the way. Choose Frost Master for your next project and experience the difference in quality and innovation. </p>
            </div>
        </div>

    </div>
  )
}

export default Section1