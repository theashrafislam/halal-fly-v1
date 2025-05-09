import React from "react";

const DestinationFeatures = ({ type, tour }) => {
  if (!tour) {
    return (
      <div className="mt-5 md:mt-7 flex flex-col gap-3 animate-pulse">
        <div className="h-8 bg-gray-200 w-48 rounded mb-2"></div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <div className="h-6 bg-gray-200 w-full rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const highlights =
    type === "makkah" ? tour.makkahHighlights : tour.medinaHighlights;

  if (!highlights || highlights.length === 0) {
    return null;
  }

  const title = type === "makkah" ? "Makkah Highlights" : "Madinah Highlights";

  return (
    <div className="mt-5 md:mt-7 flex flex-col gap-3">
      <h6 className="text-xl text-[#FFF] md:text-2xl font-bold mb-2">{title}</h6>
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#D0A148]"></div>
          <p className="text-base text-[#FFF]">
            <span className="font-semibold">{highlight.title}:</span>{" "}
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DestinationFeatures;