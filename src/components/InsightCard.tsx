import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Insight } from "@/data/insights";

interface InsightCardProps {
  insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => navigate(`/insights/${insight.id}`)}
      className="group cursor-pointer"
    >
      <div className="py-8 border-b border-border/40 transition-colors group-hover:border-border">
        <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
          {insight.title}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
          {insight.teaser}
        </p>
        <span className="inline-block mt-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          Read insight →
        </span>
      </div>
    </motion.article>
  );
};

export default InsightCard;
