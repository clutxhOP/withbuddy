import { Button } from "@/components/ui/button";
import { Check, Shield, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WHATSAPP_LINK = "https://wa.me/971547399726";

const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/50 to-muted/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />
      
      <div className="container max-w-4xl relative">
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
          <div className="relative bg-card rounded-2xl border border-border/60 shadow-card overflow-hidden">
            {/* Card header */}
            <div className="bg-primary/8 px-6 py-5 border-b border-border/40">
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
                  <Check className="w-5 h-5 text-whatsapp mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Up to <strong>40 qualified opportunities</strong> per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-whatsapp mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Delivered directly to your WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-whatsapp mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Real-time high-intent conversations</span>
                </li>
              </ul>

              {/* Guarantee badge */}
              <div className="bg-primary/8 rounded-xl p-4 mb-6 border border-primary/15">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Quality Guarantee</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      If an opportunity is not relevant, we replace it for free.
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-2">
                      Relevant means it matches your niche and location.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="whatsapp" 
                size="lg" 
                className="w-full gap-2"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5" />
                Get started on WhatsApp
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Upgrade only if you're happy with the quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
