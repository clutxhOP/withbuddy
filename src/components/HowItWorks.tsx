import { Eye, Target, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Eye,
    title: "Monitor",
    description: "Buddy watches Reddit in real time, scanning thousands of posts and comments.",
  },
  {
    icon: Target,
    title: "Match",
    description: "Finds people actively asking for exactly what you sell. Real buying intent.",
  },
  {
    icon: Send,
    title: "Send",
    description: "Delivers the lead instantly to your WhatsApp. You take it from there.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Buddy Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simple, automated, effective. Three steps to your next customer.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:border-primary/20 hover:shadow-card transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-hero text-primary-foreground flex items-center justify-center text-sm font-bold"
              >
                {index + 1}
              </motion.div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
