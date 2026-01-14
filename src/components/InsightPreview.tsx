import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { insights } from "@/data/insights";
import { ArrowRight } from "lucide-react";

const InsightPreview = () => {
  const featuredInsight = insights[0];

  if (!featuredInsight) return null;

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-3xl">
        <AnimatedSection className="mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-2">
            Thinking
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            From our Insights
          </h2>
        </AnimatedSection>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to={`/insights/${featuredInsight.id}`}
            className="block bg-card rounded-xl border border-border/50 p-6 sm:p-8 hover:border-primary/30 transition-colors group"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {featuredInsight.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {featuredInsight.teaser}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-medium">
              Read insight
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightPreview;
