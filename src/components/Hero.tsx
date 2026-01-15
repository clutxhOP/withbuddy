import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Zap, Check, CheckCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/message/YOUR_BUDDY_NUMBER"; // Replace with actual WhatsApp link

const Hero = () => {
  const [animationPhase, setAnimationPhase] = useState<'scanning' | 'found' | 'sending' | 'delivered'>('scanning');

  useEffect(() => {
    const runAnimation = () => {
      setAnimationPhase('scanning');
      setTimeout(() => setAnimationPhase('found'), 1500);
      setTimeout(() => setAnimationPhase('sending'), 3000);
      setTimeout(() => setAnimationPhase('delivered'), 4500);
    };

    runAnimation();
    const interval = setInterval(runAnimation, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-muted/20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="container max-w-6xl relative">
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
              <span className="text-sm font-medium">Delivered via WhatsApp</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5"
            >
              Stop missing high-intent leads.{" "}
              <span className="text-primary">Buddy delivers them instantly.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-foreground/90 max-w-lg mx-auto lg:mx-0 mb-4 font-medium"
            >
              Connecting people who need a service with the businesses that provide it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Buddy listens to public online conversations and surfaces high-intent opportunities in real time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Buddy on WhatsApp
              </Button>
            </motion.div>
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
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full scale-75" />
              
              {/* WhatsApp-style card */}
              <div className="relative bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
                {/* WhatsApp header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">B</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold">Buddy</p>
                    <p className="text-primary-foreground/70 text-xs">
                      {animationPhase === 'scanning' ? 'listening...' : 'online'}
                    </p>
                  </div>
                </div>

                {/* Chat area */}
                <div className="p-4 bg-[#faf8f5] dark:bg-muted/50 min-h-[280px] space-y-3">
                  {/* Scanning state */}
                  <AnimatePresence mode="wait">
                    {animationPhase === 'scanning' && (
                      <motion.div
                        key="scanning"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center h-[200px]"
                      >
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-3">
                            <motion.span 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-primary/60 rounded-full" 
                            />
                            <motion.span 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-primary/60 rounded-full" 
                            />
                            <motion.span 
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-primary/60 rounded-full" 
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">Listening to conversations...</p>
                        </div>
                      </motion.div>
                    )}

                    {(animationPhase === 'found' || animationPhase === 'sending' || animationPhase === 'delivered') && (
                      <motion.div
                        key="message"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0, 
                          scale: animationPhase === 'delivered' ? [1, 1.02, 1] : 1
                        }}
                        transition={{ 
                          duration: 0.4,
                          scale: { duration: 0.3, delay: 0.1 }
                        }}
                        className="max-w-[85%]"
                      >
                        <div className={`bg-card rounded-2xl rounded-tl-md p-4 shadow-soft relative transition-all duration-300 ${
                          animationPhase === 'sending' ? 'opacity-70' : 'opacity-100'
                        }`}>
                          {/* Message tail */}
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-card rounded-br-2xl" 
                               style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                          
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary">🔥 New Lead</span>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">2:34 PM</span>
                              {/* Delivery status */}
                              <AnimatePresence mode="wait">
                                {animationPhase === 'sending' && (
                                  <motion.div
                                    key="sending"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <Check className="w-3 h-3 text-muted-foreground/50" />
                                  </motion.div>
                                )}
                                {animationPhase === 'delivered' && (
                                  <motion.div
                                    key="delivered"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                  >
                                    <CheckCheck className="w-3 h-3 text-primary" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
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
                    )}
                  </AnimatePresence>

                  {/* Status text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 text-xs text-muted-foreground ml-2"
                  >
                    {animationPhase === 'found' && (
                      <span className="text-primary font-medium">Lead found! Sending to WhatsApp...</span>
                    )}
                    {animationPhase === 'sending' && (
                      <span>Delivering...</span>
                    )}
                    {animationPhase === 'delivered' && (
                      <span className="text-primary font-medium">✓ Delivered to your WhatsApp</span>
                    )}
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
