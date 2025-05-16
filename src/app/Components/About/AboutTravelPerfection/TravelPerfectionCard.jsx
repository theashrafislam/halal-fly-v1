import React from 'react';

const TravelPerfectionCard = ({ data }) => {
    return (
        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data?.map((item, i) => (
                <div
                    key={i}
                    className='w-full flex flex-col items-center gap-5 py-14 p-5 bg-[#1A1A3D] rounded-lg border-2 border-[#D0A148]'
                >
                    <div>{item?.icon}</div>
                    <h3 className='text-[#FFFFFF] text-xl font-bold'>{item?.name}</h3>
                    <p className='text-[#FFFFFF] text-base text-center'>{item?.des}</p>
                </div>
            ))}
        </div>
    );
};

export default TravelPerfectionCard;