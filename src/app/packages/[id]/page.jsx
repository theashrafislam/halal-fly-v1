"use client";

import React, { useEffect, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import Link from "next/link";
import Head from "next/head";
import PackagesDetailsHeroSection from "@/app/Components/Packages/PackagesDetailsHeroSection";
import DestinationFeatures from "@/app/Components/Packages/DestinationFeatures";
import IncludeExclude from "@/app/Components/Packages/IncludeExclude";
import LoadingSpinner from "@/app/Components/Common/LoadingSpinner";
import ReviewsSection from "@/app/Components/Packages/ReviewsSection";
import TourPlan from "@/app/Components/Packages/TourPlan";
import TourMap from "@/app/Components/Packages/TourMap";
import { fetchTourById } from "@/utils/api";

const PackageDetails = ({ params }) => {
    const { id } = params;
    console.log(id);
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

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner text="Loading tour details..." />
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl font-semibold text-red-500">
                    Tour not found
                </div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>{tour.title} | Halal Fly Fig</title>
                <meta name="description" content={tour.overview.substring(0, 160)} />
            </Head>
            {/* route section  */}
            <div className="py-3 bg-[#000000] md:py-4 lg:py-6 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <h5 className="flex text-[#D0A148] items-center flex-wrap gap-2 md:gap-3 text-sm md:text-base">
                        <Link href="/">
                            Home
                        </Link>
                        <LiaAngleRightSolid className="text-white"/>
                        <Link
                            href="/tour-lists"
                        >
                            Tour
                        </Link>
                        <LiaAngleRightSolid className="text-white"/>
                        <span>{tour.title}</span>
                    </h5>
                </div>
            </div>

            {/* hero section  */}
            <PackagesDetailsHeroSection />

            <div className="bg-[#171717]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
                    <div>
                        {/* Makkah Highlights */}
                        <DestinationFeatures type="makkah" tour={tour} />

                        {/* Madinah Highlights */}
                        <DestinationFeatures type="madinah" tour={tour} />

                        {/* Included/Excluded */}
                        <IncludeExclude tour={tour} />

                        {/* Tour Plan */}
                        <TourPlan />

                        {/* Tour Map */}
                        <TourMap />

                        {/* Reviews */}
                        <ReviewsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;