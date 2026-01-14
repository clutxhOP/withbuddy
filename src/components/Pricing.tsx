import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20">
      <div className="container max-w-4xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            High-intent conversations. Delivered fast. You decide how to reply.
          </p>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-md mx-auto"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-90 -z-10" />
          
          {/* Pricing card */}
          <div className="relative bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
            {/* Card header */}
            <div className="bg-primary/5 px-6 py-5 border-b border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Buddy Plan</h3>
                  <p className="text-sm text-muted-foreground mt-1">Everything you need to start</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-foreground">$150</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="px-6 py-6">
              {/* Features */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Up to <strong>40 qualified leads</strong> per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Delivered directly to your WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Real-time high-intent signals</span>
                </li>
              </ul>

              {/* Guarantee badge */}
              <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Quality Guarantee</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      If a lead is not qualified, we replace it for free.
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-2">
                      Qualified means it matches your niche and location.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={scrollToForm}
              >
                Get my first leads free
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Upgrade anytime after you see the quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
