import React from "react";

interface props {
  handleOnChange: (pageNo: number) => void;
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ handleOnChange, currentPage, totalPages }: props) => {
  return (
    <>
      <div className="w-full bg-gray flex items-center   justify-between gap-2 my-3">
        <div>
          showing {currentPage} of {totalPages} pages
        </div>
        <div className="flex items-center gap-1">
          <button
            className="border-2 cursor-pointer border-gray-300 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-700 hover:text-white"
            onClick={() => handleOnChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p className="border-2 border-gray-300 px-3 py-1 rounded-md text-white bg-blue-400 ">
            {currentPage}/{totalPages}
          </p>
          <button
            className="border-2 cursor-pointer border-gray-300 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-700 hover:text-white"
            onClick={() => handleOnChange(currentPage + 1)}
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
