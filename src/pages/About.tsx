import Layout from "@/components/layout/Layout";
import { Zap, Target, Heart, Rocket, Instagram, Twitter, Youtube } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Simplicity First",
      description: "Complex tech concepts explained in simple, actionable steps.",
    },
    {
      icon: Target,
      title: "Practical Focus",
      description: "Every tip is tested and guaranteed to work on real systems.",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Built by the community, for the community. Your feedback shapes our content.",
    },
    {
      icon: Rocket,
      title: "Always Current",
      description: "Stay up-to-date with the latest Windows features and tech trends.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="gradient-orb w-[500px] h-[500px] -top-48 -right-48 opacity-10" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About AMSmartTech
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Making Tech <span className="gradient-text">Simple & Accessible</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AMSmartTech is your go-to destination for Windows tips, PC tricks, and
              productivity hacks. We believe technology should empower everyone, not
              just the tech-savvy.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The <span className="gradient-text">Story</span> Behind AMSmartTech
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm the creator behind AMSmartTech. My journey started when I realized
                  how many people struggle with basic computer tasks that could be solved with
                  simple tips and tricks.
                </p>
                <p>
                  What began as helping friends and family with their PCs quickly grew into
                  something much bigger. I started sharing tips on Instagram, and the response
                  was overwhelming – people were hungry for practical, easy-to-follow tech advice.
                </p>
                <p>
                  Today, AMSmartTech has grown into a community of 15,000+ tech enthusiasts
                  who share a common goal: mastering their technology without the headaches.
                </p>
              </div>
            </div>

            {/* PROFESSIONAL LOGO CARD */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
                <div className="w-full h-full rounded-xl relative overflow-hidden flex items-center justify-center">
                  {/* Dark glass background (professional, high contrast) */}
                  <div className="absolute inset-0 bg-background/70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background/85 to-background" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,0.22),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.16),transparent_55%)]" />

                  {/* Center badge */}
                  <div className="relative w-[80%] max-w-[460px] rounded-2xl border border-primary/25 bg-background/70 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                    {/* Full logo */}
                    <div className="flex items-center justify-center">
                      <img
                        src="/logo-full.png"
                        alt="AMSmartTech"
                        className="w-full max-w-[360px] h-auto brightness-110 drop-shadow-[0_10px_30px_rgba(59,130,246,0.20)]"
                      />
                    </div>

                    {/* Text */}
                    <div className="text-center mt-6">
                      <p className="text-2xl font-bold text-primary">@amsmarttech</p>
                      <p className="text-muted-foreground mt-2">Tech Creator</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-gradient-primary opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              These principles guide everything we create at AMSmartTech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-interactive p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Follow me on social media for daily tips and behind-the-scenes content.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/amsmarttech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://twitter.com/amsmarttech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1DA1F2] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href="https://youtube.com/@amsmarttech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF0000] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;