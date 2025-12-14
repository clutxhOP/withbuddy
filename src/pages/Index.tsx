import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyBuddy from "@/components/WhyBuddy";
import FreeFirst from "@/components/FreeFirst";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyBuddy />
      <FreeFirst />
      <SignupForm />
      <Footer />
    </main>
  );
};

export default Index;
