import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const exampleLeads = [
  {
    subreddit: "r/smallbusiness",
    timeAgo: "2 hours ago",
    title: "Looking for a web designer for my restaurant",
    preview: "Hey everyone, I run a family restaurant and we desperately need a new website. Our current one looks like it's from 2005. Budget is around $2-3k. Any recommendations?",
    upvotes: 12,
  },
  {
    subreddit: "r/Entrepreneur",
    timeAgo: "45 mins ago",
    title: "Need help with Facebook ads - willing to pay",
    preview: "I've been trying to run FB ads for my e-commerce store but I'm just burning money. Looking for someone who actually knows what they're doing. DM me if you can help!",
    upvotes: 8,
  },
  {
    subreddit: "r/startups",
    timeAgo: "1 hour ago",
    title: "Seeking a bookkeeper for my SaaS startup",
    preview: "We just raised our seed round and need to get our finances in order. Looking for a bookkeeper who understands startups and can help us stay organized...",
    upvotes: 15,
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

const Storyboard = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Live examples</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See what Buddy finds
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real posts. Real intent. These are the kind of leads Buddy sends you.
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
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-sm font-semibold text-primary">
                      {lead.subreddit}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {lead.timeAgo}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ⬆ {lead.upvotes}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {lead.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {lead.preview}
                  </p>
                </div>

                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Animated highlight bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl origin-top"
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            <span className="animate-pulse-soft inline-block w-2 h-2 bg-primary rounded-full mr-2" />
            Buddy is scanning Reddit right now...
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Storyboard;
