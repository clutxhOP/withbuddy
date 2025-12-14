import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up opacity-0">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Powered by WhatsApp</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-up opacity-0 stagger-1">
          Real customers.{" "}
          <span className="text-primary">Real intent.</span>{" "}
          <span className="text-muted-foreground">No ads.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-2">
          Buddy finds people actively asking for your service on Reddit and sends them straight to WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-up opacity-0 stagger-3">
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get leads for free
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground animate-fade-up opacity-0 stagger-4">
          No ads. No cold outreach. Try it free.
        </p>
      </div>
    </section>
  );
};

export default Hero;
