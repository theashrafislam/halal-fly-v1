"use client";

import { setSearchTerm } from "@/features/search/searchSlice";
import Image from "next/image";
import React, { useState } from "react";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import { FaSearchPlus, FaUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";
import { useDispatch } from "react-redux";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Hotel");
  const [search, setSearch] = useState('');
  const [destinationInput, setDestinationInput] = useState('');

  const dispatch = useDispatch();
  const handleSearch = () => {
    setSearch(destinationInput);
    dispatch(setSearchTerm(search));
  };

  // console.log(searchTerm);

  const tabs = [
    { name: "Hotel", icon: "/icons/hotel.svg" },
    { name: "Umrah", icon: "/icons/umrah.svg" },
    { name: "Flight", icon: "/icons/flight.svg" },
    { name: "Cruise", icon: "/icons/cruise.svg" },
    { name: "Family Trip", icon: "/icons/people.svg" },
  ];

  return (
    <div className="relative min-h-[100dvh] lg:min-h-[700px] w-full text-[#F5F5F5] bg-cover bg-no-repeat bg-center bg-[url('/images/hero-bg.png')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text + Content */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full z-10 relative">
        <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-la-belle-aurore text-2xl sm:text-3xl mb-2 sm:mb-4 italic">
            HALALFLY
          </h2>
          <h1 className="font-philosopher text-4xl sm:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Discover the <br className="hidden sm:block" /> most engaging{" "}
            <br className="hidden sm:block" /> places
          </h1>
          <p className="font-philosopher text-lg sm:text-xl font-medium mb-8 sm:mb-10">
            Less planning — 5,000 trips are ready for you.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition text-sm sm:text-base
                                    ${activeTab === tab.name
                    ? "bg-[var(--button-color)] text-white font-semibold"
                    : "bg-[var(--button-color)]/80 text-white hover:bg-[var(--button-color)] hover:text-white"
                  }`}
              >
                <Image src={tab.icon} alt={tab.name} width={20} height={20} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition bg-white text-[#2D3E50] rounded-xl p-4 sm:p-6">
          {activeTab === "Hotel" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
              {/* Destination */}
              <div className="flex flex-col gap-1">
                <label className="text-base font-bold flex items-center gap-1">
                  <IoLocationSharp className="text-2xl text-[#FD4C5C]" />
                  <span>Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border p-3 rounded-md w-full"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                />
              </div>

              {/* Room Type */}
              <div className="flex flex-col gap-1">
                <label className="text-base font-bold flex items-center gap-1">
                  <MdMeetingRoom className="text-2xl text-[#FD4C5C]" />
                  <span>Room Type</span>
                </label>
                <select className="border p-3 rounded-md w-full">
                  <option>All Activity</option>
                </select>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="checkIn"
                  className="text-base font-bold flex items-center gap-1"
                >
                  <CiCalendarDate className="text-2xl text-[#FD4C5C]" />
                  <span>Check In</span>
                </label>
                <input
                  type="date"
                  id="checkIn"
                  className="border p-3 rounded-md w-full"
                />
              </div>

              {/* Guest */}
              <div className="flex flex-col gap-1">
                <label className="text-base font-bold flex items-center gap-1">
                  <FaUser className="text-2xl text-[#FD4C5C]" />
                  <span>Guest</span>
                </label>
                <p className="p-3 border rounded-md">0</p>
              </div>

              {/* Search Button */}
              <div className="flex justify-end w-full">
                <button className="btn-primary flex items-center justify-center gap-1 px-6 py-3 rounded-md w-full md:w-auto"
                  onClick={handleSearch}
                >
                  <CiSearch className="text-2xl text-[#FD4C5C]" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="h-[80px] flex items-center justify-center text-center text-[#2D3E50] font-semibold text-lg">
              🚧 {activeTab} feature is coming soon...
            </div>
          )}
        </div>
      </div>
      {/* Advanced Search Button */}
      <div className="absolute bottom-20 right-1/5 transform -translate-x-1/2 z-20 hidden lg:block">
        <button className="flex items-center gap-2 text-white">
          <FaSearchPlus className="text-xl" />
          <span className="text-base font-medium">Advanced Search</span>
          <IoIosArrowUp className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;