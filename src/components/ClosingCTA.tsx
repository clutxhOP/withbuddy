import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ClosingCTA = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-t from-primary/[0.03] via-transparent to-transparent">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            See it for yourself
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
            I'll send you a few real leads for free. No commitment. If they're useful, you'll know what to do next.
          </p>
          
          <Button variant="hero" size="lg" onClick={scrollToForm}>
            Get my first leads free
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam. No credit card. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
