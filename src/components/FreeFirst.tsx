import { Shield, Sparkles, Heart } from "lucide-react";

const FreeFirst = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl">
        <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border/50 text-center">
          <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 max-w-xl mx-auto leading-snug">
            I don't ask you to trust me first. I'll send you real leads — you decide if they're good.
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Start free</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>No pressure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeFirst;
