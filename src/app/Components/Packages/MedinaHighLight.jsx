import React from "react";
// import data from "./data.json";

const MedinaHighlight = () => {
  const highlights = data.medinaHighlights;

  return (
    <div className="mt-5 md:mt-7 flex flex-col gap-3">
      <h6 className="text-xl md:text-2xl font-bold mb-2">Medinah Highlights</h6>
      {highlights?.map((highlight, index) => (
        <div key={index} className="flex items-start gap-2">
          <div className="w-3 h-3 rounded-full bg-[#B82525] mt-1.5 flex-shrink-0"></div>
          <p className="text-base text-[#444]">
            <span className="font-semibold">{highlight.title}:</span>{" "}
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MedinaHighlight;
