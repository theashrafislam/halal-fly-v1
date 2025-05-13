import React from "react";
import MakkahHighlight from "./MakkahHighLight";

const OverViewSection = ({ tour }) => {
  const fallbackOverview = `This tour offers a unique spiritual journey, allowing you to explore historical sites and experience cultural richness in a comfortable and organized manner. Enjoy guided tours, quality accommodations, and seamless travel services designed to make your experience unforgettable.`;

  if (!tour) {
    return (
      <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Overview</h2>
        <div className="text-[#FFF] space-y-4 text-sm sm:text-base leading-relaxed">
          <p>No overview available</p>
        </div>
      </div>
    );
  }

  const rawOverview = tour.overview?.trim();

  // Split paragraphs based on "\n\n"
  const paragraphs = rawOverview?.split("\n\n").filter((p) => p.trim() !== "") || [];

  // Use fallback if no paragraph found or overview is too short
  const shouldUseFallback = !rawOverview || paragraphs.length === 0 || rawOverview.length < 20;

  return (
    <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-0">
      <h2 className="text-3xl text-[#D0A148] md:text-4xl font-bold mb-2">Overview</h2>
      <div className="text-[#FFF] space-y-4 text-sm sm:text-base leading-relaxed">
        {shouldUseFallback ? (
          <p>{fallbackOverview}</p>
        ) : (
          paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        )}
      </div>
      {/* Mokkah  */}
      <div>
        <MakkahHighlight highlights={tour?.highlights}/>
      </div>

      {/* median  */}
      <div>
        {/* <MedinaHighlight /> */}
      </div>
    </div>
  );
};

export default OverViewSection;