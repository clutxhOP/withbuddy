import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-16">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by WhatsApp</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5"
            >
              Stop missing high-intent leads.{" "}
              <span className="text-primary">Buddy delivers them instantly.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              No ads. No cold outreach.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-4"
            >
              <Button variant="hero" size="lg" onClick={scrollToForm}>
                Get my first leads free
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-muted-foreground"
            >
              No spam. No credit card. Cancel anytime.
            </motion.p>
          </div>

          {/* Right side - WhatsApp Lead Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Phone frame effect */}
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* WhatsApp-style card */}
              <div className="relative bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                {/* WhatsApp header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">B</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold">Buddy</p>
                    <p className="text-primary-foreground/70 text-xs">online</p>
                  </div>
                </div>

                {/* Chat area */}
                <div className="p-4 bg-[#e5ddd5] dark:bg-muted/50 min-h-[280px] space-y-3">
                  {/* Incoming message bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-[85%]"
                  >
                    <div className="bg-card rounded-2xl rounded-tl-md p-4 shadow-soft relative">
                      {/* Message tail */}
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-card rounded-br-2xl" 
                           style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary">🔥 New Lead</span>
                        <span className="text-xs text-muted-foreground">2:34 PM</span>
                      </div>
                      
                      <p className="font-semibold text-foreground mb-2">
                        Looking for a web designer for my restaurant
                      </p>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        "We desperately need a new website. Budget is around $2-3k. Any recommendations?"
                      </p>
                      
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            <Zap className="w-3 h-3" />
                            High intent
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Found online
                          </span>
                        </div>
                      </div>
                      
                      <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3">
                        View post <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className="flex items-center gap-1 text-xs text-muted-foreground ml-2"
                  >
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <span className="ml-2">Buddy is scanning for more leads...</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
