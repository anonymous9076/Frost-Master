import React from "react";

const Section8 = () => {
  return (
    <div className="light border-y border-gray-300 mb-[2rem] w-full flex py-[6rem] px-[5rem]">
      <div className="w-[50%] text-gray-600 ">
        <h2 className="text-gray-900 text-[35px] ">
          Reach Our Customer Service Team
        </h2>
        <p>
          {
            "Our dedicated customer service team is here to assist you with any questions, concerns, or inquiries you may have. Whether you need help with an order, have product-related queries, or require assistance with any aspect of our services, we're here to help."
          }
        </p>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="w-[70%] bg-[#F9F9FB] rounded-lg p-[1rem] flex flex-col gap-3">
          <input
            type="email"
            className="border text-center border-gray-400 w-full py-2 px-3 rounded-lg"
            placeholder="Enter Your Email Address"
            
          ></input>
          <button className="olive w-full py-2 rounded-lg">
            {"Send Message ->"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section8;
