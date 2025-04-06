/* eslint-disable react/prop-types */
import React from "react";

interface stepperProps {
  currentStep: number;
  numberOfSteps: number;
}

export default function Stepper({ currentStep }: stepperProps) {
  const activeColor = (index: number) =>
    currentStep >= index ? "bg-[#35736E] text-white" : "bg-gray-300 text-black";
//   const activeColorLine = (index: number) =>
//     currentStep > index ? "bg-[#35736E]" : "bg-gray-300";

  const Phases = [
    {
      type: "Order Placed",
      date: "2025-04-01",
    },
    {
      type: "Order Confirmed",
      date: "2025-04-02",
    },
    {
      type: "Packing",
      date: "2025-04-03",
    },
    {
      type: "Shipped",
      date: "2025-04-04",
    },
    {
      type: "Delivered",
      date: "2025-04-06",
    },
  ];

  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-start w-full">
        {Phases.map((phase, index) => (
          <div className="flex flex-col items-center flex-1 relative" key={index}>
            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 ${activeColor(
                index
              )}`}
            >
              {index + 1}
            </div>

            {/* Connector line */}
            {index !== Phases.length -1  && (
              <div
                className={`absolute top-4 left-0 h-1 w-full z-0 ${
                  index < currentStep ? "bg-[#35736E]" : "bg-gray-300"
                }`}
                style={{ transform: "translateX(50%)", width: "100%" }}
              ></div>
            )}

            {/* Step label */}
            <div className="mt-2 text-center">
              <div className="text-sm font-semibold">{phase.type}</div>
              <div className="text-xs text-gray-500">{phase.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
