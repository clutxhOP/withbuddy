import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import faheemPhoto from "@/assets/faheem-founder.jpg";
import aboutGraphic from "@/assets/about-graphic.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Section 1: Quiet Hero - Editorial Entry */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            {/* Subtle eyebrow */}
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mb-4">
              Philosophy
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              About Buddy
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground/80 font-light tracking-wide max-w-xl mx-auto">
              Why Buddy exists and how it thinks about lead generation.
            </p>
          </motion.div>
          
          {/* Subtle gradient divider */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 md:mt-12 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
          />
        </div>
      </section>

      {/* Section 2: The Problem - Refined Hierarchy */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="pl-6 md:pl-8 border-l border-border/25">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed mb-6">
                Buddy was built to solve a simple problem.
              </p>
              
              {/* Key line emphasized */}
              <p className="text-xl md:text-2xl font-medium text-foreground leading-snug mb-4">
                The best leads already exist online,
              </p>
              
              <div className="space-y-1 text-base md:text-lg text-muted-foreground/70 leading-relaxed">
                <p>but they are buried inside conversations</p>
                <p>most businesses never see.</p>
              </div>
              
              <div className="mt-8 space-y-1.5 text-base md:text-lg text-muted-foreground/80">
                <p>People ask for recommendations.</p>
                <p>They describe problems.</p>
                <p>They look for help in public.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Belief - Emotional Anchor */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Subtle background wash */}
            <div className="absolute inset-0 -mx-4 md:-mx-8 py-8 md:py-12 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20 rounded-2xl" />
            
            <div className="relative text-center px-8 md:px-16 py-6 md:py-8">
              <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight">
                Buddy listens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: What Buddy Does - Three Blocks */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid md:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            <div className="md:col-span-7 space-y-6">
              {/* Block 1: What Buddy is */}
              <div>
                <p className="text-base md:text-lg text-foreground leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Buddy is an AI super networker that scans public online discussions in real time and identifies high-intent opportunities for businesses.
                </p>
              </div>
              
              {/* Block 2: What Buddy avoids */}
              <div>
                <p className="text-base md:text-lg text-muted-foreground/75 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  Instead of chasing cold leads or interrupting people with ads, Buddy surfaces conversations where someone already wants something.
                </p>
              </div>
              
              {/* Block 3: What Buddy enables */}
              <div className="pt-1">
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-2" style={{ lineHeight: '1.6' }}>
                  Buddy does not sell, message, or spam.
                </p>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  It simply points you to the right moment so you can step in naturally.
                </p>
              </div>
            </div>
            
            {/* Listening graphic - vertically centered */}
            <div className="md:col-span-5 flex items-center justify-center">
              <img 
                src={aboutGraphic} 
                alt="Network connections representing Buddy's listening capabilities"
                className="w-full max-w-xs md:max-w-sm opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: About the Founder - Editorial Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 md:mb-10">
              About the Founder
            </h2>
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Photo - Slightly larger */}
              <div className="md:col-span-5">
                <div className="relative">
                  <img
                    src={faheemPhoto}
                    alt="Faheem Mashoor, Founder of Buddy"
                    className="w-full aspect-[4/5] object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
              
              {/* Content - Story with breathing room */}
              <div className="md:col-span-7 space-y-5">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Buddy was founded by Faheem Mashoor, a builder focused on practical AI systems that solve real business problems.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/75 leading-relaxed">
                  Faheem has worked on end-to-end AI products across multiple industries, including integrations, automation, workflow design, and deployment. His work sits at the intersection of engineering, product, and business operations.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/75 leading-relaxed">
                  Buddy was created from firsthand experience watching businesses struggle with lead generation while valuable opportunities were happening in plain sight online.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground/75 leading-relaxed">
                  Instead of building another dashboard or outreach tool, Faheem built Buddy to do one thing exceptionally well.
                </p>
                
                {/* Pull-quote: Listen first */}
                <div className="pt-4 pb-2">
                  <p className="text-xl md:text-2xl font-light italic text-foreground/90 border-l-2 border-primary/40 pl-5">
                    Listen first.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground/60 pl-5">
                    Built from firsthand experience, not theory.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Closing Mantra - Essay Ending */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            {/* Visual zone separator */}
            <div className="max-w-xs mx-auto mb-10 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light tracking-tight">Less noise.</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light tracking-tight">More relevance.</p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-light tracking-tight">Better conversations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
