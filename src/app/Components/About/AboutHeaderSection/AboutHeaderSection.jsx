import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const AboutHeaderSection = () => {
    return (
        <div className='bg-[#FFF]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base text-[#1A1A3D] py-24'>
                <p>About Us Services</p>
                <MdOutlineKeyboardArrowRight />
            </div>
        </div>
    );
};

export default AboutHeaderSection;