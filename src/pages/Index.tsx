import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Storyboard from "@/components/Storyboard";
import HowItWorks from "@/components/HowItWorks";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyBuddy from "@/components/WhyBuddy";
import QualificationSection from "@/components/QualificationSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Storyboard />
      <HowItWorks />
      <WhatYouReceive />
      <WhyBuddy />
      <QualificationSection />
      <Pricing />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
