import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const LeaveAreply = () => {
    const ratings = [
        { category: 'Location', rating: 5 },
        { category: 'Amenities', rating: 4 },
        { category: 'Services', rating: 3 },
        { category: 'Price', rating: 2 },
        { category: 'Tours', rating: 1 },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
          } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
          }
        }
        return stars;
      };

    return (
        <div>
            <div className='flex items-center gap-6'>
                <div className='w-2/3'>
                    <p className='text-3xl font-bold font-philosopher text-[#D0A148]'>Leave A Reply</p>
                    <p className='text-white text-sm pt-3'>Your email address will not be published. Required fields are marked *</p>
                    <div className='pt-7 flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <input type="text" name="" id="" placeholder='Name' className='p-3 bg-white rounded-lg w-full' />
                            <input type="email" name="" id="" placeholder='Email' className='p-3 bg-white rounded-lg w-full' />
                        </div>
                        <div>
                            <textarea name="" id="" placeholder='Comment' className='p-3 bg-white rounded-lg w-full'></textarea>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-sm text-white pt-6 pb-7'>Save my name, email, and website in this browser for the next time I comment.</p>
                    </div>
                    <button className='btn-primary'>Post Comment</button>
                </div>
                {/* Rating */}
                <div className='w-1/3'>
                    <p className='text-white text-lg pb-3'>Rating</p>
                    <div className='flex flex-col gap-2'>
                        {ratings.map((item, index) => (
                            <div key={index} className='flex items-center justify-between'>
                                <p className='text-white text-base'>{item?.category}</p>
                                <div className="flex text-yellow-400 ml-2">
                                    {renderStars(Math.round(item?.rating))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveAreply;