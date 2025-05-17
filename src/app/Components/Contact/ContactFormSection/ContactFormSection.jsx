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
            <div>
                {/* name and email  */}
                <div className='flex items-center justify-center gap-6'>
                    <input type="text" name="name" id="name" placeholder='Name *' className='p-3 rounded-lg bg-white text-base w-full'/>
                    <input type="email" name="email" id="email" placeholder='Email *' className='p-3 rounded-lg bg-white text-base w-full'/>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;