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
    title: "Works while you sleep",
    description: "24/7 monitoring. Wake up to fresh leads in your inbox.",
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
        
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuddy;
