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
];

  return (
    <div className="light h-fit w-full pb-[2rem]">
      <h1 data-aos="fade-up" className="w-full responsive-heading py-[3rem] text-center font-bold ">
        Connecting Cities, Delivering Quality
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-[8%]">
        {obj.map((item, index) => (
          <div
          
           data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
            key={index} className="  !max-h-[500px] min-w-[300px]">
            <div className="h-fit  w-full flex flex-col justify-between items-center ">
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className=" aspect-[3/3.5] object-cover rounded-xl shadow-md"
              ></Image>
              <p className="text-[25px] text-gray-700 !font-semibold text-center">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
