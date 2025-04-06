import React from "react";

interface props {
  handleCloseModel: () => void;
  category: string;
  deleteData: () => void;
}

const DeleteModel = ({
  handleCloseModel,
  category,
  deleteData,
}: props) => {
  return (
    <div className="absolute flex items-center justify-center h-full w-full top-0 left-0 bg-[#00000080]">
      <div className="h-[200px] min-w-[300px] w-[30%] bg-white rounded-lg shadow-lg p-[1rem] px-[2rem] text-gray-600 flex items-start justify-evenly flex-col ">
        <p className="font-bold text-gray-700 text-[18px]">Delete {category}</p>
        <p className="leading-5">
          Are your sure you want to delete this {category}?<br></br>This action
          cannot be undone{" "}
        </p>

        <div className="flex gap-2 w-full justify-end">
          <button
            className="px-3 py-1 cursor-pointer border-2 border-gray-300 rounded-md"
            onClick={handleCloseModel}
          >
            Cancel
          </button>
          <button
            onClick={deleteData}
            className="px-3 py-1 border-2 cursor-pointer bg-red-500 border-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
