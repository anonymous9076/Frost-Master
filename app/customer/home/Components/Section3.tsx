import React from "react";

const Section3 = () => {
  return (
    <div className="bg-[#EAEAEA] w-full flex lg:flex-row flex-col py-[5rem] px-[5%]">
      <div className="w-full lg:w-[50%] text-gray-600 ">
        <h2 data-aos="fade-up" className="text-gray-900 responsive-heading">
          Why frostmaster.in?
        </h2>
        <p data-aos="fade-up" className="responsive-subtext w-[100%]">
          Welcome to our unique platform for restaurant owners! We provide
          location analysis, premium kitchen tools, expert consultations, and
          comprehensive maintenance packages. Designed to address your
          challenges, ensure smooth operations, and drive success.
        </p>
        <br></br>
        <p data-aos="fade-up" className="responsive-subtext w-[100%]">
          {
            "Whether finding the ideal site, upgrading your kitchen, or maintaining equipment, we've got you covered. Elevate your restaurant business with our innovative solutions and support. Join us for growth and excellence in every aspect of your operation."
          }
        </p>
      </div>
      <div className="relative w-[50%] hidden lg:block">
        <span data-aos="fade-down" className="absolute left-[20%] top-0 olive rounded-full h-[120px] w-[120px] flex items-center justify-center text-[18px] text-center">
          Serving Pan India!
        </span>
        <span data-aos="fade-left" className="absolute olive top-[20%] left-[70%] rounded-full h-[150px] w-[150px] flex items-center justify-center  text-[18px] text-center">
          Cumulative<br></br> 100+ Years <br></br> Experience
        </span>
        <span data-aos="fade-up" className="absolute olive top-[60%] left-[40%] rounded-full h-[200px] w-[200px] flex items-center justify-center text-[18px] text-center">
          4500+ Commercial <br></br> Kitchen <br></br>Equipments{" "}
        </span>
        <span data-aos="fade-down" className="olive absolute top-[40%] left-[40%] rounded-full h-[60px] w-[60px]">
          {" "}
        </span>
        <span data-aos="fade-left" className="olive absolute top-[65%] left-[35%] rounded-full h-[40px] w-[40px]">
          {" "}
        </span>
        <span data-aos="fade-down" className="olive absolute top-[65%] right-[0%] rounded-full h-[40px] w-[40px]">
          {" "}
        </span>
      </div>
    </div>
  );
};

export default Section3;
