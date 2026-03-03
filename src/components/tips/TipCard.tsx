import { Link } from "react-router-dom";
import { Clock, Eye, ArrowUpRight } from "lucide-react";

interface Tip {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  views: string;
  image: string;
  slug: string;
}

interface TipCardProps {
  tip: Tip;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Windows: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Productivity: "bg-green-500/10 text-green-400 border-green-500/20",
  Fixes: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Tutorials: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const TipCard = ({ tip, index = 0 }: TipCardProps) => {
  return (
    <Link
      to={`/tips/${tip.slug}`}
      className="group card-interactive flex flex-col overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <ArrowUpRight className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category Badge */}
        <span
          className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-medium border ${
            categoryColors[tip.category] || "bg-primary/10 text-primary border-primary/20"
          }`}
        >
          {tip.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {tip.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm flex-1 line-clamp-2">
          {tip.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {tip.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {tip.views} views
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TipCard;
