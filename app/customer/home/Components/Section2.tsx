import Image from "next/image";
import React from "react";
const img = [
  {
    text: 'Kitchen Equipment',
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PremiumKitchenEquipments/img4.jpg`,
  },
  {
    text: 'Specialty Appliances',
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PremiumKitchenEquipments/img14.jpg`,
  },
  {
    text: 'Food Preparation Tools',
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PremiumKitchenEquipments/img24.jpg`,
  },
  {
    text: 'Refrigeration Solutions',
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PremiumKitchenEquipments/img34.jpg`,
  },
];

const Section2 = () => {

  return (
    <div  className="w-full light pb-[3rem]">
      <h3 data-aos="fade-up" className="w-full text-center px-[5%] text-[40px] py-[3rem]">
        Explore Our Kitchen Solutions
      </h3>
      <div data-aos="fade-up" className=" xl:w-[90%]  w-[97%] mx-auto lg:mx-0 h-fit lg:rounded-r-2xl flex xl:flex-row flex-col border-y lg:border-r border-[#35736E] ">
        <div className="text-left xl:w-[40%] w-[100%]  px-[5%] flex flex-col items-start justify-center py-[2rem] ">
          <h3 data-aos="fade-up" data-aos-delay="400" className="py-[1rem] responsive-heading ">
            Premium Kitchen Equipment
          </h3>
          <p data-aos="fade-up" data-aos-delay="500" className="text-[18px]">
            {"At Forst Master Pvt. Ltd., we bring innovation and efficiency to your kitchen with high-quality, durable, and performance-driven equipment. Whether you're running a professional restaurant, a bustling café, or upgrading your home kitchen, our expertly crafted solutions ensure seamless cooking, refrigeration, food prep, and hygiene management."}
          </p>
          <button data-aos="fade-up" data-aos-delay="600" className="olive rounded-md py-2 px-4 mt-[2rem]">Explore More</button>
        </div>
        <div className="w-[100%]  overflow-hidden xl:w-[60%] grid grid-cols-2 gap-6  p-[5%]">
          {img.map((item, index) =>
            <div
            key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index + 2) * 100}`}
            >
              <div
                key={index} className=" hover:shadow-md hover:scale-105 transition-transform !duration-500  w-[100%]  h-[150px] md:h-[200px] relative bg-blue-400 rounded-2xl overflow-hidden">
                <Image src={item.image}
                  alt=""
                  height={400}
                  width={400}
                  className=" w-full object-cover h-full "
                />
                <span className="absolute bottom-2 text-[20px] left-3 text-white"> {item.text}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
