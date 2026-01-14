import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { X } from "lucide-react";

const principles = [
  "Never auto-message people",
  "Never spam or scrape emails",
  "Never interrupt buyers with ads",
];

const TrustPrinciples = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-3xl">
        <AnimatedSection className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            What Buddy will never do
          </h2>
        </AnimatedSection>
        
        <ul className="space-y-3">
          {principles.map((principle, index) => (
            <motion.li
              key={principle}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-3 text-lg text-muted-foreground"
            >
              <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <X className="w-3.5 h-3.5 text-destructive" />
              </span>
              {principle}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustPrinciples;
