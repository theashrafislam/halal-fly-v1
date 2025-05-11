import React from 'react';

const LeaveAreply = () => {
    return (
        <div>
            <div>
                <div>
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
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default LeaveAreply;