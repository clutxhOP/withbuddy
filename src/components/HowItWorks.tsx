import { Eye, Target, Send } from "lucide-react";

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

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Buddy Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Simple, automated, effective. Three steps to your next customer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-hero text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
