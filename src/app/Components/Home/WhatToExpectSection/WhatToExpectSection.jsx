import Image from 'next/image';
import React from 'react';
import { LuScanEye } from 'react-icons/lu';

const WhatToExpectSection = () => {
    return (
        <div className=' '>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10 items-center justify-between">
                <div className='w-[40%]'>
                    <Image src={'/hero-section.jpg'} width={1000} height={1000} alt='image' />
                </div>
                <div className='w-[60%]'>
                    <h5 className='font-philosopher text-2xl font-bold text-[#D0A148] pb-4'>What To Expect From Us</h5>
                    <h3 className='font-philosopher text-4xl font-bold text-[#D0A148]'>Travel with Faith, Explore with Peace!
                        We Provide the best Umrah and Hajj Experience
                    </h3>
                    <p className='py-4 text-lg'>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis pariatur minim officia officia velit nostrud ipsum ullamco anim aute sint reprehenderit nulla enim.</p>
                    {/* vison and mission */}
                    <div>
                        <div>
                            <LuScanEye className='text-5xl text-[#D0A148]'/>
                            <p>Our Mission</p>
                        </div>
                        <div>
                            <LuScanEye className='text-5xl text-[#D0A148]'/>
                            <p>Our Mission</p>
                        </div>
                    </div>
                    <div>
                        <p>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                        <p>Eiusmod enim ea minim occaecat in occaecat occaecat. Adipisicing velit aute duis.</p>
                    </div>
                    <p>Laboris anim duis sunt aliquip tempor qui. Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectSection;