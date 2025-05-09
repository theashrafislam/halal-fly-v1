"use client";

import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { TiStarFullOutline } from "react-icons/ti";
import { BsCameraVideo, BsImages } from "react-icons/bs";
import HeroImages from "./HeroImages";
import FlightIcon from "./FlightIcon";
import { useParams } from "next/navigation";
import { fetchTourById } from "@/utils/api";
import LoadingSpinner from "../Common/LoadingSpinner";
import OverViewSection from "./OverViewSection";
import KeyInfo from "./KeyInto";

const PackagesDetailsHeroSection = () => {
  const params = useParams();
  const { id } = params;
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTourData = async () => {
      try {
        const tourData = await fetchTourById(id);
        setTour(tourData);
      } catch (error) {
        console.error("Error loading tour data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTourData();
  }, [id]);
  // tabs state
  const [bookingFourm, setBookingFourm] = useState(true);
  const [enquiryForum, setEnquiryForum] = useState(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <LoadingSpinner text="Loading tour details..." />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-2xl font-semibold text-red-500">
          Tour not found
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-[#1A1A3D]">
        {/* content  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 flex flex-col md:flex-row md:items-start md:justify-between pb-8 md:pb-12">
          <div className="mb-6 md:mb-0 text-[#D0A148]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <p className="flex items-center gap-1 text-base">
                <CiLocationOn className="text-[#00BB98] font-bold" />
                <span>{tour.location}</span>
              </p>
              <p className="flex items-center gap-1 text-base">
                <LuEye className="text-[#00BB98] font-bold" />
                <span>{tour.views}</span>
              </p>
              <p className="flex items-center gap-2 text-[#FFC83E] text-2xl">
                {[...Array(Math.floor(tour.rating))].map((_, i) => (
                  <TiStarFullOutline key={i} />
                ))}
              </p>
            </div>
          </div>

          {/* btn  */}
          <div className="flex items-center gap-2 pt-4 md:pt-0">
            <button className="text-sm flex items-center gap-2 px-3 py-1.5 bg-white border rounded-md border-gray-200 hover:bg-gray-50">
              <BsCameraVideo className="text-[#D0A148] text-base" />
              <span className="text-[#D0A148]">View video</span>
            </button>
            <button className="text-sm flex items-center gap-2 px-3 py-1.5 bg-white border rounded-md border-gray-200 hover:bg-gray-50">
              <BsImages className="text-[#D0A148] text-base" />
              <span className="text-[#D0A148]">10 photos</span>
            </button>
          </div>
        </div>

        {/* Images  */}
        <HeroImages tour={tour} />

        {/* key info and booking  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between pb-16 relative">
          {/* key info */}
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <KeyInfo tour={tour} />
          </div>

          {/* Booking  */}
          <div className="w-full lg:w-1/3 bg-white p-5 md:p-7 rounded-xl lg:absolute lg:top-0 lg:right-0 shadow-xl">
            <p className="flex items-center gap-2 pb-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_104_6317)">
                  <path
                    d="M12.0701 22.4142C10.6601 22.4142 9.24009 21.8742 8.17009 20.8042L3.64009 16.2742C2.54009 15.1742 1.96009 13.6542 2.03009 12.1042L2.27009 7.1042C2.38009 4.7142 4.27009 2.8242 6.67009 2.7042L11.6701 2.4642C13.2201 2.4042 14.7401 2.9742 15.8401 4.0742L20.3701 8.6042C22.5201 10.7542 22.5201 14.2642 20.3701 16.4142L15.9801 20.8042C14.9001 21.8742 13.4901 22.4142 12.0701 22.4142ZM4.70009 15.2042L9.23009 19.7342C9.99009 20.4942 11.0001 20.9142 12.0701 20.9142C13.1401 20.9142 14.1501 20.4942 14.9101 19.7342L19.3001 15.3442C20.0601 14.5842 20.4801 13.5742 20.4801 12.5042C20.4801 11.4342 20.0601 10.4242 19.3001 9.6642L14.7701 5.1342C13.9701 4.3342 12.8601 3.9042 11.7401 3.9642L6.74009 4.2042C5.11009 4.2742 3.84009 5.5442 3.76009 7.1642L3.52009 12.1642C3.47009 13.2942 3.90009 14.4042 4.70009 15.2042Z"
                    fill="#B82525"
                  />
                  <path
                    d="M9.5 13.1842C7.71 13.1842 6.25 11.7242 6.25 9.9342C6.25 8.1442 7.71 6.6842 9.5 6.6842C11.29 6.6842 12.75 8.1442 12.75 9.9342C12.75 11.7242 11.29 13.1842 9.5 13.1842ZM9.5 8.1842C8.54 8.1842 7.75 8.9742 7.75 9.9342C7.75 10.8942 8.54 11.6842 9.5 11.6842C10.46 11.6842 11.25 10.8942 11.25 9.9342C11.25 8.9742 10.46 8.1842 9.5 8.1842Z"
                    fill="#B82525"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_6317">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.434204)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-base font-bold text-[#444]">From</span>
            </p>

            <p className="flex items-center gap-3">
              <span className="text-[32px] font-bold text-[#00BB98]">
                ${tour.discountedPrice.toFixed(2)}
              </span>
              {tour.price !== tour.discountedPrice && (
                <span className="text-[#999] line-through">
                  ${tour.price.toFixed(2)}
                </span>
              )}
            </p>

            {/* svg  */}
            <FlightIcon />

            {/* tabs  */}
            <div className="flex items-center justify-between border-b-2 border-[#E6E6E6]">
              <button
                onClick={() => {
                  setEnquiryForum(false);
                  setBookingFourm(true);
                }}
                className={`py-3 sm:py-4 px-3 sm:px-7 text-sm sm:text-base cursor-pointer ${
                  bookingFourm
                    ? "border-b-2 border-[#00BB98] text-[#00BB98] font-semibold"
                    : ""
                }`}
              >
                Booking Forum
              </button>
              <button
                onClick={() => {
                  setBookingFourm(false);
                  setEnquiryForum(true);
                }}
                className={`py-3 sm:py-4 px-3 sm:px-7 text-sm sm:text-base cursor-pointer ${
                  enquiryForum
                    ? "border-b-2 border-[#00BB98] text-[#00BB98] font-semibold"
                    : ""
                }`}
              >
                Enquiry Forum
              </button>
            </div>

            {/* conditional */}
            {bookingFourm && (
              <div className="pt-6 sm:pt-8 flex flex-col gap-4 sm:gap-6">
                {/* Date check in */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="date-in" className="text-sm sm:text-base">
                    Date check in
                  </label>
                  <input
                    type="date"
                    name=""
                    id="date-in"
                    className="w-full py-3 px-4 border-[#E6E6E6] border hover:bg-[#F5F5F5] rounded-lg font-medium text-sm sm:text-base"
                  />
                </div>

                {/* Date check out */}
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="date-out" className="text-sm sm:text-base">
                    Date check out
                  </label>
                  <input
                    type="date"
                    name=""
                    id="date-out"
                    className="w-full py-3 px-4 border-[#E6E6E6] border hover:bg-[#F5F5F5] rounded-lg font-medium text-sm sm:text-base"
                  />
                </div>

                {/* Total Night: */}
                <div className="flex flex-col items-start gap-4 sm:gap-6">
                  <p className="text-sm sm:text-base font-semibold">
                    Total Night:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] sm:w-[60px] py-3 sm:py-4 rounded-lg text-center text-xl sm:text-2xl font-bold bg-[#F4F4F4]">
                      1
                    </div>
                    <p className="text-sm sm:text-base text-[#444]">
                      Number ticket × ${tour.discountedPrice.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base font-semibold">
                    Total = ${tour.discountedPrice.toFixed(2)}
                  </p>
                </div>

                {/* btn  */}
                <button className="btn-primary !py-4 sm:!py-5 text-sm sm:text-base">
                  Book Now
                </button>
              </div>
            )}
            {enquiryForum && (
              <div>
                <h1 className="text-2xl font-bold text-center pt-8">
                  Coming Soon..
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Itinerary Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="w-full lg:w-2/3 lg:pr-10">
          {/* Overview */}
          <OverViewSection tour={tour} />
        </div>
      </div>
    </div>
  );
};

export default PackagesDetailsHeroSection;