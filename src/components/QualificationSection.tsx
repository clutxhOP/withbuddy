import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { X } from "lucide-react";

const audiences = [
  "Service businesses",
  "Agencies and consultants",
  "Freelancers",
  "Founders selling high-value services",
];

const principles = [
  "Never auto-message people",
  "Never scrape emails or lists",
  "Never interrupt buyers with ads",
];

const QualificationSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container max-w-5xl relative">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Is Buddy right for you?
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - Who it's for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Who Buddy works best for
            </h3>
            <ul className="space-y-4">
              {audiences.map((audience, index) => (
                <motion.li
                  key={audience}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-lg text-muted-foreground pl-4 border-l-2 border-primary/60"
                >
                  {audience}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - What we never do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-muted/40 rounded-2xl p-6 border border-border/30">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                What Buddy will never do
              </h3>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.li
                    key={principle}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3 text-lg text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </span>
                    {principle}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
