"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TourPlan = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const tourData = [
    {
      day: "Day 1",
      title: "Flight Plan",
      details:
        "Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.",
    },
    {
      day: "Day 2",
      title: "Optional Activities",
      details:
        "Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.",
    },
    {
      day: "Day 3",
      title: "The South Coast",
      details:
        "Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim. Tempus, leo, taciti augue aliquam hendrerit. Accumsan pharetra eros justo augue posuere felis elit cras montes fames. Vulputate dictumst egestas etiam dictum varius.",
    },
  ];

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Tour Plan</h2>
      <div className="space-y-4">
        {tourData.map((item, index) => (
          <div key={index} className="bg-[#F5F5F5] rounded-xl">
            <div
              onClick={() => toggleIndex(index)}
              className="p-[10px] cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <button className="btn-primary">{item.day}</button>
                <p className="text-base font-bold">{item.title}</p>
              </div>
              {activeIndex === index ? (
                <FaChevronUp className="text-lg" />
              ) : (
                <FaChevronDown className="text-lg" />
              )}
            </div>
            {activeIndex === index && (
              <div className="px-8 pb-6 text-base text-[#444]">
                {item.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPlan;
