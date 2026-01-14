import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ExternalLink, Clock, ArrowRight, Zap, Check, CheckCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const exampleLeads = [
  {
    source: "Public post",
    timeAgo: "2 hours ago",
    title: "Looking for a web designer for my restaurant",
    preview: "We desperately need a new website. Our current one looks like it's from 2005. Budget is around $2-3k.",
    intent: "High intent",
  },
  {
    source: "Public discussion",
    timeAgo: "45 mins ago",
    title: "Need help with Facebook ads - willing to pay",
    preview: "I've been trying to run FB ads for my e-commerce store but I'm just burning money. Looking for someone who knows what they're doing.",
    intent: "High intent",
  },
  {
    source: "Online forum",
    timeAgo: "1 hour ago",
    title: "Seeking a bookkeeper for my SaaS startup",
    preview: "We just raised our seed round and need to get our finances in order. Looking for a bookkeeper who understands startups.",
    intent: "High intent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

const LeadCard = ({ lead, index }: { lead: typeof exampleLeads[0]; index: number }) => {
  const [messagePhase, setMessagePhase] = useState<'idle' | 'sending' | 'delivered'>('idle');

  useEffect(() => {
    const startDelay = 1500 + index * 800;
    
    const runAnimation = () => {
      setMessagePhase('idle');
      setTimeout(() => setMessagePhase('sending'), 500);
      setTimeout(() => setMessagePhase('delivered'), 1200);
    };

    const initialTimeout = setTimeout(runAnimation, startDelay);
    const interval = setInterval(runAnimation, 6000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
        {/* Original post card */}
        <div className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 hover:border-primary/20 transition-colors">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="text-muted-foreground">{lead.source}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{lead.timeAgo}</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{lead.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {lead.preview}
          </p>
        </div>

        {/* Arrow connector */}
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-primary" />
          </motion.div>
        </div>

        {/* WhatsApp message preview with animation */}
        <motion.div 
          className="bg-card rounded-2xl overflow-hidden shadow-soft border border-primary/20"
          animate={{
            scale: messagePhase === 'delivered' ? [1, 1.02, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* WhatsApp header mini */}
          <div className="bg-primary/10 px-4 py-2 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Buddy</span>
          </div>
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={messagePhase}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ 
                  opacity: messagePhase === 'sending' ? 0.7 : 1, 
                  y: 0, 
                  scale: 1 
                }}
                transition={{ 
                  duration: 0.3,
                  type: messagePhase === 'delivered' ? "spring" : "tween",
                  stiffness: 400,
                  damping: 25
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    <Zap className="w-3 h-3" />
                    {lead.intent}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-muted-foreground">now</span>
                    {messagePhase === 'sending' && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Check className="w-3 h-3 text-muted-foreground/50" />
                      </motion.div>
                    )}
                    {messagePhase === 'delivered' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <CheckCheck className="w-3 h-3 text-primary" />
                      </motion.div>
                    )}
                  </div>
                </div>
                <p className="font-medium text-sm mb-1">{lead.title}</p>
                <p className="text-xs text-muted-foreground line-clamp-1">{lead.preview}</p>
                <a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2">
                  View post <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Storyboard = () => {
  return (
    <section className="py-16 px-4 overflow-hidden bg-secondary/30">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Live examples</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See what Buddy finds
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            These are real people actively asking for help online.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-5"
        >
          {exampleLeads.map((lead, index) => (
            <LeadCard key={index} lead={lead} index={index} />
          ))}
        </motion.div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            Buddy is scanning for leads right now...
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Storyboard;
