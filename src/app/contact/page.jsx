import React from 'react';
import ContactHeaderSection from '../Components/Contact/ContactHeaderSection/ContactHeaderSection';
import GetInTouchSection from '../Components/Contact/GetInTouchSection/GetInTouchSection';

const ContactUs = () => {
    return (
        <div>
            <div>
                {/* contact header section  */}
                <ContactHeaderSection />

                {/* black image section hehe  */}
                <div className='w-full h-[300px] bg-[#000000]'>

                </div>

                {/* main contect of contact section  */}
                <div className='max-w-6xl mx-auto'>
                    <GetInTouchSection />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;