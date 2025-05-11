"use client";

import Image from "next/image";
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineCalendarMonth, MdReply } from "react-icons/md";
import LeaveAreply from "./LeaveAreply";

const ReviewsSection = () => {
  // Sample data for reviews
  const overallRating = 4.25;
  const totalReviews = 8;
  const shownReviews = 3;

  const categoryRatings = [
    { name: "Location", percentage: 95, rating: 4.8 },
    { name: "Amenities", percentage: 85, rating: 4.3 },
    { name: "Services", percentage: 80, rating: 4.0 },
    { name: "Price", percentage: 75, rating: 3.8 },
    { name: "Cleanliness", percentage: 90, rating: 4.5 },
    { name: "Food", percentage: 85, rating: 4.3 },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/hero-section.jpg", // Placeholder image
      date: "Jan 15, 2023",
      ratings: {
        location: 5,
        amenities: 4,
        services: 5,
        price: 4,
        cleanliness: 5,
        food: 5,
      },
      comment: "What a nice article. It keeps me reading more and more!",
    },
    {
      id: 2,
      name: "Michael Brown",
      avatar: "/hero-section.jpg", // Placeholder image
      date: "Feb 22, 2023",
      ratings: {
        location: 5,
        amenities: 4,
        services: 4,
        price: 4,
        cleanliness: 5,
        food: 5,
      },
      comment: "What a nice article. It keeps me reading more and more!",
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "/hero-section.jpg", // Placeholder image
      date: "Mar 10, 2023",
      ratings: {
        location: 4,
        amenities: 5,
        services: 4,
        price: 3,
        cleanliness: 5,
        food: 4,
      },
      comment: "What a nice article. It keeps me reading more and more!",
    },
  ];

  const ratings = [
    { category: 'Location', rating: 5 },
    { category: 'Amenities', rating: 4 },
    { category: 'Services', rating: 3 },
    { category: 'Price', rating: 2 },
    { category: 'Tours', rating: 1 },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 py-6 border-y-2 border-[#D0A148]">
        {/* Overall Rating */}
        <div className="flex items-center justify-center">
          <div className="w-full h-40 flex flex-col items-center justify-center  text-center">
            <div className="text-4xl font-bold text-[#D0A148]">
              {overallRating}
              <span className="text-lg text-white font-normal">/5</span>
            </div>
            <p className="text-[#D0A148] text-base font-philosopher">Wonderful</p>
            <p className="text-[#D0A148] text-base">8 verified reviews</p>
          </div>
        </div>

        {/* Rating Categories */}
        <div className="grid grid-cols-2 gap-4">
          {categoryRatings.map((category, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[#FFF]">{category.name}</span>
                <span className="text-sm text-[#D0A148]">
                  {category.rating}/5
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review List */}
      <div className="mb-8">
        <p className="text-[#D0A148] mb-6">
          Showing 1-{shownReviews} of {totalReviews} reviews
        </p>


        {/* review card  */}

        <div className="">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex gap-5 items-start mb-4">
              <div className="w-20 h-20">
                <Image
                  src="/hero-section.jpg"
                  width={48}
                  height={48}
                  alt="profile image"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="p-6 rounded-lg bg-[#FFF] w-full space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#D0A148] text-base font-bold">Will Smith</p>
                  <p className="flex items-center gap-1 text-[#B82525]">
                    <MdReply />
                    <span>reply</span>
                  </p>
                </div>
                <p className="flex items-center gap-2">
                  <MdOutlineCalendarMonth />
                  <span className="text-[#999]">Dec 14, 2022 at 12:00pm</span>
                </p>
                <div className="flex items-center gap-5 flex-wrap">
                  {ratings.map((item, idx) => (
                    <div key={idx} className="p-2">
                      <p className="text-[#444] text-sm">{item.category}</p>
                      <div className="flex text-yellow-400">
                        {renderStars(Math.round(item.rating))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-base text-[#444]">What a nice article. It keeps me reading more and more!</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Button */}
      <div className="text-start pb-4">
        <button className="border border-[#E91E63] text-[#E91E63] px-6 py-2 rounded-md hover:bg-[#E91E63] hover:text-white transition-colors">
          Write Review
        </button>
      </div>
      {/* Leave A Reply  */}
      <div className="border-t-2 pt-10 border-[#D0A148]">
        <LeaveAreply />
      </div>
    </section>
  );
};

export default ReviewsSection;
