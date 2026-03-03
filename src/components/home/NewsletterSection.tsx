import { useState } from "react";
import { Mail, Sparkles, CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="gradient-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Mail className="w-8 h-8" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="gradient-text">Weekly Tech Tips</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-lg">
            Join 10,000+ subscribers who receive exclusive Windows tips, 
            productivity hacks, and early access to new content.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">You're subscribed! Check your inbox for a welcome email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                <Sparkles className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}

          {/* Trust */}
          <p className="text-muted-foreground text-sm mt-4">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
