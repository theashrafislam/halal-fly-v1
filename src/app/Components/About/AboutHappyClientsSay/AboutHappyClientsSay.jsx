import Image from 'next/image';
import React from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { TiStarFullOutline } from 'react-icons/ti';

const AboutHappyClientsSay = () => {
    return (
        <div className='bg-[#1A1A3D]'>
            <div className='py-10 lg:py-[130px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* compoent header section  */}
                <div className='flex flex-col items-center justify-center gap-4 pb-14 text-[#D0A148]'>
                    <h5 className='text-2xl font-philosopher'>Testimonials</h5>
                    <h5 className='text-3xl lg:text-[42px] font-bold font-philosopher text-center'>What our happy clients say</h5>
                </div>

                {/* review card section  */}
                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    {/* card  */}
                    {[1, 2].map((card, i) => (
                        <div className='bg-[#FFFFFF] rounded-lg p-5' key={i}>
                            <p className='pb-[30px] lg:pb-[43px] text-base text-[#111B19]'>OMG! I cannot believe that I have got a brand new landing page after getting appmax. It was super easy to edit and publish.I have got a brand new landing page.</p>
                            <div className='flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <div className="w-[80px] h-[80px] border rounded-full overflow-hidden">
                                        <Image src={'/avator.jpg'} alt='profile' width={100} height={100} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <p className='text-[#000B33] font-bold text-base'>Ashraful Islam</p>
                                        <p className='text-sm text-[#444]'>Frontend Developer</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    {[1, 2, 3, 4].map((item, i) => (
                                        <TiStarFullOutline key={i} className='text-[#FFC83E] text-2xl' />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutHappyClientsSay;