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
];

  return (
    <div className="light h-fit w-full pb-[2rem]">
      <h1 data-aos="fade-up" className="w-full responsive-heading py-[3rem] text-center font-bold ">
        Connecting Cities, Delivering Quality
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-[5%]">
        {obj.map((item, index) => (
          <div
          
           data-aos="fade-up"
            data-aos-delay={`${(index + 1) * 100}`}
            key={index} className=" overflow-hidden rounded-xl">
            <div className="h-fit  w-full flex group flex-col !overflow-hidden transition-all duration-500 ease-linear relative justify-between items-center ">
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className=" aspect-[3/3.5] group-hover:scale-120 group-focus:scale-120  transition-all duration-300 ease-linear object-cover rounded-xl shadow-md"
              ></Image>
              <p className="text-[20px] h-full w-full bg-black/20 flex items-center rounded-xl justify-center text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  !font-semibold text-center">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
