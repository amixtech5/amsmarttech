import { Link } from "react-router-dom";
import { ArrowRight, Clock, Eye } from "lucide-react";
import TipCard from "../tips/TipCard";

const featuredTips = [
  {
    id: 1,
    title: "10 Hidden Windows 11 Features You Need to Know",
    description: "Discover powerful features hidden in Windows 11 that will transform how you work.",
    category: "Windows",
    readTime: "5 min read",
    views: "125K",
    image: "/placeholder.svg",
    slug: "hidden-windows-11-features",
  },
  {
    id: 2,
    title: "Speed Up Your PC in 5 Minutes",
    description: "Quick optimization tricks that will make your computer feel brand new.",
    category: "Fixes",
    readTime: "3 min read",
    views: "98K",
    image: "/placeholder.svg",
    slug: "speed-up-pc",
  },
  {
    id: 3,
    title: "Master Keyboard Shortcuts for Maximum Productivity",
    description: "Essential shortcuts that will save you hours every week.",
    category: "Productivity",
    readTime: "4 min read",
    views: "87K",
    image: "/placeholder.svg",
    slug: "keyboard-shortcuts",
  },
];

const FeaturedTips = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Featured Content
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Latest <span className="gradient-text">Tech Tips</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Handpicked tips and tutorials to help you get the most out of your tech.
            </p>
          </div>
          <Link
            to="/tips"
            className="btn-ghost group self-start md:self-auto"
          >
            View all tips
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTips;
