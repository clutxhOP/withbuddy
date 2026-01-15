import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ExternalLink, Check, CheckCheck, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const exampleLeads = [
  {
    timeAgo: "2 min ago",
    source: "Reddit",
    title: "Looking for a web designer for my restaurant",
    preview: "We desperately need a new website. Our current one looks like it's from 2005. Budget is around $2-3k.",
    url: "https://www.reddit.com/r/smallbusiness/",
  },
  {
    timeAgo: "45 min ago",
    source: "Facebook Group",
    title: "Need help with Facebook ads - willing to pay",
    preview: "I've been trying to run FB ads for my e-commerce store but I'm just burning money. Looking for someone who knows what they're doing.",
    url: "https://www.facebook.com/groups/",
  },
  {
    timeAgo: "1 hour ago",
    source: "LinkedIn",
    title: "Seeking a bookkeeper for my SaaS startup",
    preview: "We just raised our seed round and need to get our finances in order. Looking for a bookkeeper who understands startups.",
    url: "https://www.linkedin.com/feed/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

const LeadRow = ({ lead, index }: { lead: typeof exampleLeads[0]; index: number }) => {
  const [messagePhase, setMessagePhase] = useState<'idle' | 'sending' | 'delivered'>('idle');

  useEffect(() => {
    const startDelay = 1000 + index * 800;
    
    const runAnimation = () => {
      setMessagePhase('idle');
      setTimeout(() => setMessagePhase('sending'), 300);
      setTimeout(() => setMessagePhase('delivered'), 900);
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
      variants={rowVariants}
      className="grid md:grid-cols-2 gap-4 md:gap-6"
    >
      {/* Left Column - Original Post (Neutral) */}
      <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-5 border border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">{lead.source}</span>
          <span className="text-xs text-muted-foreground/60">• {lead.timeAgo}</span>
        </div>
        <h3 className="font-semibold text-foreground mb-2">{lead.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {lead.preview}
        </p>
      </div>

      {/* Right Column - WhatsApp Delivery (Green styled) */}
      <motion.div 
        className="relative"
        animate={{
          scale: messagePhase === 'delivered' ? [1, 1.01, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-whatsapp/10 dark:bg-whatsapp/15 rounded-xl p-5 border border-whatsapp/30 relative overflow-hidden">
          {/* WhatsApp header bar */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-whatsapp flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-whatsapp-foreground" />
              </div>
              <span className="text-xs font-semibold text-whatsapp">WhatsApp Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-muted-foreground">now</span>
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
          
          {/* High intent badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp bg-whatsapp/20 px-2.5 py-1 rounded-full mb-3">
            ⚡ High intent
          </span>
          
          <h3 className="font-semibold text-foreground mb-2">{lead.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {lead.preview}
          </p>
          
          {/* View post link */}
          <a href={lead.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-whatsapp hover:underline font-medium">
            View original post <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Storyboard = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 text-whatsapp mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Delivered to WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See the connections Buddy makes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real people asking for help — brought straight to your WhatsApp.
          </p>
        </AnimatedSection>

        {/* Two-column layout: Left = original post, Right = WhatsApp delivery */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4">
            <p className="text-sm font-medium text-muted-foreground text-center md:text-left">
              Where Buddy spots the opportunity
            </p>
            <p className="text-sm font-medium text-whatsapp text-center md:text-left">
              What arrives in your WhatsApp
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {exampleLeads.map((lead, index) => (
            <LeadRow key={index} lead={lead} index={index} />
          ))}
        </motion.div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse-soft" />
            Buddy is listening for new opportunities right now...
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Storyboard;
