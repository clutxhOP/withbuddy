import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignupForm from "@/components/SignupForm";
import Storyboard from "@/components/Storyboard";
import HowItWorks from "@/components/HowItWorks";
import WhyBuddy from "@/components/WhyBuddy";
import Pricing from "@/components/Pricing";
import FreeFirst from "@/components/FreeFirst";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SignupForm />
      <Storyboard />
      <HowItWorks />
      <WhyBuddy />
      <Pricing />
      <FreeFirst />
      <Footer />
    </main>
  );
};

export default Index;
