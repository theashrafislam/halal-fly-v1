import Image from 'next/image';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { LuScanEye } from 'react-icons/lu';

const WhatToExpectSection = () => {
    return (
        <div className='pb-16 bg-[#10111A]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-start lg:items-end justify-between">
                {/* Left Image Section */}
                <div className='w-full lg:w-[40%] relative'>
                    <Image
                        src={'/hero-section.jpg'}
                        width={1000}
                        height={1000}
                        alt='image'
                        className='w-full h-[400px] sm:h-[500px] lg:h-[670px] object-cover border-2 border-[#D0A148] border-t-4 border-b-4 rounded-2xl'
                    />
                    <div className='bg-[#D0A148] absolute p-5 sm:p-6 lg:p-8 rounded-tr-2xl rounded-bl-2xl bottom-0 left-0'>
                        <FaPlayCircle className="text-white text-2xl sm:text-3xl" />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className='w-full lg:w-[60%]'>
                    <h5 className='font-philosopher text-xl sm:text-2xl font-bold text-[#D0A148] pb-4'>
                        What To Expect From Us
                    </h5>
                    <h3 className='font-philosopher text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D0A148]'>
                        Travel with Faith, Explore with Peace!<br />
                        We Provide the best Umrah and Hajj Experience
                    </h3>
                    <p className='py-4 text-base sm:text-lg text-[#FFF]'>
                        Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis pariatur minim officia officia velit nostrud ipsum ullamco anim aute sint reprehenderit nulla enim.
                    </p>

                    {/* Mission and Vision Section */}
                    <div className='flex flex-col md:flex-row gap-10 justify-between'>
                        <div className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-2'>
                                <LuScanEye className='w-12 h-12 sm:w-16 sm:h-16 text-[#D0A148] p-1 bg-gray-600 rounded-xl border-[#D0A148] border-2 border-b-4 border-t-4' />
                                <p className='text-lg sm:text-xl text-[#D0A148]'>Our Mission</p>
                            </div>
                            <p className='text-base sm:text-lg text-[#FFF]'>
                                Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.
                            </p>
                        </div>

                        <div className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-2'>
                                <LuScanEye className='w-12 h-12 sm:w-16 sm:h-16 text-[#D0A148] p-1 bg-gray-600 rounded-xl border-[#D0A148] border-2 border-b-4 border-t-4' />
                                <p className='text-lg sm:text-xl text-[#D0A148]'>Our Vision</p>
                            </div>
                            <p className='text-base sm:text-lg text-[#FFF]'>
                                Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.
                            </p>
                        </div>
                    </div>

                    <p className='pt-10 pb-5 border-b-2 border-[#D0A148] text-base sm:text-lg text-[#FFF]'>
                        Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectSection;