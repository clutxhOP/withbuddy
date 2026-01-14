import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import faheemPhoto from "@/assets/faheem-founder.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Section 1: Hero - Strong Open */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">
              About Buddy
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Built to listen where intent actually happens
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Buddy is an AI super networker that scans public online conversations and surfaces high-intent opportunities in real time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem - Stacked Signals */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl font-medium text-foreground mb-8">
              Buddy was built to solve a simple problem.
            </p>
            
            <div className="space-y-4 md:space-y-5">
              {/* Key emphasized line */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                The best leads already exist online.
              </p>
              
              <div className="space-y-1 text-base md:text-lg text-muted-foreground/80 leading-relaxed pl-0 md:pl-1">
                <p>They're just buried inside conversations</p>
                <p className="text-muted-foreground/60">most businesses never see.</p>
              </div>
            </div>
            
            <div className="mt-10 md:mt-12 space-y-2 text-base md:text-lg">
              <p className="text-foreground/90">People ask for recommendations.</p>
              <p className="text-muted-foreground/70 pl-4 md:pl-6">They describe problems.</p>
              <p className="text-muted-foreground/55 pl-8 md:pl-12">They look for help in public.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Anchor Statement - Hard Stop */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        >
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight text-center">
            Buddy listens.
          </p>
        </motion.div>
      </section>

      {/* Section 4: What Buddy Does - Card Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Scans in real time
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Buddy continuously monitors public online discussions as they happen.
              </p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Finds expressed intent
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                It surfaces moments where people are actively asking for help.
              </p>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                Keeps humans in control
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Buddy never messages or spams. You decide when to step in.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: About the Founder - Editorial Feature */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-6xl mx-auto"
          >
            {/* Large Photo */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={faheemPhoto}
                  alt="Faheem Mashoor, Founder of Buddy"
                  className="w-full aspect-[4/5] object-cover rounded-xl shadow-card"
                />
                {/* Subtle accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              </div>
            </div>
            
            {/* Text - Editorial Style */}
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-5">
                Buddy was founded by Faheem Mashoor, a builder focused on practical AI systems that solve real business problems.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                Faheem has worked on end-to-end AI products across multiple industries, spanning integrations, automation, workflow design, and deployment. His work sits at the intersection of engineering, product, and business operations.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                Buddy was created from firsthand experience watching businesses struggle with lead generation while valuable opportunities were happening in plain sight online.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Instead of building another dashboard or outreach tool, Faheem built Buddy around a simple belief.
              </p>
              
              {/* Pull-quote */}
              <div className="relative pl-6 border-l-2 border-primary/50">
                <p className="text-2xl md:text-3xl font-light italic text-foreground">
                  Listen first.
                </p>
                <p className="mt-3 text-sm text-muted-foreground/60">
                  Built from real-world experience, not theory.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Closing Manifesto */}
      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="space-y-3 md:space-y-4">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                Less noise.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                More relevance.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                Better conversations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
