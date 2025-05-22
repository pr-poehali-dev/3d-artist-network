import React from "react";
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import PopularModels from "@/components/landing/PopularModels";
import CommunityNews from "@/components/landing/CommunityNews";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";
import { popularModels, communityNews } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <HeroSection />
      <PopularModels models={popularModels} />
      <CommunityNews news={communityNews} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
