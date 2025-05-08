import Image from 'next/image';
import React from 'react';
import { LuScanEye } from 'react-icons/lu';

const WhatToExpectSection = () => {
    return (
        <div className='py-16 bg-[#10111A]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-end justify-between">
                <div className='w-[40%]'>
                    <Image src={'/hero-section.jpg'} width={1000} height={1000} alt='image' className='h-[670px] border-2 border-[#D0A148] border-t-4 border-b-4 rounded-2xl'/>
                </div>
                <div className='w-[60%]'>
                    <h5 className='font-philosopher text-2xl font-bold text-[#D0A148] pb-4'>What To Expect From Us</h5>
                    <h3 className='font-philosopher text-4xl font-bold text-[#D0A148]'>Travel with Faith, Explore with Peace!
                        We Provide the best Umrah and Hajj Experience
                    </h3>
                    <p className='py-4 text-lg text-[#FFF]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis pariatur minim officia officia velit nostrud ipsum ullamco anim aute sint reprehenderit nulla enim.</p>
                    {/* vison and mission */}
                    <div className='flex items-center gap-[170px] justify-between'>
                        <div className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-2'>
                                <LuScanEye className='w-16 h-16 text-[#D0A148] p-1 bg-gray-600 rounded-xl border-[#D0A148] border-2 border-b-4 border-t-4' />
                                <p className='text-xl text-[#D0A148]'>Our Mission</p>
                            </div>
                            <p className='text-lg text-[#FFF]'>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                        </div>

                        <div className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-2'>
                                <LuScanEye className='w-16 h-16 text-[#D0A148] p-1 bg-gray-600 rounded-xl border-[#D0A148] border-2 border-b-4 border-t-4' />
                                <p className='text-xl text-[#D0A148]'>Our Mission</p>
                            </div>
                            <p className='text-lg text-[#FFF]'>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                        </div>
                    </div>
                
                    <p className='pt-10 pb-5 border-b-2 border-[#D0A148] text-lg text-[#FFF]'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectSection;