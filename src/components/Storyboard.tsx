import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ExternalLink, Check, CheckCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const exampleLeads = [
  {
    timeAgo: "2 min ago",
    title: "Looking for a web designer for my restaurant",
    preview: "We desperately need a new website. Our current one looks like it's from 2005. Budget is around $2-3k.",
  },
  {
    timeAgo: "45 min ago",
    title: "Need help with Facebook ads - willing to pay",
    preview: "I've been trying to run FB ads for my e-commerce store but I'm just burning money. Looking for someone who knows what they're doing.",
  },
  {
    timeAgo: "1 hour ago",
    title: "Seeking a bookkeeper for my SaaS startup",
    preview: "We just raised our seed round and need to get our finances in order. Looking for a bookkeeper who understands startups.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

const WhatsAppMessage = ({ lead, index }: { lead: typeof exampleLeads[0]; index: number }) => {
  const [messagePhase, setMessagePhase] = useState<'idle' | 'sending' | 'delivered'>('idle');

  useEffect(() => {
    const startDelay = 1000 + index * 600;
    
    const runAnimation = () => {
      setMessagePhase('idle');
      setTimeout(() => setMessagePhase('sending'), 300);
      setTimeout(() => setMessagePhase('delivered'), 900);
    };

    const initialTimeout = setTimeout(runAnimation, startDelay);
    const interval = setInterval(runAnimation, 5000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <motion.div
      variants={cardVariants}
      className="relative"
    >
      {/* WhatsApp-style message bubble */}
      <motion.div 
        className="relative max-w-full"
        animate={{
          scale: messagePhase === 'delivered' ? [1, 1.01, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Message bubble with WhatsApp styling */}
        <div className="bg-white dark:bg-[#202c33] rounded-xl rounded-tl-sm p-4 shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-whatsapp/20 relative">
          {/* Message tail */}
          <div 
            className="absolute -left-2 top-0 w-3 h-3 bg-white dark:bg-[#202c33]" 
            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
          />
          
          {/* Header with badge and time */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp bg-whatsapp/10 px-2 py-1 rounded-full">
              ⚡ High intent
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-muted-foreground">{lead.timeAgo}</span>
              <AnimatePresence mode="wait">
                {messagePhase === 'sending' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Check className="w-3.5 h-3.5 text-muted-foreground/50" />
                  </motion.div>
                )}
                {messagePhase === 'delivered' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    <CheckCheck className="w-3.5 h-3.5 text-whatsapp" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Message content */}
          <h3 className="font-semibold text-foreground mb-1.5">{lead.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {lead.preview}
          </p>
          
          {/* View post link */}
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-whatsapp hover:underline font-medium">
            View original post <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Storyboard = () => {
  return (
    <section className="py-20 px-4 overflow-hidden bg-[#ece5dd]/30 dark:bg-muted/20">
      <div className="container max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 text-whatsapp mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Delivered to WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See what Buddy finds
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real people actively asking for help — delivered straight to your WhatsApp.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {exampleLeads.map((lead, index) => (
            <WhatsAppMessage key={index} lead={lead} index={index} />
          ))}
        </motion.div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse-soft" />
            Buddy is listening for new leads right now...
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Storyboard;
