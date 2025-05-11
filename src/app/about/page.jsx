import React from 'react';
import AboutHeaderSection from '../Components/About/AboutHeaderSection/AboutHeaderSection';
import AboutTravelGuideline from '../Components/About/AboutTravelGuideline/AboutTravelGuideline';

const AboutPage = () => {
    return (
        <div>
            {/* about header section  */}
            <AboutHeaderSection />
            
            {/* About Travel Guideline */}
            <AboutTravelGuideline />
        </div>
    );
};

export default AboutPage;