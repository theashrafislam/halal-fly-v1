import React from 'react';
import FlightIcon from '../../Packages/FlightIcon';
import { BsAirplaneEngines } from 'react-icons/bs';

const AboutTravelGuideline = () => {
    return (
        <div
            className="relative bg-[#000000] bg-cover bg-center bg-no-repeat h-[600px] text-white"
            style={{ backgroundImage: "url('/images/travel-bg.png')" }}
        >
            <div className="space-y-4 text-start max-w-5xl  px-4 sm:px-6 lg:px-8 mx-auto pt-20">
                <h6 className='text-[#D0A148] capitalize font-philosopher text-xl'>welcome to our store.</h6>
                <h2 className="font-bold mb-4 text-[#D0A148] font-philosopher text-3xl md:text-4xl">Discover Our Travel <br /> Guideline</h2>
                <p className="text-lg text-[#FFF]">
                    Explore essential travel tips and guidelines <br /> for your next adventure. Make your journey <br /> safe and unforgettable.
                </p>
                <p className="text-lg text-[#FFF]">
                    Explore essential travel tips and guidelines for <br /> your next adventure. Make your journey <br /> safe and unforgettable.
                </p>
                <button className='capitalize btn-primary mt-7'>contact us</button>
            </div>
            {/* absolute  */}
            <div className=' absolute p-4 h-32 rounded-lg bg-[#D0A148] right-10 bottom-10 lg:right-3/12 lg:top-20 hidden md:flex flex-col items-center justify-center text-[#FFF]'>
                <BsAirplaneEngines className="w-16 pb-3 h-16"/>
                <h5 className='text-6xl font-bold font-philosopher'>10M</h5>
                <p className='text-base font-bold font-philosopher'>Different Parts</p>
            </div>
        </div>
    );
};

export default AboutTravelGuideline;