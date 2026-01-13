import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import faheemPhoto from "@/assets/faheem-founder.jpg";
import aboutGraphic from "@/assets/about-graphic.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Section 1: Quiet Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight">
              About Buddy
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-light tracking-wide">
              Why Buddy exists and how it thinks about lead generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem (Visual Rhythm) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="pl-8 md:pl-12 border-l border-border/40">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                Buddy was built to solve a simple problem.
              </p>
              
              <div className="space-y-2 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>The best leads already exist online,</p>
                <p>but they are buried inside conversations</p>
                <p>most businesses never see.</p>
              </div>
              
              <div className="mt-10 space-y-3 text-lg md:text-xl text-foreground">
                <p>People ask for recommendations.</p>
                <p>They describe problems.</p>
                <p>They look for help in public.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Belief (Anchor Moment) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Buddy listens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: What Buddy Does */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Buddy is an AI super networker that scans public online discussions in real time and identifies high-intent opportunities for businesses.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Instead of chasing cold leads or interrupting people with ads, Buddy surfaces conversations where someone already wants something.
              </p>
              
              <div className="pt-2 space-y-3">
                <p className="text-lg text-foreground">
                  Buddy does not sell, message, or spam.
                </p>
                <p className="text-lg text-foreground">
                  It simply points you to the right moment<br className="hidden md:block" />
                  so you can step in naturally.
                </p>
              </div>
            </div>
            
            {/* Listening graphic */}
            <div className="flex items-center justify-center">
              <img 
                src={aboutGraphic} 
                alt="Network connections representing Buddy's listening capabilities"
                className="w-full max-w-sm md:max-w-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: About the Founder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 md:mb-16">
              About the Founder
            </h2>
            
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
              {/* Photo - Editorial Style */}
              <div className="md:col-span-5">
                <div className="relative">
                  <img
                    src={faheemPhoto}
                    alt="Faheem Mashoor, Founder of Buddy"
                    className="w-full aspect-[4/5] object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Content - Story Format */}
              <div className="md:col-span-7 space-y-6 md:pt-2">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Buddy was founded by Faheem Mashoor, a builder focused on practical AI systems that solve real business problems.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Faheem has worked on end-to-end AI products across multiple industries, including integrations, automation, workflow design, and deployment. His work sits at the intersection of engineering, product, and business operations.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Buddy was created from firsthand experience watching businesses struggle with lead generation while valuable opportunities were happening in plain sight online.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Instead of building another dashboard or outreach tool, Faheem built Buddy to do one thing exceptionally well.
                </p>
                
                <p className="text-xl md:text-2xl font-medium text-foreground pt-2">
                  Listen first.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Closing Statement */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center space-y-4"
          >
            <p className="text-2xl md:text-3xl text-foreground font-light">Less noise.</p>
            <p className="text-2xl md:text-3xl text-foreground font-light">More relevance.</p>
            <p className="text-2xl md:text-3xl text-foreground font-light">Better conversations.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
