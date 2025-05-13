import React from "react";

const HeroImages = ({ image }) => {

  if (!image) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex-1 overflow-hidden rounded-xl shadow-md border border-gray-100 bg-gray-100 animate-pulse h-[180px] md:h-[220px]"
            ></div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        {image.map((src, index) => (
          <div
            key={index}
            className="flex-1 overflow-hidden rounded-xl shadow-md border border-gray-100"
          >
            <img
              src={src}
              alt={`tour-image-${index}`}
              className="w-full h-[180px] md:h-[220px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImages;