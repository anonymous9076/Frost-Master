import React from "react";
import Image from "next/image";
const Section5 = () => {
const object = [
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
  { image: `${process.env.NEXT_PUBLIC_CDNURL}Images/aaa.jpeg`, title: "Logoipsum" },
];


  return (
    <div className="olive w-full px-[5%] py-[4rem]">
      <h3 data-aos="fade-up" className="text-center w-full responsive-heading">
        Trusted by thoudsands Businesss
      </h3>
      <p data-aos="fade-up" className="text-center w-full responsive-subtext">
        More than 15,000 companies and partners trust FrostMaster for
        excellence, reliability, and superior kitchen solutions.
      </p>
      <div className="   w-[100%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 py-[3rem]  mx-auto h-fit gap-5">
        {object.map((item, index) => (
          <div
          key={index}
            data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
          >

            <div
              key={index}

              className="py-[2rem] responsive-subtext px-[5%] hover:shadow-md hover:scale-105 transition-transform duration-300 w-full flex items-center justify-center gap-2 font-bold border rounded-lg  shadow-md border-gray-400"
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
          </div>

        ))}
      </div>
    </div>
  );
};

export default Section5;
