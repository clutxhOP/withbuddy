import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const InsightDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-28 md:pt-36 pb-20">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
            <h1 className="text-2xl font-medium text-foreground mb-4">
              Insight not found
            </h1>
            <button
              onClick={() => navigate("/insights")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Insights
            </button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const renderContent = (block: string) => {
    // Handle headings
    if (block.startsWith("# ")) {
      return (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-8 leading-tight">
          {block.replace("# ", "")}
        </h1>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 className="text-xl md:text-2xl font-medium text-foreground mt-12 mb-6">
          {block.replace("## ", "")}
        </h2>
      );
    }

    // Handle multi-line blocks (preserve line breaks)
    if (block.includes("\n")) {
      const lines = block.split("\n");
      return (
        <div className="mb-6 space-y-1">
          {lines.map((line, i) => (
            <p 
              key={i} 
              className={`text-base md:text-lg leading-relaxed ${
                line.trim() === "" ? "h-4" : "text-muted-foreground"
              }`}
            >
              {line || "\u00A0"}
            </p>
          ))}
        </div>
      );
    }

    // Regular paragraph
    return (
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        {block}
      </p>
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back link */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/insights")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </motion.button>
        </div>
      </section>

      {/* Category label */}
      <section className="pb-4">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-muted-foreground uppercase tracking-wide"
          >
            Insight
          </motion.span>
        </div>
      </section>

      {/* Content */}
      <article className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {insight.content.map((block, index) => (
              <div key={index}>{renderContent(block)}</div>
            ))}
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default InsightDetail;
