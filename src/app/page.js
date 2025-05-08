import Image from "next/image";
import HeroSection from "./Components/Home/HeroSection/HeroSection";
import DiscoverWeeklySection from "./Components/Home/DiscoverWeeklySection/DiscoverWeeklySection";

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <HeroSection />
      
      {/* Discover Weekly Section */}
      <DiscoverWeeklySection />
    </div>
  );
}
