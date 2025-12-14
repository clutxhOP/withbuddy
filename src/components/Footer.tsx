import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <span className="font-semibold text-foreground">Buddy</span>
          <span>—</span>
          <span>because everyone needs a Buddy</span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
