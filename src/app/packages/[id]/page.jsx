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
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageById } from "@/features/packages/packageSlice";
import { useParams } from "next/navigation";

const PackageDetails = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    // const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    // Use package from the slice
    const { package: singlePackage, loading, error } = useSelector(
        (state) => state.packages
    );

    // Fetch the package by ID when the component mounts
    useEffect(() => {
        if (id) {
            dispatch(fetchPackageById(id));
        }
    }, [id, dispatch]);

    // console.log(singlePackage);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner text="Loading tour details..." />
            </div>
        );
    }

    // if (!singlePackage) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <div className="text-2xl font-semibold text-red-500">
    //                 Tour not found
    //             </div>
    //         </div>
    //     );
    // }


    return (
        <div>
            <Head>
                {/* <title>{tour.title} | Halal Fly Fig</title> */}
                {/* <meta name="description" content={tour.overview.substring(0, 160)} /> */}
            </Head>
            {/* route section  */}
            <div className="py-3 bg-[#000000] md:py-4 lg:py-6 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <h5 className="flex text-[#D0A148] items-center flex-wrap gap-2 md:gap-3 text-sm md:text-base">
                        <Link href="/">
                            Home
                        </Link>
                        <LiaAngleRightSolid className="text-white" />
                        <Link
                            href="/tour-lists"
                        >
                            Tour
                        </Link>
                        <LiaAngleRightSolid className="text-white" />
                        <span>{singlePackage?.nameEn}</span>
                    </h5>
                </div>
            </div>

            {/* hero section  */}
            <PackagesDetailsHeroSection tour={singlePackage} loading={loading}/>

            <div className="bg-[#171717]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
                    <div>
                        {/* Makkah Highlights */}
                        <DestinationFeatures type="makkah" tour={singlePackage} />

                        {/* Madinah Highlights */}
                        <DestinationFeatures type="madinah" tour={singlePackage} />

                        

                        {/* Included/Excluded */}
                        <IncludeExclude tour={singlePackage} />

                        {/* Tour Plan */}
                        <TourPlan itinerary={singlePackage?.itinerary}/>

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