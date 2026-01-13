import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is Buddy?",
    answer: "Buddy is an AI super networker that finds real people online who are actively looking for help related to your business."
  },
  {
    question: "How does it work?",
    answer: "Buddy monitors public online conversations in real time. When someone asks for something relevant to you, Buddy sends it to you."
  },
  {
    question: "Where do the leads come from?",
    answer: "From real discussions happening publicly across the internet. These are not lists or scraped databases."
  },
  {
    question: "Are these cold leads?",
    answer: "No. The people Buddy finds are already expressing intent or a need."
  },
  {
    question: "Does Buddy message people for me?",
    answer: "No. Buddy only surfaces opportunities. You decide if and how to respond."
  },
  {
    question: "Who is Buddy for?",
    answer: "Buddy is best for service businesses, agencies, freelancers, consultants, and founders."
  },
  {
    question: "Can Buddy filter by niche or location?",
    answer: "Yes. Buddy can be trained around your target market and improves with feedback."
  },
  {
    question: "How fast does it start working?",
    answer: "Buddy starts monitoring immediately after setup. Timing depends on how active your niche is."
  },
  {
    question: "What if the leads are not a good fit?",
    answer: "Your feedback helps Buddy get more precise over time."
  },
  {
    question: "Is Buddy fully automated?",
    answer: "Discovery is automated. Decisions stay human."
  },
  {
    question: "Is Buddy spammy?",
    answer: "No. Buddy does not send mass messages or automated outreach."
  },
  {
    question: "Can I try it first?",
    answer: "Yes. Buddy is best understood by seeing it in action."
  }
];

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => (
  <div className="border-b border-border/50 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
      aria-expanded={isOpen}
    >
      <span className="text-base md:text-lg font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
        {question}
      </span>
      <ChevronDown 
        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`} 
      />
    </button>
    <motion.div
      initial={false}
      animate={{ 
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="pb-5 md:pb-6 text-muted-foreground leading-relaxed pr-8">
        {answer}
      </p>
    </motion.div>
  </div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSignup = () => {
    window.location.href = "/#signup";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Clear answers about how Buddy works and what to expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card/50 rounded-2xl p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtle CTA Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto text-center"
          >
            <p className="text-muted-foreground mb-5">Still curious?</p>
            <button
              onClick={scrollToSignup}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity"
            >
              Get my first leads free
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
