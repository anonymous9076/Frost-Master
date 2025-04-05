import React from "react";
interface modelProps{
    handleclose:()=>void
}

const CancelOrderModel = ({handleclose}:modelProps) => {
  return (
    <div className="h-screen w-screen top-0 left-0 fixed z-100 bg-black/70 flex items-center justify-center">
      <div className="bg-white h-[50dvh] leading-7 min-w-[350px] flex flex-col items-center justify-center py-[2rem] w-[40%] rounded-lg ">
        <h1 className="text-center  font-bold text-[30px]">
          Order Cancellation
        </h1>
        <p className="text-center ">
          Are you Sure you want to Cancle this Order
        </p>
        <textarea
          className="border border-gray-400 p-2 mt-3 rounded-lg w-[70%] h-[50%] "
          placeholder="Reason for Cancelling"
        ></textarea>
        <div className="flex gap-4">
          <button onClick={handleclose} className="olive mt-3 text-white w-[120px] text-center py-2 rounded-lg">
            Keep It
          </button>
          <button onClick={handleclose} className="bg-red-400 mt-3 text-white w-[120px] text-center py-2 rounded-lg">
            Cancel Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModel;
