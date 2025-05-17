import Image from 'next/image';
import React from 'react';

const VisaServicesSection = () => {
    return (
        <div className='px-4 bg-[#10111A] py-[120px] flex flex-col md:flex-row gap-5 items-start'>
            {/* text  */}
            <div className='space-y-4 md:w-[50%]'>
                <p className='text-2xl text-[#D0A148]'>Types Of Visa We Provide</p>
                <h4 className='text-[#D0A148] text-3xl lg:text-[42px] font-bold'>We Provide All Types of Visa</h4>
                <p className='text-base text-white'>Bacon ipsum dolor amet porchetta hamburger swine, ball tip bresaola short ribs fatback strip steak ground round rump. Alcatra shankle ham hock frankfurter, bacon pork loin cow salami </p>
                <button className='btn-primary'>More Details</button>
            </div>

            {/* cards  */}
            <div className='w-full'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => (
                        <div key={i} className="relative">
                            <div className="relative h-[250px] border-b-4 rounded-lg border-2 border-[#D0A148] overflow-hidden">
                                <Image
                                    src="/hero-section.jpg"
                                    alt="hello"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Positioned Text */}
                            <p className="text-xl font-semibold text-white absolute top-2 left-1/2  z-10">
                                Turkey E-Visa
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisaServicesSection;