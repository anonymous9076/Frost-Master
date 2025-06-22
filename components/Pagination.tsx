"use client";
import React, { useEffect, useState } from "react";

interface Props {
  handleOnChange: (pageNo: number) => void;
  currentPage: number;
  totalPages: number;
  user: string;
}

const Pagination = ({
  handleOnChange,
  currentPage,
  totalPages,
  user,
}: Props) => {
  const [bgColor, setBgColor] = useState("bg-[#35736E]");

  useEffect(() => {
    setBgColor(user === "admin" ? "bg-[#60A5FA]" : "bg-[#35736E]");
  }, [user]);

  const getPaginationPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex text-[12px] sm:text-[16px] flex-col-reverse sm:flex-row items-start sm:items-center justify-between sm:gap-2 my-3">
      <div>
        Showing page {currentPage} of {totalPages}
      </div>
      <div className="flex items-center py-2 sm:gap-1 flex-wrap cursor-pointer">
        <button
          className={`border-2 cursor-pointer border-gray-300 px-3 py-1 rounded-md hover:opacity-80 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : bgColor + " text-white"
          }`}
          onClick={() => currentPage > 1 && handleOnChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {getPaginationPages().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === "number" && handleOnChange(number)}
            disabled={number === "..."}
            className={`px-3 py-1 mx-1 rounded-md ${
              number === currentPage
                ? `${bgColor} text-white`
                : "border border-gray-300"
            } ${number !== "..." ? "hover:opacity-80" : "cursor-default"}`}
          >
            {number}
          </button>
        ))}

        <button
          className={`border-2 border-gray-300 px-3 py-1 rounded-md hover:opacity-80 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : bgColor + " text-white"
          }`}
          onClick={() =>
            currentPage < totalPages && handleOnChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
