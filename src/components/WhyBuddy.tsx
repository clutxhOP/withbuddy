import { Check } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    title: "Real buying intent",
    description: "People actively searching for solutions, not passive scrollers.",
  },
  {
    title: "No ads or CPMs",
    description: "Zero ad spend. Pay nothing until you see results.",
  },
  {
    title: "No scraping spam",
    description: "Quality leads, not random email lists or bot traffic.",
  },
  {
    title: "Context with every lead",
    description: "Know exactly what they're looking for before you respond.",
  },
  {
    title: "Works 24/7 while you sleep",
    description: "Always monitoring. Wake up to fresh leads in your inbox.",
  },
];

const WhyBuddy = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Buddy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Traditional lead gen is broken. Buddy fixes it.
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
