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
    <div className="light w-full overflow-hidden h-fit py-[4rem]">
        <h1 className="text-[30px] lg:text-[45px] text-center w-[70%] pb-[3rem] mx-auto">Our core ideology is passion, persistence, and purpose-driven excellence.</h1>
        <div className="w-[80%] h-fit flex flex-col md:flex-row gap-[2rem] items-center justify-center mx-auto">

        {items.map((item,index)=>
      <div key={index} data-aos={item.anime} className="w-[350px] h-[85dvh] p-4 bg-white border hover:scale-103 hover:shadow-lg border-gray-200 rounded-lg shadow-sm ">
        <a href="#">
          <Image
            className="rounded-t-lg !h-[50%]"
            src={item.image}
            alt=""
            height={400}
            width={400}
          />
        </a>
        <div className="p-5 flex h-[17.3rem] flex-col justify-between items-start">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {item.title}
            </h5>
          </a>
          <p className="mb-3   flex-1  h-[16dvh] overflow-hidden font-normal text-gray-700 dark:text-gray-400">
            {item.desc}
          </p>
          <button
            className=" items-center px-3 py-2 text-sm font-medium text-center olive rounded-md"
          >
            Read more
          </button>
        </div>
      </div>
        )}
        </div>

    </div>
  );
};

export default Section2;
