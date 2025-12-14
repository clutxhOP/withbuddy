import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const SignupForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    whatsapp: "",
    website: "",
    selling: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="signup-form" className="py-24 px-4 bg-secondary/30">
        <div className="container max-w-lg">
          <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-card border border-border/50 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Nice 😄</h2>
            <p className="text-muted-foreground text-lg">
              Buddy will reach out on WhatsApp.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup-form" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-lg">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's get started
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill in the details and Buddy will reach out.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-3xl p-8 sm:p-10 shadow-card border border-border/50 space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="whatsapp"
              className="text-sm font-medium text-foreground"
            >
              WhatsApp Number <span className="text-accent">*</span>
            </label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="+1 234 567 8900"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="h-12 rounded-xl border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="website"
              className="text-sm font-medium text-foreground"
            >
              Business Website{" "}
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://yourbusiness.com"
              value={formData.website}
              onChange={handleChange}
              className="h-12 rounded-xl border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="selling"
              className="text-sm font-medium text-foreground"
            >
              What do you sell? <span className="text-accent">*</span>
            </label>
            <Textarea
              id="selling"
              name="selling"
              placeholder="e.g., Web design services, marketing consultancy, SaaS tools..."
              value={formData.selling}
              onChange={handleChange}
              required
              className="min-h-[100px] rounded-xl border-border/50 focus:border-primary resize-none"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Get my free leads
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            No spam. Buddy respects your time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
