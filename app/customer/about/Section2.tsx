import Image from "next/image";
import React from "react";

const Section2 = () => {
const items = [
  {
    title: "Innovative Solution",
    anime: 'fade-up',
    desc: "We will defy the conventional processes and explore the possibilities. We will constantly break our paradigms by entering into the unknown. We will constantly research, formulate and deliver innovative solutions",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img5.jpg`,
  },
  {
    title: "Commitment is staying dedicated.",
    anime: 'fade-up',
    desc: "We will be dedicated and determined to deliver, whatever we promise in-time. We will not over commit and under deliver. We will complete what we have started and bring it to a logical end.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img3.jpg`,
  },
  {
    title: "Relationship for Life",
    anime: 'fade-up',
    desc: "Once you fill in your details, you’re added to the right student group (e.g., MBA, Computer Science). Engage in meaningful academic discussions, exchange resources, and get the support you need.",
    image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img1.jpg`,
  },
];

  return (
    <div className="light w-full overflow-hidden h-fit px-[5%] py-[4rem]">
        <h1 className="text-[30px] lg:text-[45px] text-center w-full pb-[3rem] mx-auto">Our core ideology is passion, persistence, and purpose-driven excellence.</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
  {items.map((item, index) => (
    <div
      key={index}
      data-aos={item.anime}
      className="w-full h-full flex flex-col justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-500 ease-in-out"
    >
      <Image
        className="rounded-lg h-[280px] w-full object-cover"
        src={item.image}
        alt=""
        width={400}
        height={300}
      />

      {/* Content wrapper should fill the remaining vertical space */}
      <div className="flex flex-col flex-1 pt-5 justify-between ">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
        </div>

        {/* Optional CTA/Button can go here */}
        {/* <button className="mt-auto items-center px-3 py-2 text-sm font-medium text-center olive rounded-md">
          Read more
        </button> */}
      </div>
    </div>
  ))}
 </div>


    </div>
  );
};

export default Section2;
