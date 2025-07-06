import Image from "next/image";
import React from "react";

const Section7 = () => {
const obj = [
  {
    label: "Patna , Bihar",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/City/Patna.jpg`,
  },
  {
    label: "Ranchi , Jharkhand",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/City/Jharkhand.jpg`,
  },
  {
    label: "Delhi (Head Office)",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/City/Delhi.jpg`,
  },
  {
    label: "Gurgaon, Haryana",
    image: `/gurgaon.jpg`,
  },
  {
    label: "Muzaffarpur, Bihar",
    image: `/Muzaffarpur.jpg`,
  },
  {
    label: " ",
    image: `/soon.jpg`,
  },
];

  return (
    <div className="light h-fit w-full pb-[2rem]">
      <h1 data-aos="fade-up" className="w-full responsive-heading py-[3rem] text-center font-bold ">
        Connecting Cities, Delivering Quality
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-[5%]">
        {obj.map((item, index) => (
          <div
          
           data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 100}`}
            key={index} className=" overflow-hidden rounded-xl">
            <div className="h-[60dvh]  w-full flex group flex-col !overflow-hidden transition-all duration-500 ease-linear relative justify-between items-center ">
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className="  w-full h-full min-h-[320px] group-hover:scale-120 group-focus:scale-120  transition-all duration-400 ease-linear object-cover rounded-xl shadow-md"
              ></Image>
              <p className="text-[28px] md:text-[25px] h-full w-full  bg-black/20 flex items-center rounded-xl justify-center text-white absolute !font-semibold text-center">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
