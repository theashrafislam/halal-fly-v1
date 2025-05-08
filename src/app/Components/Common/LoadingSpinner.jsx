"use client";

import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = ({ size = "large", text = "Loading..." }) => {
  let spinnerSize;
  let textSize;

  switch (size) {
    case "small":
      spinnerSize = "text-2xl";
      textSize = "text-sm";
      break;
    case "medium":
      spinnerSize = "text-3xl";
      textSize = "text-base";
      break;
    case "large":
    default:
      spinnerSize = "text-4xl";
      textSize = "text-lg";
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <FaSpinner
        className={`${spinnerSize} text-[#00BB98] animate-spin mb-3`}
      />
      <p className={`${textSize} font-medium text-gray-700`}>{text}</p>
    </div>
  );
};

export default LoadingSpinner;