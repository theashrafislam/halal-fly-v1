import Image from 'next/image';
import React from 'react';

const CountrySelectorSection = () => {
    return (
        <div className='relative'>
            <div className='flex items-center justify-between bg-[#000000] h-[1150px]'>
                {/* country you visit */}
                <div
                    className="bg-[url('/images/shadow.png')] bg-no-repeat h-[500px] bg-[#D0A148D9] w-[50%] py-2"
                >
                    {/* text content */}
                    <div className='text-[#FFF] px-6 pl-20 pt-16'>
                        <p className='text-lg pb-6 font-philosopher'>Countries You can Visit</p>
                        <h3 className='text-3xl md:text-4xl font-bold pb-6 font-philosopher'>Select The Country of your Choice</h3>
                        <p className='text-lg pb-5'>Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami </p>
                        <button className='text-sm bg-[#00000040] px-10 py-3 font-semibold rounded-xl'>Discover More</button>
                    </div>
                </div>

                {/* we provide best  */}
                <div className='w-[50%] h-[500px] bg-[#000000] text-[#FFF] px-10 pr-20 pt-16'>
                    <p className='text-lg pb-6 font-philosopher'>We Provide The best Visa Service</p>
                    <h3 className='text-3xl md:text-4xl font-bold pb-6 font-philosopher'>From Visa to Visitation We Handle it All</h3>
                    <p className='text-lg pb-5'>Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami </p>
                </div>
            </div>
            {/* cards (positioned overlapping the bottom part) */}
            <div className='absolute right-20 bottom-30 flex items-center gap-5 z-10'>
                {[1, 2, 3].map((_, i) => (
                    <div key={i}>
                        <Image
                            src={'/hero-section.jpg'}
                            width={400}
                            height={400}
                            className='h-[400px] w-[300px] rounded-2xl border border-t-4 border-b-4 border-[#D0A148]'
                            alt={`card-${i}`}
                        />
                    </div>
                ))}
            </div>
        
        </div>
    );
};

export default CountrySelectorSection;