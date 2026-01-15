import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Insights = () => {
  const navigate = useNavigate();
  const featuredInsight = insights[0];
  const otherInsights = insights.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header with soft background tint */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        {/* Subtle warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 md:px-8 max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Insights
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Thoughts on connection, timing, and finding the right moments.
            </p>
            <div className="mt-8 w-16 h-px bg-primary/40 mx-auto md:mx-0" />
          </motion.div>
        </div>
      </section>

      {/* Featured Insight Card */}
      <section className="pb-12 md:pb-16 -mt-4">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onClick={() => navigate(`/insights/${featuredInsight.id}`)}
            className="group cursor-pointer"
          >
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/30 overflow-hidden">
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/6 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <span className="inline-block text-xs font-medium tracking-wider uppercase text-primary mb-4">
                  Featured Insight
                </span>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight group-hover:text-foreground/80 transition-colors">
                  {featuredInsight.title}
                </h2>
                
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                  {featuredInsight.teaser}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read insight
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Other Insights */}
      {otherInsights.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 md:px-8 max-w-4xl">
            <div className="space-y-4">
              {otherInsights.map((insight, index) => (
                <motion.article
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => navigate(`/insights/${insight.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="py-8 px-6 md:px-8 rounded-xl bg-background hover:bg-muted/30 border border-transparent hover:border-border/40 transition-all duration-300">
                    <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                      {insight.teaser}
                    </p>
                    <span className="inline-block mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      Read insight →
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state spacer when no other insights */}
      {otherInsights.length === 0 && (
        <section className="pb-20 md:pb-28" />
      )}

      <Footer />
    </main>
  );
};

export default Insights;
