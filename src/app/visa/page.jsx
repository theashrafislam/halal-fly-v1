import React from 'react';
import VisaIntroSection from '../Components/Visa/VisaIntroSection';
import VisaTravelPerfection from '../Components/Visa/VisaTravelPerfection/VisaTravelPerfection';
import AboutPopularToursSection from '../Components/About/AboutPopularToursSection/AboutPopularToursSection';
import AboutHappyClientsSay from '../Components/About/AboutHappyClientsSay/AboutHappyClientsSay';
import SelectCountrySection from '../Components/Visa/SelectCountrySection/SelectCountrySection';
import VisaServicesSection from '../Components/Visa/VisaServicesSection/VisaServicesSection';

const Visa = () => {
    return (
        <div>
            <div>
                {/* Visa Intro Section */}
                <VisaIntroSection />

                {/* Visa perfection  */}
                <VisaTravelPerfection />

                {/* Our Popular Visa Type */}
                <AboutPopularToursSection />

                {/* Visa Services Section */}
                <VisaServicesSection />

                {/* Select The Country of your Choice */}
                <SelectCountrySection />

                {/* What our happy clients say */}
                <AboutHappyClientsSay />
            </div>
        </div>
    );
};

export default Visa;