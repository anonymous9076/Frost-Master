import React from "react";
import Image from "next/image";
import aaa from "../../../Images/aaa.jpeg";
const Section5 = () => {
  const object = [
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
    { image: aaa, title: "Logoipsum" },
  ];
  return (
    <div className="olive w-full py-[4rem]">
      <h3 className="text-center w-full text-[50px]">
        Trusted by thoudsandsBusinesss
      </h3>
      <p className="text-center w-full text-[20px]">
        More than 15,000 companies and partners trust FrostMaster for
        excellence, reliability, and superior kitchen solutions.
      </p>
      <div className=" grid grid-cols-4 w-[70%] py-[3rem] items-center justify-center mx-auto h-fit gap-5">
        {object.map((item, index) => (
          <div
            key={index}
            className="py-[2rem] px-[4rem]  text-[20px] flex items-center justify-center gap-2 font-bold border rounded-lg w-fit shadow-md border-gray-400"
          >
            <Image
              src={item.image}
              alt="ew"
              height={400}
              width={400}
              className=" w-[30px] object-cover rounded-2xl h-[30px] "
            />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
