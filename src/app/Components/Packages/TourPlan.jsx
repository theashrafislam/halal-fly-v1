"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TourPlan = ({itinerary}) => {

  console.log(itinerary);

  const [activeIndex, setActiveIndex] = useState(null);
  

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="text-[#D0A148]">
      <h2 className="text-3xl md:text-4xl font-bold my-6">Tour Plan</h2>
      <div className="space-y-4">
        {itinerary?.map((item, index) => (
          <div key={index} className="bg-[#F5F5F5] rounded-xl">
            <div
              onClick={() => toggleIndex(index)}
              className="p-[10px] cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <button className="btn-primary">{item?.day}</button>
                <p className="text-base font-bold">{item?.title}</p>
              </div>
              {activeIndex === index ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </div>
            {activeIndex === index && (
              <div className="px-8 pb-6 text-base text-[#D0A148]">
                {item?.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPlan;
