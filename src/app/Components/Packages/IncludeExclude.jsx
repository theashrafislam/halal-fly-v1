import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const IncludeExclude = ({ tour }) => {
  if (!tour) {
    return (
      <div className="py-8 md:py-12 lg:py-16 animate-pulse">
        <div className="h-8 bg-gray-200 w-64 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="h-6 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="h-6 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Convert to array if it's a string with newlines
  const included = Array.isArray(tour.included)
    ? tour.included
    : tour.included?.split("\n") || [];

  const notIncluded = Array.isArray(tour.notIncluded)
    ? tour.notIncluded
    : tour.notIncluded?.split("\n") || [];

  return (
    <div className="py-8 md:py-12 lg:py-16 border-y-2 border-[#E6E6E6]">
      <h6 className="text-2xl text-[#D0A148] md:text-3xl lg:text-4xl font-bold mb-6">
        Included/Excluded
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-3">
          {included.map((item, index) => (
            <p key={index} className="text-base flex items-center gap-2">
              <span className="text-[#05977C] flex-shrink-0">
                <FaCheck size={18} />
              </span>
              <span className="text-[#FFFFFF]">{item.trim()}</span>
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {notIncluded.map((item, index) => (
            <p key={index} className="text-base flex items-center gap-2">
              <span className="text-[#E64251] flex-shrink-0">
                <IoMdClose size={20} />
              </span>
              <span className="text-[#FFFFFF]">{item.trim()}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncludeExclude;