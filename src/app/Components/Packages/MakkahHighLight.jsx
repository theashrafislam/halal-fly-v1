import React from "react";

const MakkahHighlight = ({ highlights }) => {
  // Handle if highlights is not a string
  const lines = typeof highlights === "string"
    ? highlights.split("\n").filter(line => line.trim() !== "")
    : [];

  return (
    <div className="mt-5 text-[#FFFFFF] md:mt-7 flex flex-col gap-3">
      <h6 className="text-xl md:text-2xl font-bold mb-2">Highlights</h6>

      {lines.length > 0 ? (
        lines.map((line, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-3 h-3 rounded-full bg-[#D0A148] mt-1.5 flex-shrink-0"></div>
            <p
              className="text-base"
              dangerouslySetInnerHTML={{ __html: line }}
            ></p>
          </div>
        ))
      ) : (
        <p className="text-base text-[#444]">No highlights available.</p>
      )}
    </div>
  );
};

export default MakkahHighlight;