"use client";
import React, { useEffect } from "react";

interface props {
  handlePrevPages: () => void;
  handleNextPages: () => void;
  currentPage: number;
  totalPages: number;
  user: string;
}

const Pagination = ({
  handlePrevPages,
  handleNextPages,
  currentPage,
  totalPages,
  user,
}: props) => {
  const [bg_color, setBgColor] = React.useState("");
  useEffect(() => {
    if (user == "admin") {
      setBgColor("bg-[#60A5FA]");
    } else {
      setBgColor("bg-[#35736E]");
    }
  }, []);

  const getPaginationPages = () => {
    const pages = [];

    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(currentPage - 1, 2);
    const end = Math.min(currentPage + 1, totalPages - 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };
  return (
    <>
      <div className="w-full bg-gray flex items-center cursor-pointer  justify-between gap-2 my-3">
        <div>
          showing {currentPage} of {totalPages} pages
        </div>
        <div className="flex items-center gap-1">
          <button
            className={`border-2 border-gray-300 px-3 py-1 rounded-md  ${'hover:'+bg_color} `}
            onClick={handlePrevPages}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {getPaginationPages().map((number, index) => (
            <button
              key={index}
              className={`${
                currentPage === number
                  ? `${bg_color} text-white`
                  : "light border border-gray-300"
              } px-4 py-1 mx-1 rounded-lg ${'hover:'+bg_color} hover:text-white`}
              disabled={number === "..."}
            >
              {number}
            </button>
          ))}
          {/* <p className="border-2 border-gray-300 px-3 py-1 rounded-md text-white bg-blue-400 ">
            {currentPage}/{totalPages}
          </p> */}
          <button
            className={`border-2 border-gray-300 px-3 py-1 rounded-md  ${'hover:'+bg_color} `}
            onClick={handleNextPages}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
