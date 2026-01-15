import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/message/YOUR_BUDDY_NUMBER"; // Replace with actual WhatsApp link

const StickyWhatsApp = () => {
  const handleClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 gradient-whatsapp text-whatsapp-foreground px-4 py-3 rounded-full shadow-whatsapp hover:scale-105 transition-transform duration-200 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat with Buddy</span>
    </motion.button>
  );
};

export default StickyWhatsApp;
