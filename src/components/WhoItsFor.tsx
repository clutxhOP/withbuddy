import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  "Service businesses",
  "Agencies and consultants",
  "Freelancers",
  "Founders selling high-value services",
];

const WhoItsFor = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-3xl">
        <AnimatedSection className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Who Buddy connects
          </h2>
        </AnimatedSection>
        
        <ul className="space-y-3">
          {audiences.map((audience, index) => (
            <motion.li
              key={audience}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-lg text-muted-foreground pl-4 border-l-2 border-primary/30"
            >
              {audience}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhoItsFor;
