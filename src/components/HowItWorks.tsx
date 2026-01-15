import { Radio, Filter, Send } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Radio,
    title: "Listen",
    description: "Buddy scans public conversations across the internet in real time.",
    benefit: "Never miss a potential customer again.",
  },
  {
    icon: Filter,
    title: "Qualify",
    description: "Filters for genuine buying intent, not just keywords.",
    benefit: "Only get leads that are ready to buy.",
  },
  {
    icon: Send,
    title: "Deliver",
    description: "Sends the lead instantly to WhatsApp with context.",
    benefit: "Respond while the intent is still hot.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Buddy works</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From conversation to conversion in three simple steps.
          </p>
        </AnimatedSection>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <step.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
              <p className="text-sm text-primary font-medium">{step.benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
