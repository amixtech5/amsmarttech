import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TipCard from "@/components/tips/TipCard";
import { Search, Filter } from "lucide-react";

const categories = ["All", "Windows", "Productivity", "Fixes", "Tutorials"];

const allTips = [
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
  {
    id: 4,
    title: "How to Clean Install Windows 11",
    description: "Step-by-step guide to perform a fresh Windows installation.",
    category: "Tutorials",
    readTime: "8 min read",
    views: "76K",
    image: "/placeholder.svg",
    slug: "clean-install-windows",
  },
  {
    id: 5,
    title: "Fix Common Windows Update Errors",
    description: "Troubleshoot and resolve the most frustrating Windows Update issues.",
    category: "Fixes",
    readTime: "6 min read",
    views: "65K",
    image: "/placeholder.svg",
    slug: "fix-windows-update",
  },
  {
    id: 6,
    title: "Best Windows Apps for Productivity",
    description: "Must-have apps that will supercharge your workflow on Windows.",
    category: "Productivity",
    readTime: "5 min read",
    views: "54K",
    image: "/placeholder.svg",
    slug: "best-windows-apps",
  },
  {
    id: 7,
    title: "Customize Your Windows Desktop Like a Pro",
    description: "Transform your desktop with these customization tips and tools.",
    category: "Windows",
    readTime: "7 min read",
    views: "89K",
    image: "/placeholder.svg",
    slug: "customize-desktop",
  },
  {
    id: 8,
    title: "Set Up Multiple Monitors in Windows",
    description: "Complete guide to multi-monitor setups for enhanced productivity.",
    category: "Tutorials",
    readTime: "6 min read",
    views: "45K",
    image: "/placeholder.svg",
    slug: "multi-monitor-setup",
  },
  {
    id: 9,
    title: "Windows Security Tips Every User Should Know",
    description: "Protect your PC with these essential security practices.",
    category: "Windows",
    readTime: "5 min read",
    views: "72K",
    image: "/placeholder.svg",
    slug: "windows-security-tips",
  },
];

const Tips = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTips = allTips.filter((tip) => {
    const matchesCategory = activeCategory === "All" || tip.category === activeCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Tech <span className="gradient-text">Tips & Tutorials</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our collection of Windows tips, productivity hacks, and PC tutorials 
              to level up your tech skills.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground hidden md:block" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground text-sm mb-6">
            Showing {filteredTips.length} {filteredTips.length === 1 ? "tip" : "tips"}
          </p>

          {/* Tips Grid */}
          {filteredTips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map((tip, index) => (
                <TipCard key={tip.id} tip={tip} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No tips found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="btn-secondary mt-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tips;
