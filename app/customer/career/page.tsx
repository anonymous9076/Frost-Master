"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

interface FormData{
    name: string;
    email: string;
    message: string;
    phone:number
}

const Career = () => {
  const features = {
    title: "Careers in Frost Master",
    description:
      "Frost Master Private Limited is committed to providing career opportunities that allow employees to grow and succeed. As a leader in the refrigeration and air conditioning industry, Frost Master offers a dynamic and challenging work environment that values innovation and teamwork. Employees are provided with ongoing training and development opportunities to enhance their skills and knowledge. Frost Master also recognizes and rewards high performers, providing opportunities for advancement and career growth. Join the Frost Master team to be a part of a company that values its employees and supports their career aspirations. Visit their website to learn more about current job openings and career opportunities.",
    image: "/Images/study.jpg",
    align: "",
    justify: "justify-start",
    border: "border-r-4 border-b-4 border-[#35736E]",
  };

  const [formdata,setFormdata] = useState<FormData>({
    name: "",
    email: "",
    phone: 0,
    message: "",
  })
//   const [file,setFile]=useState<File>()

  const handleChange=(e:any)=>{
    const  value=e.target.value
    const  name=e.target.name
    setFormdata((prev)=>({...prev,[name]:value}))

  }
  const handleSubmit=()=>{
    console.log(formdata)
}
  return (
    <>
      <Navbar active="/customer/career"></Navbar>
      <div className="h-fit w-full light">
        <div
          className={`h-fit flex ${features.align} gap-8 items-center  w-[90%] mx-auto  p-[2rem] py-[4rem]`}
        >
          <Image
            src={features.image}
            alt="t"
            height={400}
            width={400}
            className="flex-1 h-[70dvh] rounded-md shadow-lg"
          ></Image>
          <div className="flex flex-1 px-[2rem] flex-col">
            <h2 className="font-bold text-[40px] w-fit border-b-4 border-[#35736E] my-[1rem] text-[#35736E]">
              {" "}
              {features.title}
            </h2>
            <div className="flex flex-col ">
              <div className=" text-[18px] text-slate-700  font-normal flex-row">
                <p>{features.description}</p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[60dvh] w-full relative ">
          <Image
            src="/Images/team3.jpg"
            alt=""
            height={400}
            width={400}
            className="h-full w-full"
          ></Image>
          <p className="absolute top-1/2 left-1/2 text-center text-white font-semibold text-[30px] w-[60%] -translate-y-1/2 -translate-x-1/2">
            {
              "Join the Frost Master and be part of a team that's always ahead of the game, where creativity meets innovation and excellence is our standard."
            }
          </p>
        </div>
        <div>
            <h1 className="text-center text-[#35736E] text-[40px] font-bold pt-[2rem]">{"We're Hiring!"}</h1>
            <div
          className={`h-fit flex ${features.align} gap-8 items-center  w-[90%] mx-auto  p-[2rem] pb-[4rem]`}
        >
          <Image
            src={features.image}
            alt="t"
            height={400}
            width={400}
            className="flex-1 h-[70dvh] rounded-md shadow-lg"
          ></Image>
          <div className="flex flex-1 p-[2rem] flex-col border-l-3 border-[#35736E]">
            <h2 className="font-bold text-[40px] w-fit border-b-3 border-[#35736E] mb-[1rem] text-[#35736E]">
              {" "}
              Apply Now
            </h2>
            <div className="flex flex-col ">
              <div className=" text-[16px] w-full flex   text-slate-700  font-normal flex-col gap-3">
                
                <input
                type="text"
                name="name"
                onChange={(e)=>handleChange(e)}
                placeholder="Enter Your Name"
                className="border border-[#35736E] text-[#35736E] outline-none w-full py-2 px-2 rounded-md "
                />
                <input
                type="number"
                name="phone"
                onChange={(e)=>handleChange(e)}
                placeholder="Enter Your Phone"
                className="border border-[#35736E] text-[#35736E] outline-none w-full py-2 px-2 rounded-md "
                />
                <input
                type="text"
                name="email"
                onChange={(e)=>handleChange(e)}
                placeholder="Enter Your Email"
                className="border border-[#35736E] text-[#35736E] outline-none w-full py-2 px-2 rounded-md "
                />
                <textarea
                placeholder="Enter Your Message"
                name="message"
                onChange={(e)=>handleChange(e)}
                className="border border-[#35736E] text-[#35736E] outline-none w-full py-2 px-2 rounded-md "
                rows={5}
                />
                {/* <div>
                <input name="file" onChange={(e)=>handleChange(e)} type="file"></input>
                </div> */}
                <button onClick={handleSubmit} className="py-2 px-4 rounded-md olive">Submit Application</button>
                <p className="text-[12px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Career;
