import React from 'react';
import VisaIntroSection from '../Components/Visa/VisaIntroSection';
import VisaTravelPerfection from '../Components/Visa/VisaTravelPerfection/VisaTravelPerfection';

const Visa = () => {
    return (
        <div>
            <div>
                {/* Visa Intro Section */}
                <VisaIntroSection />

                {/* Visa perfection  */}
                <VisaTravelPerfection />
            </div>
        </div>
    );
};

export default Visa;