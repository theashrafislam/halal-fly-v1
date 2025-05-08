import React from "react";
import { FaStar, FaTag, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
    const features = [
        {
            icon: <FaStar />,
            title: "500+ Destinations",
            description: "Etiam porta sem malesuada magna",
        },
        {
            icon: <FaTag />,
            title: "Best Price Guarantee",
            description: "Etiam porta sem malesuada magna",
        },
        {
            icon: <FaHeadset />,
            title: "Top Notch Support",
            description: "Etiam porta sem malesuada magna",
        },
    ];

    return (
        <section className="bg-[#D0A148] text-white py-10 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center md:justify-start mb-8 md:mb-0 pb-8 md:pb-0 border-b md:border-b-0 border-[#88127d] last:border-b-0 last:mb-0 last:pb-0"
                        >
                            <div className="rounded-full flex items-center justify-center mr-5">
                                <div className="text-2xl md:text-4xl">{feature.icon}</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-philosopher mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-sm opacity-80">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;