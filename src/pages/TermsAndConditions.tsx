import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const lastUpdated = "April 5, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using Buddy (the \"Service\"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use the Service.",
    },
    {
      title: "2. Description of Service",
      content:
        "Buddy is an AI-powered lead intelligence platform that monitors publicly available online conversations in real time to identify high-intent opportunities for service businesses. Buddy delivers these opportunities to you via WhatsApp. Buddy does not send messages on your behalf — all outreach decisions remain entirely yours.",
    },
    {
      title: "3. Eligibility",
      content:
        "You must be at least 18 years old and capable of entering into a binding agreement to use the Service. By using Buddy, you represent that you meet these requirements.",
    },
    {
      title: "4. Account & Access",
      content:
        "Access to Buddy is provided through WhatsApp-based onboarding. You are responsible for maintaining the confidentiality of your account information and for all activity that occurs under your access. You agree to notify us immediately of any unauthorized use.",
    },
    {
      title: "5. Acceptable Use",
      content:
        "You agree not to use the Service to: (a) send unsolicited bulk messages or spam; (b) harass, threaten, or abuse any individual; (c) violate any applicable law or regulation; (d) infringe on intellectual property rights; or (e) attempt to reverse-engineer, copy, or redistribute any part of the Service.",
    },
    {
      title: "6. Data & Privacy",
      content:
        "Buddy monitors only publicly available online discussions. We do not scrape private messages, emails, or gated content. Any personal data you provide (such as your WhatsApp number and business details) is used solely to deliver the Service. We do not sell or share your information with third parties for marketing purposes.",
    },
    {
      title: "7. No Guaranteed Results",
      content:
        "Buddy surfaces opportunities based on AI analysis of public conversations. We do not guarantee any specific number of leads, conversions, or revenue outcomes. The quality and relevance of opportunities may vary based on your industry, market conditions, and other factors beyond our control.",
    },
    {
      title: "8. Payments & Billing",
      content:
        "Paid plans are billed according to the pricing displayed at the time of subscription. All fees are non-refundable unless otherwise stated. We reserve the right to modify pricing with reasonable notice. Continued use of the Service after a pricing change constitutes acceptance of the new pricing.",
    },
    {
      title: "9. Intellectual Property",
      content:
        "All content, branding, technology, and materials associated with Buddy are the intellectual property of Buddy and its founder. You may not reproduce, distribute, or create derivative works from any part of the Service without prior written consent.",
    },
    {
      title: "10. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Buddy and its team shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Service, including but not limited to loss of profits, data, or business opportunities.",
    },
    {
      title: "11. Termination",
      content:
        "We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. You may discontinue your use of the Service at any time by contacting us.",
    },
    {
      title: "12. Changes to These Terms",
      content:
        "We may update these Terms & Conditions from time to time. Changes will be effective upon posting. Continued use of the Service after changes are posted constitutes your acceptance of the revised terms.",
    },
    {
      title: "13. Contact",
      content:
        "If you have any questions about these Terms & Conditions, you can reach us via WhatsApp at +971 547 399 726 or email at faheemmashoor@gmail.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 lg:pt-48 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
