"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";

const Services = () => {
  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (index: number) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const features = [
    {
      title: "OUR FEATURES",
      description: [
        "The layout of a kitchen plays a critical role in the efficiency and productivity of the space, and the design team at Frost Master takes a comprehensive approach to kitchen planning and layout designing.",
        "They start by conducting a thorough assessment of the client's needs and preferences, including the size and shape of the kitchen space, the location of windows, doors, and other architectural features, and the specific requirements for equipment and workflow.",
        "Using this information, they create a customized layout that maximizes space utilization and ensures easy movement of movable equipment in the kitchen corridors. This includes designing efficient workflow patterns, optimizing storage and work surfaces, and ensuring that all equipment is properly placed and accessible.",
        "The team also takes into account the aesthetics of the kitchen, creating a layout that is both functional and visually appealing, with a focus on creating a comfortable and inviting space for the chefs and other kitchen staff.",
        "Overall, the Frost Master design team is dedicated to creating kitchen layouts that are optimized for efficiency, productivity, and aesthetics, while also ensuring the best space utilization and easy movement of movable equipment in the kitchen corridors. With their expertise and attention to detail, clients can be confident that their new kitchen will be designed to meet their specific needs and exceed their expectations.",
      ],
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img1.jpg`,
      align: "",
      justify: "justify-start",
      border: "border-r-4 border-b-4 border-[#35736E]/60",
      anime: "fade-right",
    },
    {
      title: "AFTER SALE SERVICE OR AMC",
      description: [
        "Frost Master's commitment to quality and customer service is reflected in this promise, which guarantees that its products will be reliable and durable and that any issues or concerns will be promptly addressed and resolved.",
        "By offering this promise, Frost Master shows that they are dedicated to providing their customers with the best possible experience and that they stand behind their products with confidence.",
        "Whether it's ensuring the proper maintenance and servicing of kitchen equipment, providing prompt and reliable repairs when needed, or offering expert advice and guidance to customers, Frost Master is committed to ensuring the smooth and efficient operation of their customers' kitchens for many years to come.",
        "Overall, Frost Master's new way of kitchen service and promise to ensure complete freedom from all worries related to their products reflect their dedication to quality, reliability, and customer service, and reinforces their position as a leader in the food service industry.",
      ],
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img2.jpg`,
      align: "sm:flex-row-reverse  ",
      justify: "justify-end",
      border: "border-l-4 border-b-4 border-[#35736E]/60",
      anime: "fade-left",
    },
    {
      title: "INSTALLATION",
      description: [
        "The Frost Master design team understands the importance of creating a kitchen layout that maximizes space and promotes efficiency, while also ensuring that the kitchen is aesthetically pleasing and functional. They take a comprehensive approach to kitchen planning and layout designing, starting with an assessment of the client's requirements and preferences.",
        "The team carefully considers the size and shape of the kitchen space, as well as the location of windows, doors, and other architectural features, to create a layout that optimizes space utilization and allows for easy movement of movable equipment in the kitchen corridors.",
        "They also take into account the specific needs of the client, such as their cooking habits, lifestyle, and design preferences, to create a customized layout that is tailored to their individual needs.",
        "In addition, the team uses state-of-the-art technology to create 3D renderings of the proposed kitchen layout, which allows the client to visualize the space and make any necessary adjustments before the execution of the kitchen starts.",
        "Overall, the Frost Master design team is dedicated to creating kitchen layouts that are both functional and aesthetically pleasing, and that maximize space utilization while ensuring easy movement of movable equipment in the kitchen corridors. With their expertise and attention to detail, clients can be confident that their new kitchen will be optimized for efficiency and designed to meet their specific needs.",
      ],
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img3.jpg`,
      align: "",
      justify: "justify-start",
      border: "border-r-4 border-b-4 border-[#35736E]/60",
      anime: "fade-right",
    },
    {
      title: "LPG PIPELINE DESIGN INSTALLATION",
      description: [
        "The Frost Master Installation team has extensive experience in installing L.P.G pipelines for kitchens, and they follow strict safety protocols and standards to ensure that the installation is safe, reliable, and efficient.",
        "The team starts by conducting a thorough site survey to assess the requirements of the kitchen and determine the most suitable location for the L.P.G pipeline. They then design and install the pipeline system using high-quality materials and state-of-the-art equipment, ensuring that all connections and fittings are secure and leak-free.",
        "The team also conducts rigorous testing and inspection of the pipeline system to ensure that it is functioning properly and in compliance with safety regulations. They provide training and guidance to clients on the safe use and maintenance of the L.P.G pipeline system, and they are always available to provide support and assistance in case of any issues or concerns.",
        "Overall, the Frost Master Installation team is committed to ensuring the safety and efficiency of L.P.G pipeline installation in kitchens. With their experience and expertise, clients can be confident that their kitchen's L.P.G pipeline is installed to the highest standards and will function safely and reliably for years to come.",
      ],
      align: "sm:flex-row-reverse",
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img4.jpg`,
      justify: "justify-end",
      border: "border-l-4 border-b-4 border-[#35736E]/60",
      anime: "fade-left",
    },
    {
      title: "COMMERCIAL KITCHEN LAYOUT DESIGN",
      description: [
        "The Frost Master design team understands the importance of proper kitchen planning and layout designing, and they take a comprehensive approach to ensure that every aspect of the kitchen is carefully considered and optimized for the client's needs.",
        "The first step in the process is to assess the client's requirements, taking into account their cooking habits, lifestyle, and overall design preferences. This helps the team to create a customized kitchen layout that maximizes space, promotes efficiency, and enhances the aesthetic appeal of the space.",
        "Once the design has been finalized, the team will work closely with the client to select the appropriate materials, appliances, and finishes that will bring the vision to life. The team has extensive experience working with a wide range of materials and finishes, from traditional to modern, and they can help clients choose the perfect combination of elements to create a truly unique and personalized kitchen space.",
        "Overall, the Frost Master design team is dedicated to providing clients with a comprehensive kitchen planning and layout designing service that is tailored to their individual needs and preferences. With their expertise and attention to detail, clients can be confident that their new kitchen will be both beautiful and functional, and perfectly suited to their lifestyle.",
      ],
      image: `${process.env.NEXT_PUBLIC_CDNURL}Images/frostservices/img5.jpg`,
      align: "",
      justify: "justify-start",
      border: "border-r-4 border-b-4 border-[#35736E]/60",
      anime: "fade-right",
    },
  ];

  return (
    <>
      {/* set the height of the container  */}

      <Navbar active="/customer/services"></Navbar>
      <div className="h-fit light px-[1rem]  md:px-[2rem] xl:px-[4rem] pb-[4rem] pt-[2rem] w-full overflow-hidden ">
        {features.map((item, index) => (
          <div
            className={`h-fit  flex ${item.align} gap-10   items-center flex-col  sm:flex-row w-full ${item.border} p-[5%] py-[4rem]`}
            key={index}
          >
            <Image
              src={item.image}
              alt="t"
              height={400}
              width={400}
              data-aos={item.anime}
              className="md:w-1/2 w-[100%] sm:w-1/2  h-[55dvh] max-h-[350px] rounded-md shadow-lg"
            ></Image>
            <div
              className="flex flex-col w-[100%]   sm:w-1/2 md:w-1/2 justify-center h-full"
              data-aos={item.anime}
            >
              <h2 className="font-bold text-[30px] text-[#35736E]">
                {" "}
                {item.title}
              </h2>
              <div
                className={`flex flex-col transition-all duration-1500 ease-in-out overflow-hidden ${
                  readMore[index] ? "max-h-[500px]" : "max-h-[200px]"
                } py-[1rem] pr-3`}
              >
                {readMore[index]
                  ? item.description.map((description, index) => (
                      <div
                        key={index}
                        className=" text-[14px] text-slate-700  font-normal flex-row"
                      >
                        <p>{description}</p>
                        <br></br>
                      </div>
                    ))
                  : item.description[0]}
              </div>
              <button
                onClick={() => toggleReadMore(index)}
                className="px-4 py-2 w-fit rounded-md my-[1rem] olive"
              >
                {readMore[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
