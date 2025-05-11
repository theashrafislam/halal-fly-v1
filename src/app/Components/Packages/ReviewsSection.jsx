"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaReply } from "react-icons/fa";

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
        

        {/* <div className="space-y-8 text-[#D0A148]">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">{review.name}</h4>
                    <button className="text-[#E91E63] text-sm flex items-center">
                      <FaReply className="mr-1" /> Reply
                    </button>
                  </div>
                  <p className="text-[#D0A148] text-sm mb-2">{review.date}</p>
                </div>
              </div>

              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {Object.entries(review.ratings).map(
                  ([category, rating], idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-sm text-[#D0A148] mr-2 capitalize">
                        {category}:
                      </span>
                      <div className="flex">{renderStars(rating)}</div>
                    </div>
                  )
                )}
              </div>

              <p className="text-[#D0A148]">{review.comment}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Add Review Button */}
      <div className="text-center">
        <button className="border border-[#E91E63] text-[#E91E63] px-6 py-2 rounded-md hover:bg-[#E91E63] hover:text-white transition-colors">
          Write Review
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
