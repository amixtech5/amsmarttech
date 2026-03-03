import { Users, Lightbulb, Eye, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15K+",
    label: "Instagram Followers",
    description: "Growing community",
  },
  {
    icon: Lightbulb,
    value: "70+",
    label: "Tips Shared",
    description: "Actionable tricks",
  },
  {
    icon: Eye,
    value: "2M+",
    label: "Total Views",
    description: "Content reach",
  },
  {
    icon: Trophy,
    value: "99%",
    label: "Positive Feedback",
    description: "Community love",
  },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-foreground font-medium mb-1">{stat.label}</div>

              {/* Description */}
              <div className="text-sm text-muted-foreground">{stat.description}</div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
