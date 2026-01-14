import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
import Storyboard from "@/components/Storyboard";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyBuddy from "@/components/WhyBuddy";
import Pricing from "@/components/Pricing";
import TrustPrinciples from "@/components/TrustPrinciples";
import InsightPreview from "@/components/InsightPreview";
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
      <WhoItsFor />
      <WhatYouReceive />
      <WhyBuddy />
      <Pricing />
      <TrustPrinciples />
      <InsightPreview />
      <ClosingCTA />
      <Footer />
    </main>
  );
};

export default Index;
