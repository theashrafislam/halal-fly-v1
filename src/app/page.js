import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection/HeroSection";
import DiscoverWeeklySection from "./Components/Home/DiscoverWeeklySection/DiscoverWeeklySection";
import WhatToExpectSection from "./Components/Home/WhatToExpectSection/WhatToExpectSection";
import ExploreWithPeaceSection from "./Components/Home/ExploreWithPeaceSection/ExploreWithPeaceSection";
import TravelGuidelineSection from "./Components/Home/TravelGuidelineSection/TravelGuidelineSection";
import PopularDestinationsSection from "./Components/Home/PopularDestinationsSection/PopularDestinationsSection";
import ReviewSection from "./Components/Home/ReviewSection/ReviewSection";
import FeaturesSection from "./Components/Home/FeaturesSection/FeaturesSection";
import OurStorySection from "./Components/Home/OurStorySection/OurStorySection";
import BlogSection from "./Components/Home/BlogSection/BlogSection";
import SubscribeSection from "./Components/Home/SubscribeSection/SubscribeSection";
import CountrySelectorSection from "./Components/Home/CountrySelectorSection/CountrySelectorSection";

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

      {/* Country Selector Section */}
      {/* <CountrySelectorSection /> */}

      {/* Review Section  */}
      <ReviewSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Blog Section  */}
      <BlogSection />

      {/* Subscribe Section */}
      <SubscribeSection />

      
    </div>
  );
}
