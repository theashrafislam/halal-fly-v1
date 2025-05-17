import React from 'react';

const ContactFormSection = () => {
    return (
        <div>
            {/* header section  */}
            <div className='flex flex-col gap-3 pb-[35px]'>
                <h6 className='text-2xl font-bold text-[#D0A148] font-philosopher'>Leave A Reply</h6>
                <p className='text[#444] text-sm'>Your email address will not be published. Required fields are marked *</p>
            </div>

            {/* contact input feilds  */}
            <div className='flex flex-col gap-6'>
                {/* name and email  */}
                <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                    <input type="text" name="name" id="name" placeholder='Name *' className='p-3 rounded-lg bg-white text-base w-full' />
                    <input type="email" name="email" id="email" placeholder='Email *' className='p-3 rounded-lg bg-white text-base w-full' />
                </div>
                {/* subject  */}
                <input type="text" name="subject" id="subject" placeholder='Subject' className='p-3 rounded-lg bg-white text-base w-full' />

                {/* comment  */}
                <textarea rows={5} name="comment" id="comment" placeholder='Comment' className='p-3 rounded-lg bg-white text-base w-full'></textarea>

                {/* checkbox  */}
                <div className='flex items-center gap-1'>
                    <input type="checkbox" name="checkBox" id="checkBox" />
                    <p className='text-sm text-[#444]'>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>

                {/* btn  */}
                <div className='w-full'>
                    <button className="bg-[#D0A148] rounded-lg py-[18px] px-8 text-white font-bold w-full sm:w-auto">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;