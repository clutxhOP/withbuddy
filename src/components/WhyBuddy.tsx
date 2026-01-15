import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    title: "Real requests, real people",
    description: "People actively asking for help — not passive scrollers.",
  },
  {
    title: "No ads or interruptions",
    description: "Zero ad spend. Connect naturally without cold outreach.",
  },
  {
    title: "No spam or scraping",
    description: "Quality conversations, not random email lists or bot traffic.",
  },
  {
    title: "Context with every opportunity",
    description: "Know exactly what they need before you step in.",
  },
  {
    title: "Always listening",
    description: "Works 24/7. Wake up to fresh opportunities in your WhatsApp.",
  },
];

const WhyBuddy = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Buddy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Networking at scale — without the noise.
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 300 }}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-base mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuddy;
