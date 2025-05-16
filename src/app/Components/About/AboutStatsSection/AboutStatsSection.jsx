'use client';

import { FaUsers, FaMapMarkedAlt, FaThumbsUp, FaStar } from 'react-icons/fa';

const stats = [
    {
        icon: <FaUsers className="text-white text-xl" />,
        value: '28K',
        label: 'Total Users',
    },
    {
        icon: <FaMapMarkedAlt className="text-white text-xl" />,
        value: '13K',
        label: 'Total Tours',
    },
    {
        icon: <FaThumbsUp className="text-white text-xl" />,
        value: '68K',
        label: 'Social Likes',
    },
    {
        icon: <FaStar className="text-white text-xl" />,
        value: '10K',
        label: '5 Star Ratings',
    },
];

const AboutStatsSection = () => {
    return (
        <section className="bg-[#D0A148] py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="bg-[#EA9F61] w-12 h-12 flex items-center justify-center rounded-md mb-4">
                            {stat.icon}
                        </div>
                        <h2 className="text-white text-2xl lg:text-[60px] font-hold font-philosopher">{stat.value}</h2>
                        <p className="text-white text-base mt-1 font-philosopher">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutStatsSection;