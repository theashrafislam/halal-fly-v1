"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";

const OurStorySection = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat min-h-[400px]"
            style={{ backgroundImage: "url('/hero-section.jpg')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-7xl mx-auto py-14 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[400px] text-[#D0A148] text-center">
                <p className="text-[#D0A148] font-la-belle-aurore mb-2 opacity-90">
                    Our Story
                </p>
                <h2 className="text-4xl text-[#D0A148] md:text-5xl font-bold mb-12 font-philosopher">
                    Discover Us
                    With your Faith
                </h2>

                {/* Play button */}
                <button
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                    aria-label="Play video"
                >
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                        <FaPlay className="text-[#730883] ml-1" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default OurStorySection;