import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/YOUR_BUDDY_NUMBER"; // Replace with actual WhatsApp link

const ClosingCTA = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] via-transparent to-muted/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-3xl" />
      
      <div className="container max-w-2xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            See how Buddy connects
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Start a conversation with Buddy. No forms, no sales calls. Just a quick chat to see if it's a fit.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to Buddy on WhatsApp
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            No commitment. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
