"use client";

import { fetchAllTours } from "@/utils/api";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Common/LoadingSpinner";
import DiscoveryCard from "../Home/DiscoverWeeklySection/DiscoveryCard";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const SaudiPackagesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    const cardsPerPage = 4;

    useEffect(() => {
        const loadTours = async () => {
            try {
                const toursData = await fetchAllTours(); // You can use a different API if needed
                setTours(toursData || []);
            } catch (error) {
                console.error("Error loading Saudi packages:", error);
            } finally {
                setLoading(false);
            }
        };

        loadTours();
    }, []);

    const nextSlide = () => {
        if (currentIndex < tours.length - cardsPerPage) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(tours.length - cardsPerPage);
        }
    };

    if (loading) {
        return (
            <section className="pt-14 border-t-2 border-[#D0A148]">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-4xl font-bold text-[#D0A148]">Saudi Packages We Offer</h3>
                </div>
                <LoadingSpinner text="Loading packages..." />
            </section>
        );
    }

    return (
        <section className="pt-14 border-t-2 border-[#D0A148]">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-4xl font-bold text-[#D0A148]">Saudi Packages We Offer</h3>
                <div className="hidden md:flex items-center gap-2">
                    <button onClick={prevSlide}>
                        <TfiArrowCircleLeft className='text-2xl text-white' />
                    </button>
                    <button onClick={nextSlide}>
                        <TfiArrowCircleRight className='text-2xl text-white' />
                    </button>
                </div>
            </div>

            {/* Desktop slider */}
            <div className="relative overflow-hidden hidden md:block">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 25}%)`,
                    }}
                >
                    {tours.map((tour, index) => (
                        <div key={`saudi-desktop-${index}`} className="w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                            <DiscoveryCard
                                card={{
                                    id: tour.id,
                                    title: tour.title,
                                    location: tour.location,
                                    price: tour.discountedPrice,
                                    originalPrice: tour.price,
                                    image: tour.images?.[0] || "/hero-section.jpg",
                                    days: tour.keyInfo?.duration ? parseInt(tour.keyInfo.duration) : 3,
                                    rating: tour.rating,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile list view */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
                {tours.slice(0, 4).map((tour, index) => (
                    <div key={`saudi-mobile-${index}`} className="px-3">
                        <DiscoveryCard
                            card={{
                                id: tour.id,
                                title: tour.title,
                                location: tour.location,
                                price: tour.discountedPrice,
                                originalPrice: tour.price,
                                image: tour.images?.[0] || "/hero-section.jpg",
                                days: tour.keyInfo?.duration ? parseInt(tour.keyInfo.duration) : 3,
                                rating: tour.rating,
                            }}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SaudiPackagesSection;