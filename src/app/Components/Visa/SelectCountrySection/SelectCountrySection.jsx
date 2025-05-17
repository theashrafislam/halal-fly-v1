import Image from 'next/image';
import React from 'react';

const SelectCountrySection = () => {
    return (
        <div className='bg-[#10111A] py-[120px]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* text section  */}
                <div className='space-y-6 lg:pl-16'>
                    <h5 className='text-2xl text-[#D0A148] font-philosopher'>Countries You can Visit</h5>
                    <h3 className='text-3xl text-[42px] font-philosopher text-[#D0A148]'>Select The Country of your Choice</h3>
                    <p className='text-base text-white'>Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami </p>
                </div>

                {/* card section  */}
                <div className='pt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[75px] items-center justify-between'>
                    {[1, 2, 3, 4].map((card, i) => (
                        <div key={i} className='flex flex-col gap-4 border-2 border-b-4 rounded-xl border-[#D0A148] items-center justify-center pt-[43px] px-5 pb-[35px]'>
                            <div className="w-[80px] h-[80px] border rounded-full overflow-hidden">
                                <Image src={'/avator.jpg'} alt='profile' width={100} height={100} className="object-cover w-full h-full" />
                            </div>
                            <h3 className='text-3xl lg:text-[42px] text-white font-bold'>Germany</h3>
                            <p className='text-base text-center text-white'>acon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip </p>
                            <button className='border rounded-full p-8 py-2 text-white bg-[#DBDBDB4A]'>Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectCountrySection;