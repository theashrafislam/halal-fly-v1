import React from "react";

const OverViewSection = ({ tour }) => {
  if (!tour) {
    return (
      <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Overview</h2>
        <div className="text-[#444] space-y-4 text-sm sm:text-base leading-relaxed">
          <p>No overview available</p>
        </div>
      </div>
    );
  }

  // Split the overview text into paragraphs if it contains multiple paragraphs
  const paragraphs = tour.overview.split("\n\n").filter((p) => p.trim() !== "");

  return (
    <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Overview</h2>
      <div className="text-[#444] space-y-4 text-sm sm:text-base leading-relaxed">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>{tour.overview}</p>
        )}
      </div>
    </div>
  );
};

export default OverViewSection;