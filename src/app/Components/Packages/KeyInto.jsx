import React from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaChild,
  FaMapMarkerAlt,
} from "react-icons/fa";

const KeyInfo = ({ tour }) => {
  if (!tour) {
    return (
      <div className="w-full bg-[#f8fcfc] rounded-md p-4 md:p-6 my-6 md:my-8 animate-pulse">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const { duration, maxPeople, minAge, pickup } = tour.keyInfo;
  return (
    <div className="w-full bg-[#f8fcfc] rounded-md p-4 md:p-6 my-6 md:my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <div className="text-[#D0A148] text-2xl">
            <FaCalendarAlt />
          </div>
          <div>
            <h4 className="font-semibold text-[#D0A148] text-lg">Duration</h4>
            <p className="text-gray-700">{duration}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#D0A148] text-2xl">
            <FaUsers />
          </div>
          <div>
            <h4 className="font-semibold text-[#D0A148] text-lg">Max People</h4>
            <p className="text-gray-700">{maxPeople}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#D0A148] text-2xl">
            <FaChild />
          </div>
          <div>
            <h4 className="font-semibold text-[#D0A148] text-lg">Min Age</h4>
            <p className="text-gray-700">{minAge}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[#D0A148] text-2xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h4 className="font-semibold text-[#D0A148] text-lg">Pickup</h4>
            <p className="text-gray-700">{pickup}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInfo;