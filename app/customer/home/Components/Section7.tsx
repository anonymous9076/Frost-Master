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
      <h1 data-aos="fade-up" className="w-full text-[40px]  md:text-[50px] py-[3rem] text-center font-bold ">
        Connecting Cities, Delivering Quality
      </h1>
      <div className="flex items-center   h-fit justify-center gap-3  flex-wrap  lg:gap-7 ">
        {obj.map((item, index) => (
          <div
          
           data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
            key={index} className="h-[60dvh] w-[60%] md:w-[25%] min-w-[300px]">
            <div className="h-full  w-full flex flex-col justify-between items-center ">
              <Image
                src={item.image}
                alt=""
                height={400}
                width={400}
                className=" h-[85%] w-[80%] object-cover rounded-xl shadow-md"
              ></Image>
              <p className="text-[20px] text-center font-bold">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
