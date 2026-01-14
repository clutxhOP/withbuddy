import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
import Storyboard from "@/components/Storyboard";
import HowItWorks from "@/components/HowItWorks";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyBuddy from "@/components/WhyBuddy";
import QualificationSection from "@/components/QualificationSection";
import Pricing from "@/components/Pricing";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SignupForm />
      <Storyboard />
      <HowItWorks />
      <WhatYouReceive />
      <WhyBuddy />
      <QualificationSection />
      <Pricing />
      <ClosingCTA />
      <Footer />
    </main>
  );
};

export default Index;
