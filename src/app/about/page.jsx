import React from 'react';
import AboutHeaderSection from '../Components/About/AboutHeaderSection/AboutHeaderSection';
import AboutTravelGuideline from '../Components/About/AboutTravelGuideline/AboutTravelGuideline';
import AboutTravelPerfection from '../Components/About/AboutTravelPerfection/AboutTravelPerfection';
import AboutStatsSection from '../Components/About/AboutStatsSection/AboutStatsSection';

const AboutPage = () => {
    return (
        <div>
            {/* about header section  */}
            <AboutHeaderSection />
            
            {/* About Travel Guideline */}
            <AboutTravelGuideline />

            {/* About Travel Perfection */}
            <AboutTravelPerfection />

            {/* About Stats Section  */}
            <AboutStatsSection />
        </div>
    );
};

export default AboutPage;