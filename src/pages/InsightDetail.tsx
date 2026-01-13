import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Key quotes to emphasize as pull quotes
const pullQuotes = [
  "High-intent leads are defined by what someone says, not who they are.",
  "If your tool is not listening to language, it is guessing.",
  "The value is in being early, not loud.",
  "Listening lets people tell you.",
  "The only question is whether your system is built to hear them."
];

const InsightDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-28 md:pt-36 pb-20">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl text-center">
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

  const isPullQuote = (text: string) => pullQuotes.includes(text.trim());
  
  const isListBlock = (block: string) => {
    const lines = block.split("\n").filter(l => l.trim());
    return lines.length >= 3 && lines.every(l => l.length < 40 && !l.includes("."));
  };

  const isFinalQuestion = (block: string, index: number, total: number) => {
    return index === total - 1 && block.includes("?");
  };

  const renderListBlock = (block: string) => {
    const items = block.split("\n").filter(l => l.trim());
    return (
      <div className="my-10 md:my-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-xl">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
              <span className="text-base text-foreground/80 font-light">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPullQuote = (text: string) => (
    <div className="my-12 md:my-16 py-8 md:py-10 px-6 md:px-10 bg-muted/30 border-l-2 border-primary/30 max-w-lg">
      <p className="text-lg md:text-xl lg:text-2xl text-foreground font-light leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );

  const renderContent = (block: string, index: number, total: number) => {
    // Main title - already shown in header, skip it
    if (block.startsWith("# ")) {
      return null;
    }

    // Section headings with accent
    if (block.startsWith("## ")) {
      const headingText = block.replace("## ", "");
      return (
        <div className="mt-16 md:mt-20 mb-8 md:mb-10">
          <div className="mb-5">
            <span className="block w-16 h-px bg-primary/40" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-medium text-foreground leading-tight">
            {headingText}
          </h2>
        </div>
      );
    }

    // Check for pull quotes
    if (isPullQuote(block)) {
      return renderPullQuote(block);
    }

    // Check for list blocks
    if (isListBlock(block)) {
      return renderListBlock(block);
    }

    // Final question - special treatment
    if (isFinalQuestion(block, index, total)) {
      return (
        <div className="mt-16 md:mt-20 mb-8 py-12 text-center">
          <p className="text-lg md:text-xl lg:text-2xl text-foreground font-light leading-relaxed max-w-md mx-auto">
            {block}
          </p>
        </div>
      );
    }

    // Multi-line blocks (preserve line breaks with rhythm)
    if (block.includes("\n")) {
      const lines = block.split("\n");
      const isShortLineCluster = lines.every(l => l.length < 50);
      
      return (
        <div className={`mb-8 md:mb-10 ${isShortLineCluster ? 'space-y-3' : 'space-y-2'}`}>
          {lines.map((line, i) => (
            <p 
              key={i} 
              className={`text-base md:text-lg leading-relaxed ${
                line.trim() === "" 
                  ? "h-6" 
                  : isShortLineCluster 
                    ? "text-foreground/90 font-light" 
                    : "text-muted-foreground"
              }`}
            >
              {line || "\u00A0"}
            </p>
          ))}
        </div>
      );
    }

    // Regular paragraph - check if it's a short emphatic line
    const isShortLine = block.length < 60 && !block.endsWith(".");
    const isEmphatic = block.length < 80 && (
      block.includes("not") || 
      block.includes("This is") || 
      block.includes("They")
    );

    return (
      <p className={`leading-relaxed mb-6 md:mb-8 ${
        isShortLine 
          ? "text-base md:text-lg text-foreground/90 font-light" 
          : isEmphatic
            ? "text-base md:text-lg text-foreground/85"
            : "text-base md:text-lg text-muted-foreground"
      }`}>
        {block}
      </p>
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back link */}
      <section className="pt-24 md:pt-32">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/insights")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="font-light">Back to Insights</span>
          </motion.button>
        </div>
      </section>

      {/* Editorial Header */}
      <header className="pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Soft category label */}
            <span className="text-xs text-muted-foreground/60 uppercase tracking-[0.2em] font-light">
              Insight
            </span>
            
            {/* Dominant title */}
            <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-[1.2] tracking-tight">
              {insight.title}
            </h1>
            
            {/* Subtle divider rhythm */}
            <div className="mt-10 md:mt-12 flex items-center gap-3">
              <span className="w-12 h-px bg-border" />
              <span className="w-2 h-px bg-border" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Editorial intro block */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-6 md:py-8 px-6 md:px-8 bg-muted/20 rounded-lg"
          >
            <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
              {insight.teaser}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose-custom"
          >
            {insight.content.map((block, index) => (
              <div key={index}>
                {renderContent(block, index, insight.content.length)}
              </div>
            ))}
          </motion.div>
        </div>
      </article>

      {/* Closing rhythm */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl">
          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-px bg-border" />
            <span className="w-8 h-px bg-border" />
            <span className="w-2 h-px bg-border" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InsightDetail;
