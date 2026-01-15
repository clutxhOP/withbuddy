import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Check, CheckCheck, Smile, Paperclip, Camera, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const useCurrentTime = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

const WHATSAPP_LINK = "https://wa.me/message/YOUR_BUDDY_NUMBER"; // Replace with actual WhatsApp link

const Hero = () => {
  const currentTime = useCurrentTime();
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
    <section className="min-h-[90vh] flex items-center justify-center px-4 pt-36 pb-20 relative overflow-hidden">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-muted/30" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="container max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 text-whatsapp mb-6"
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
              Connecting businesses with people actively looking for their service.
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
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Talk to Buddy on WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Right side - WhatsApp Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Modern iPhone frame - iPhone 14/15 Pro style */}
            <div className="relative mx-auto" style={{ width: '280px', aspectRatio: '393/852' }}>
              {/* Subtle shadow for depth */}
              <div className="absolute inset-0 rounded-[48px] bg-black/20 blur-2xl translate-y-4 scale-[0.92]" />
              
              {/* iPhone device frame - flat edge titanium style */}
              <div className="relative w-full h-full">
                {/* Outer titanium frame */}
                <div className="absolute inset-0 rounded-[48px] bg-gradient-to-b from-[#3a3540] via-[#2c2830] to-[#1f1c22] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]" />
                
                {/* Inner frame edge highlight */}
                <div className="absolute inset-[1px] rounded-[47px] bg-gradient-to-b from-[#4a4550]/60 via-transparent to-transparent" />
                
                {/* Side buttons - left */}
                <div className="absolute -left-[2px] top-[100px] w-[3px] h-[28px] bg-[#3a3540] rounded-r-[2px]" />
                <div className="absolute -left-[2px] top-[145px] w-[3px] h-[52px] bg-[#3a3540] rounded-r-[2px]" />
                <div className="absolute -left-[2px] top-[208px] w-[3px] h-[52px] bg-[#3a3540] rounded-r-[2px]" />
                {/* Side button - right */}
                <div className="absolute -right-[2px] top-[160px] w-[3px] h-[72px] bg-[#3a3540] rounded-l-[2px]" />
                
                {/* Screen bezel */}
                <div className="absolute inset-[4px] rounded-[44px] bg-[#ece5dd] dark:bg-[#0b141a] overflow-hidden flex flex-col">
                  {/* Status bar with time */}
                  <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 pt-3">
                    <span className="text-[11px] font-semibold text-black dark:text-white">{currentTime}</span>
                    <div className="w-[90px]" /> {/* Space for Dynamic Island */}
                    <div className="flex items-center gap-1">
                      <div className="flex gap-[2px]">
                        <div className="w-[3px] h-[10px] bg-black dark:bg-white rounded-sm" />
                        <div className="w-[3px] h-[10px] bg-black dark:bg-white rounded-sm" />
                        <div className="w-[3px] h-[10px] bg-black dark:bg-white rounded-sm" />
                        <div className="w-[3px] h-[10px] bg-black/30 dark:bg-white/30 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Dynamic Island - slimmer */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[85px] h-[24px] bg-black rounded-full flex items-center justify-center">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] ring-1 ring-[#2a2a2a] ml-6" />
                  </div>
                  
                  {/* WhatsApp header */}
                  <div className="bg-whatsapp px-4 pt-12 pb-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-whatsapp-foreground/20 flex items-center justify-center">
                      <span className="text-whatsapp-foreground font-bold text-lg">B</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-whatsapp-foreground font-semibold">Buddy</p>
                      <p className="text-whatsapp-foreground/70 text-xs">
                        {animationPhase === 'scanning' ? 'listening...' : 'online'}
                      </p>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="p-4 flex-1 space-y-3">
                    {/* Scanning state */}
                    <AnimatePresence mode="wait">
                      {animationPhase === 'scanning' && (
                        <motion.div
                          key="scanning"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center h-[240px]"
                        >
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-3">
                              <motion.span 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                className="w-2 h-2 bg-whatsapp rounded-full" 
                              />
                              <motion.span 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                className="w-2 h-2 bg-whatsapp rounded-full" 
                              />
                              <motion.span 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                className="w-2 h-2 bg-whatsapp rounded-full" 
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
                          className="max-w-[90%]"
                        >
                          <div className={`bg-white dark:bg-[#202c33] rounded-lg rounded-tl-sm p-3 shadow-sm relative transition-all duration-300 ${
                            animationPhase === 'sending' ? 'opacity-70' : 'opacity-100'
                          }`}>
                            {/* Message tail */}
                            <div className="absolute -left-2 top-0 w-3 h-3 bg-white dark:bg-[#202c33]" 
                                 style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                            
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-whatsapp">⚡ High intent</span>
                              <div className="flex items-center gap-1">
                                <span className="text-[10px] text-muted-foreground">now</span>
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
                                      <CheckCheck className="w-3 h-3 text-whatsapp" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            
                            <p className="font-medium text-foreground text-sm mb-1.5">
                              Looking for a web designer for my restaurant
                            </p>
                            
                            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                              We desperately need a new website. Our current one looks like it's fro...
                            </p>
                            
                            <a href="#" className="inline-flex items-center gap-1 text-[11px] text-whatsapp hover:underline font-medium">
                              View post <ExternalLink className="w-2.5 h-2.5" />
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
                        <span className="text-whatsapp font-medium">Lead found! Sending to WhatsApp...</span>
                      )}
                      {animationPhase === 'sending' && (
                        <span>Delivering...</span>
                      )}
                      {animationPhase === 'delivered' && (
                        <span className="text-whatsapp font-medium">✓ Delivered to your WhatsApp</span>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* WhatsApp input bar */}
                  <div className="px-2 py-2 bg-[#f0f0f0] dark:bg-[#1f2c34] flex items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-white dark:bg-[#2a3942] rounded-full px-3 py-2">
                      <Smile className="w-5 h-5 text-[#8696a0]" />
                      <span className="flex-1 text-sm text-[#8696a0]">Message</span>
                      <Paperclip className="w-5 h-5 text-[#8696a0]" />
                      <Camera className="w-5 h-5 text-[#8696a0]" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Bottom safe area with home indicator background */}
                  <div className="h-6 bg-[#f0f0f0] dark:bg-[#1f2c34]" />
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
