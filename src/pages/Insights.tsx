import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/data/insights";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Insights
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              Thoughts on high-intent leads, listening, and modern lead generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights List */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <div className="border-t border-border/40">
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Insights;
