import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const items = [
  "A real conversation happening right now",
  "Context on what the person needs",
  "Where the request came from",
  "Why it's a match for you",
];

const WhatYouReceive = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-3xl">
        <AnimatedSection className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            What Buddy brings you
          </h2>
          <p className="text-muted-foreground">
            When Buddy spots a match, here's what lands in your WhatsApp:
          </p>
        </AnimatedSection>
        
        <div className="bg-card rounded-xl border border-border/50 p-6 sm:p-8">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
