import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection/HeroSection";
import DiscoverWeeklySection from "./Components/Home/DiscoverWeeklySection/DiscoverWeeklySection";
import WhatToExpectSection from "./Components/Home/WhatToExpectSection/WhatToExpectSection";
import ExploreWithPeaceSection from "./Components/Home/ExploreWithPeaceSection/ExploreWithPeaceSection";
import TravelGuidelineSection from "./Components/Home/TravelGuidelineSection/TravelGuidelineSection";
import PopularDestinationsSection from "./Components/Home/PopularDestinationsSection/PopularDestinationsSection";
import ReviewSection from "./Components/Home/ReviewSection/ReviewSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <HeroSection />
      
      {/* Discover Weekly Section */}
      <DiscoverWeeklySection />

      {/* What to exprect section  */}
      <WhatToExpectSection />

      {/* Explore With Peace Section  */}
      <ExploreWithPeaceSection />

      {/* Travel Guideline Section */}
      <TravelGuidelineSection />

      {/* Popular Destinations Section */}
      <PopularDestinationsSection />

      {/* Review Section  */}
      <ReviewSection />
    </div>
  );
}
