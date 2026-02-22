import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Whychooseus from "@/components/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCources/>
    <Whychooseus/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
   </div>
  );
}
