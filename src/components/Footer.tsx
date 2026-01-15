import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/971547399726";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <footer className="py-16 px-4 border-t border-border/40 bg-muted/30">
      <div className="container max-w-4xl">
        {/* Closing statement */}
        <div className="text-center mb-10">
          <p className="text-lg text-foreground/90 mb-6 max-w-md mx-auto leading-relaxed">
            If this makes sense for your business, Buddy is ready when you are.
          </p>
          
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Talk to Buddy on WhatsApp
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            No pressure. Just a conversation.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto mb-8" />

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
            Insights
          </Link>
          <Link to="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        {/* Brand line */}
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <span className="font-semibold text-foreground">Buddy</span>
          <span>—</span>
          <span>because everyone needs a Buddy</span>
          <Heart className="w-4 h-4 text-primary fill-primary/30" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
