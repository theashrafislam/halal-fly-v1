import React from "react";
import MakkahHighlight from "./MakkahHighLight";

const OverViewSection = ({ tour }) => {


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


  return (
    <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 px-2 sm:px-4 md:px-6 lg:px-0">
      <h2 className="text-3xl text-[#D0A148] md:text-4xl font-bold mb-2">Overview</h2>
      <div className="text-[#FFF] space-y-4 text-sm sm:text-base leading-relaxed">
        <p >{tour?.description}</p>
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