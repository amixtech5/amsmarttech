import { Instagram, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background" />
      <div className="gradient-orb w-[600px] h-[600px] -top-48 -right-48 animate-pulse-glow" />
      <div className="gradient-orb w-[400px] h-[400px] bottom-0 left-0 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tech Tips That Actually Work</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Master Your PC with{" "}
            <span className="gradient-text">Smart Tech Tips</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
            Windows tricks, productivity hacks, and PC tutorials that help you work smarter, 
            not harder. Join 15K+ tech enthusiasts leveling up their skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <a
              href="https://instagram.com/amsmarttech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5" />
              Follow @amsmarttech
            </a>
            <a href="#newsletter" className="btn-secondary w-full sm:w-auto">
              Subscribe to Newsletter
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in stagger-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm">15K+ Followers</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <span className="text-sm">⭐ Trusted by tech enthusiasts</span>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <span className="text-sm">🚀 New tips weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
