import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import faheemPhoto from "@/assets/faheem-founder.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              About Buddy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why Buddy exists and how it thinks about lead generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Buddy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              Buddy was built to solve a simple problem.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The best leads already exist online, but they are buried inside conversations most businesses never see.
            </p>
            
            <div className="py-6 border-l-2 border-primary/20 pl-6 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                People ask for recommendations.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                They describe problems.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                They look for help in public.
              </p>
              <p className="text-xl font-medium text-foreground mt-4">
                Buddy listens.
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buddy is an AI super networker that scans public online discussions in real time and identifies high-intent opportunities for businesses. Instead of chasing cold leads or interrupting people with ads, Buddy surfaces conversations where someone already wants something.
            </p>
            
            <div className="pt-4 space-y-3">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Buddy does not sell, message, or spam.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                It simply points you to the right moment so you can step in naturally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="h-px bg-border/50" />
      </div>

      {/* About the Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 text-center md:text-left">
              About the Founder
            </h2>
            
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
              {/* Photo */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="relative">
                  <img
                    src={faheemPhoto}
                    alt="Faheem Mashoor, Founder of Buddy"
                    className="w-64 h-80 md:w-full md:h-auto object-cover rounded-lg shadow-soft"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                
                <p className="text-xl font-medium text-foreground pt-2">
                  Listen first.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-3"
          >
            <p className="text-xl md:text-2xl text-foreground/90">Less noise.</p>
            <p className="text-xl md:text-2xl text-foreground/90">More relevance.</p>
            <p className="text-xl md:text-2xl text-foreground/90">Better conversations.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
