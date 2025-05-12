import Image from "next/image";
import React from "react";
const Section4 = () => {
const object = [
  {
    title: "Excellence Beyond Every Sale",
    desc: "Building lasting relationships with continuous support, exceptional service, and a commitment to your long-term success.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img1.jpg`
  },
  {
    title: "Superior Quality, Maximum Performance",
    desc: "Delivering top-tier equipment to maximize efficiency, performance, and value for your investment.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img7.jpg`
  },
  {
    title: "Committed to Your Success",
    desc: "Supporting you until your investment turns into lasting value, ensuring growth, reliability, and customer satisfaction.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img8.jpg`
  },
  {
    title: "Relationships for Life",
    desc: "Committed to customer success with continuous support, innovative solutions, and value-driven leadership.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img10.jpg`
  },
  {
    title: "Elegant & Durable Designs",
    desc: "Stylish glass-encased pieces with a superior finish, built for beauty, durability, and stain resistance.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img11.jpg`
  },
  {
    title: "Power of Teamwork",
    desc: "Collaborating with unity, mentorship, and dedication to achieve collective and personal growth.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/PinkSectionNow/img13.jpg`
  }
];


  return (
    <div className="light py-[5rem]">
      <div className="w-[70%] mx-auto flex md:flex-row flex-col items-center justify-center py-[3rem]">
        <h1 data-aos="fade-up" className="flex-1 px-[1rem]  md:px-[2rem] leading-10 text-[40px]">
          What Makes us prominent players
        </h1>
        <p data-aos="fade-up" className="flex-1 px-[1rem] mt-2 md:mt-0 text-[20px]">
          FrostMaster excels in premium kitchen equipment distribution, offering
          top-quality products, reliable service, and innovative solutions for
          culinary professionals.
        </p>
      </div>
      <div className="w-[70%] mx-auto grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-7">
        {object.map((item, index) =>
          <div
          key={index}
            data-aos="fade-up"
            data-aos-delay={`${(index + 2) * 100}`}
          >
            <div
              key={index} className="border hover:shadow-md hover:scale-105 transition-transform duration-300 min-h-[28rem] border-gray-400 rounded-lg min-w-[250px] p-[1rem] ">
              <div className="w-full bg-red-300  h-[15rem] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt="uo"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover "
                ></Image>
              </div>
              <h3 className="text-center w-full text-[25px] leading-8 mt-5 font-semibold">
                {item.title}
              </h3>
              <p className="text-center text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default Section4;
