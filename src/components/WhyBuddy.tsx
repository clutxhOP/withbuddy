import { Check } from "lucide-react";

const benefits = [
  {
    title: "Real buying intent",
    description: "People actively searching for solutions, not passive scrollers.",
  },
  {
    title: "No ads or CPMs",
    description: "Zero ad spend. Pay nothing until you see results.",
  },
  {
    title: "No scraping spam",
    description: "Quality leads, not random email lists or bot traffic.",
  },
  {
    title: "Works while you sleep",
    description: "24/7 monitoring. Wake up to fresh leads in your inbox.",
  },
];

const WhyBuddy = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Buddy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Traditional lead gen is broken. Buddy fixes it.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuddy;
