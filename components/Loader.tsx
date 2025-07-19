import React from "react";

const Loader = () => {
  return (
      <div className="relative w-[100px] h-[100px]">
        <div className="absolute inset-0 rounded-full border-8 border-t-[#35736E] border-r-transparent border-b-[#35736E] border-l-transparent animate-spin"></div>
        <div className="absolute inset-4 bg-white rounded-full"></div>
      </div>
  );
};

export default Loader;
