import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  const lastUpdated = "April 5, 2026";

  const sections = [
    {
      title: "1. Overview",
      content:
        "This Refund Policy outlines the terms under which refunds may be issued for Buddy's paid subscription plans. By subscribing to the Service, you agree to the terms described below.",
    },
    {
      title: "2. Subscription Billing",
      content:
        "Buddy offers subscription-based plans billed on a recurring basis (monthly or as otherwise specified). Your subscription begins on the date of purchase and renews automatically at the end of each billing cycle unless cancelled.",
    },
    {
      title: "3. Refund Eligibility",
      content:
        "If you are unsatisfied with the Service, you may request a refund within 7 days of your initial subscription purchase. Refund requests made after the 7-day window will be evaluated on a case-by-case basis at our discretion. Renewal charges are non-refundable once the new billing cycle has begun.",
    },
    {
      title: "4. How to Request a Refund",
      content:
        "To request a refund, contact us via WhatsApp at +971 547 399 726 or email at faheemmashoor@gmail.com. Please include your name, the email or WhatsApp number associated with your account, and the reason for your refund request. We aim to respond to all refund requests within 3 business days.",
    },
    {
      title: "5. Refund Processing",
      content:
        "Approved refunds will be processed to the original payment method within 5-10 business days, depending on your payment provider. You will receive a confirmation once the refund has been initiated.",
    },
    {
      title: "6. Cancellation",
      content:
        "You may cancel your subscription at any time by contacting us. Upon cancellation, you will continue to have access to the Service until the end of your current billing period. No further charges will be made after cancellation, but no partial refund will be issued for the remaining days in the current billing cycle.",
    },
    {
      title: "7. Exceptions",
      content:
        "Refunds will not be issued in cases of: (a) violation of our Terms & Conditions; (b) misuse or abuse of the Service; (c) chargebacks initiated without first contacting us for resolution. We reserve the right to deny refund requests that do not meet the criteria outlined in this policy.",
    },
    {
      title: "8. Changes to This Policy",
      content:
        "We may update this Refund Policy from time to time. Changes will be effective upon posting. Continued use of the Service after changes are posted constitutes your acceptance of the revised policy.",
    },
    {
      title: "9. Contact Us",
      content:
        "If you have any questions about this Refund Policy, you can reach us via WhatsApp at +971 547 399 726 or email at faheemmashoor@gmail.com.",
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
              Refund Policy
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

export default RefundPolicy;
