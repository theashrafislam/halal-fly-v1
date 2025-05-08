"use client";

import React from "react";
import Image from "next/image";
import { FaCheck, FaCircle } from "react-icons/fa";

const TravelGuidelineSection = () => {
  return (
    <section className="bg-[#10111A] py-12 lg:py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile view - Image first, then content */}
        <div className="md:hidden">
          {/* Image */}
          <div className="w-full relative mb-8">
            <div className="relative h-[250px]">
              <div className="absolute inset-0">
                <Image
                  src="/images/travel-guideline.png"
                  alt="Travel Guideline"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full px-4">
            <p className="text-[#D0A148] font-la-belle-aurore mb-2">
              Take A Tour
            </p>
            <h2 className="text-3xl text-[#D0A148] font-bold mb-4 font-philosopher">
              Discover Our Travel Guideline
            </h2>
            <p className="text-[#FFF] mb-6">
              An enim nullam tempor gravida donec enim congue magna at pretium
              purus pretium ligula rutrum luctus risus diam eget risus varius
              blandit sit amet non magna.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Luctus risus diam eget</p>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Donec enim congue magna</p>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Blandit sit amet non magna</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop view - Content on left, image on right */}
        <div className="hidden md:flex md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 md:pl-10 lg:pl-16">
            <p className="text-[#D0A148] font-la-belle-aurore mb-2">
              Take A Tour
            </p>
            <h2 className="text-4xl text-[#D0A148] lg:text-5xl font-bold mb-6 font-philosopher">
              Discover Our Travel Guideline
            </h2>
            <p className="text-[#FFF] mb-8">
              An enim nullam tempor gravida donec enim congue magna at pretium
              purus pretium ligula rutrum luctus risus diam eget risus varius
              blandit sit amet non magna.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Luctus risus diam eget</p>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Donec enim congue magna</p>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-[#00BB98] mt-1 mr-3 flex-shrink-0" />
                <p className="text-[#FFF]">Blandit sit amet non magna</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px]">
              <div className="absolute top-10 right-10 w-[80%] h-[80%]">
                <Image
                  src="/images/travel-guideline.png"
                  alt="Travel Guideline"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuidelineSection;