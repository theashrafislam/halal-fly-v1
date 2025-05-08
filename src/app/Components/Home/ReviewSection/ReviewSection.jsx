"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Naeem Ahmed",
      role: "Web Developer",
      image: "/hero-section.jpg",
      text: "Talk less, work more. this is a sample text area for place holder",
    },
    {
      id: 2,
      name: "Robert Johnson",
      role: "Travel Enthusiast",
      image: "/hero-section.jpg",
      text: "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.",
    },
    {
      id: 3,
      name: "Sarah Parker",
      role: "Photographer",
      image: "/hero-section.jpg",
      text: "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px]"
      style={{ backgroundImage: "url('/hero-section.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <p className="text-[#D0A148] font-la-belle-aurore mb-1 text-center">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#D0A148] font-philosopher text-center">
            What Our Happy Clients Say
          </h2>

          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 -left-2 text-[#730883] opacity-20">
              <FaQuoteLeft size={50} />
            </div>

            {/* Testimonial content with fixed height */}
            <div className="relative overflow-hidden pt-4">
              <div className="min-h-[200px]">
                {" "}
                {/* Fixed height container */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-opacity duration-500 absolute w-full ${
                      index === currentSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <p className="text-gray-600 mb-8 text-center">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Author info - outside the variable height content */}
              <div className="flex flex-col items-center mt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-[#2D3E50]">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-[#730883] w-4"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    goToSlide(
                      (currentSlide - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#730883] transition-all"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-gray-500" />
                </button>
                <button
                  onClick={() =>
                    goToSlide((currentSlide + 1) % testimonials.length)
                  }
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#730883] transition-all"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;