import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "April 5, 2026";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Buddy (\"we\", \"us\", or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered lead intelligence platform (the \"Service\").",
    },
    {
      title: "2. Information We Collect",
      content:
        "We collect information you provide directly, including your name, WhatsApp number, email address, and business details shared during onboarding. We also collect usage data such as how you interact with the Service, features used, and notification preferences. We do not collect passwords, payment card details directly, or any sensitive personal data beyond what is necessary to deliver the Service.",
    },
    {
      title: "3. How We Use Public Data",
      content:
        "Buddy monitors publicly available online conversations (such as public social media posts, forum discussions, and community threads) to identify high-intent opportunities. We do not access private messages, emails, password-protected content, or any gated platforms. All data sources are publicly accessible.",
    },
    {
      title: "4. How We Use Your Information",
      content:
        "We use your information to: (a) deliver lead opportunities to you via WhatsApp; (b) personalize the Service based on your industry and preferences; (c) communicate with you about your account and the Service; (d) improve and develop new features; and (e) comply with legal obligations.",
    },
    {
      title: "5. Data Sharing",
      content:
        "We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data with trusted service providers who assist in operating the Service (such as hosting and analytics), but only under strict confidentiality agreements and solely to support Service delivery.",
    },
    {
      title: "6. Data Storage & Security",
      content:
        "Your data is stored on secure, industry-standard infrastructure. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
    },
    {
      title: "7. Data Retention",
      content:
        "We retain your personal information only for as long as necessary to provide the Service and fulfill the purposes outlined in this policy. When you discontinue the Service, we will delete or anonymize your data within a reasonable timeframe, unless retention is required by law.",
    },
    {
      title: "8. Your Rights",
      content:
        "You have the right to: (a) access the personal data we hold about you; (b) request correction of inaccurate data; (c) request deletion of your data; (d) withdraw consent for data processing; and (e) request a copy of your data in a portable format. To exercise any of these rights, contact us using the details below.",
    },
    {
      title: "9. Cookies & Tracking",
      content:
        "Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings. We do not use cookies for targeted advertising.",
    },
    {
      title: "10. Third-Party Links",
      content:
        "Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
    },
    {
      title: "11. Children's Privacy",
      content:
        "The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will take steps to delete it promptly.",
    },
    {
      title: "12. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised \"Last updated\" date. Continued use of the Service after changes are posted constitutes your acceptance of the updated policy.",
    },
    {
      title: "13. Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy or your data, you can reach us via WhatsApp at +971 547 399 726 or email at faheemmashoor@gmail.com.",
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
              Privacy Policy
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

export default PrivacyPolicy;
