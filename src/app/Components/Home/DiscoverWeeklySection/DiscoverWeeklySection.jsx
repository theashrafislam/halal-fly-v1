"use client";

import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Common/LoadingSpinner";
import DiscoveryCard from "./DiscoveryCard";
import { fetchAllTours } from "@/utils/api";

const DiscoverWeeklySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTours = async () => {
      try {
        const toursData = await fetchAllTours();
        setTours(toursData || []);
      } catch (error) {
        console.error("Error loading tours:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTours();
  }, []);

  const cardsPerPage = 4;

  const nextSlide = () => {
    if (currentIndex < tours.length - cardsPerPage) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(tours.length - cardsPerPage); // Loop to the end
    }
  };

  if (loading) {
    return (
      <section className="bg-[#10111A] text-[#D0A148] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div className="pb-6 md:pb-[56px]">
              <h4 className="text-4xl md:text-5xl text-[#D0A148] font-bold mb-3 font-philosopher">
                Discover Weekly
              </h4>
              <p className="text-base">
                An enim nullam tempor sapien gravida donec enim ipsum porta
              </p>
            </div>
          </div>
          <LoadingSpinner text="Loading tours..." />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#10111A] text-[#D0A148] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div className="pb-6 md:pb-[56px]">
            <h4 className="text-4xl md:text-5xl font-bold mb-3 font-philosopher">
              Discover Weekly
            </h4>
            <p className="text-base">
              An enim nullam tempor sapien gravida donec enim ipsum porta
            </p>
          </div>

          {/* slider buttons - only visible on md and up */}
          <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0 self-end">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21.4974L17.7719 18L21 14.5026L19.6134 13L15 18L19.6134 23L21 21.4974Z"
                  fill="#999999"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 21.4974L18.2281 18L15 14.5026L16.3866 13L21 18L16.3866 23L15 21.4974Z"
                  fill="#999999"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop cards with slider - hidden on mobile */}
        <div className="relative overflow-hidden mb-12 hidden md:block">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
            }}
          >
            {tours.map((tour, index) => (
              <div
                key={`desktop-${index}`}
                className="w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <DiscoveryCard
                  card={{
                    id: tour.id,
                    title: tour.title,
                    location: tour.location,
                    price: tour.discountedPrice,
                    originalPrice: tour.price,
                    image:
                      tour.images && tour.images.length > 0
                        ? tour.images[0]
                        : "/hero-section.jpg",
                    days: tour.keyInfo?.duration
                      ? parseInt(tour.keyInfo.duration)
                      : 3,
                    rating: tour.rating,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="pt-16 flex items-center justify-center">
            <button className="btn-primary border-b-2 border-white">Get Started</button>
          </div>
        </div>

        {/* Mobile cards - one per row, no slider */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:hidden">
          {tours.slice(0, 4).map((tour, index) => (
            <div key={`mobile-${index}`} className="px-3">
              <DiscoveryCard
                card={{
                  id: tour.id,
                  title: tour.title,
                  location: tour.location,
                  price: tour.discountedPrice,
                  originalPrice: tour.price,
                  image:
                    tour.images && tour.images.length > 0
                      ? tour.images[0]
                      : "/hero-section.jpg",
                  days: tour.keyInfo?.duration
                    ? parseInt(tour.keyInfo.duration)
                    : 3,
                  rating: tour.rating,
                }}
              />
            </div>
          ))}
        </div>

        {/* Additional bottom margin */}
        <div className="mb-8"></div>
      </div>
    </section>
  );
};

export default DiscoverWeeklySection;