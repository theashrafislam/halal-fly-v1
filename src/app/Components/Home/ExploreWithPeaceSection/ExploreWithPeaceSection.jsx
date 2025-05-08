import Image from 'next/image';
import React from 'react';

const ExploreWithPeaceSection = () => {
    return (
        <div className='bg-[#10111A]'>
            <div className='max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8'>
                {/* text header  */}
                <div className='text-[#D0A148] font-philosopher text-center md:text-left'>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl'>
                        TRAVEL WITH FAITH,<br className='hidden md:block' />
                        EXPLORE WITH PEACE
                    </h3>
                    <p className='pt-6 text-xl sm:text-2xl md:text-3xl'>Discover your ideal experience with us</p>
                </div>

                {/* cards section  */}
                <div className='flex flex-col lg:flex-row gap-6 pt-12'>
                    <div className='w-full lg:w-[40%] relative'>
                        <Image
                            src={'/hero-section.jpg'}
                            width={800}
                            height={500}
                            alt='image'
                            className='rounded-xl border-2 border-[#D0A148] border-b-4 h-[300px] md:h-[400px] object-cover w-full'
                        />
                        <div className='bg-[#171717A6] p-3 rounded-bl-xl rounded-br-xl absolute bottom-1 left-0 w-full'>
                            <p className='text-lg text-[#FFF] pb-2'>SPECIAL OFFERS</p>
                            <p className='text-base text-[#FFF] pb-3'>Journey with Faith, Explore with Confidence</p>
                            <button className='btn-primary'>Holiday Deals</button>
                        </div>
                    </div>

                    <div className='w-full lg:w-[60%] flex flex-col md:flex-row gap-6'>
                        {[1, 2].map((item, i) => (
                            <div className='relative w-full' key={i}>
                                <Image
                                    src={'/hero-section.jpg'}
                                    width={800}
                                    height={500}
                                    alt='image'
                                    className='rounded-xl border-2 border-[#D0A148] border-b-4 h-[300px] md:h-[400px] object-cover w-full'
                                />
                                <div className='bg-[#171717A6] p-3 rounded-bl-xl rounded-br-xl absolute bottom-1 left-0 w-full'>
                                    <p className='text-lg text-[#FFF] pb-2'>SPECIAL OFFERS</p>
                                    <p className='text-base text-[#FFF] pb-3'>Journey with Faith, Explore with</p>
                                    <button className='btn-primary'>Holiday Deals</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreWithPeaceSection;