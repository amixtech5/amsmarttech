import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NotFound from "./NotFound";
import { ArrowLeft, Clock, Eye, Tag } from "lucide-react";

type Tip = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  views: string;
  image: string; // card/hero image
  slug: string;
  content?: React.ReactNode; // article body
};

const tipsData: Tip[] = [
  {
    id: 101,
    title: "10 Windows 11 Productivity Hacks (2026 Guide)",
    description:
      "Work smarter in 2026 with Snap Layouts, Virtual Desktops, Clipboard History, Focus Sessions, and more.",
    category: "Productivity",
    readTime: "6 min read",
    views: "125K",
    image: "/tips/windows11-productivity.jpg",
    slug: "windows-11-productivity-hacks-2026",
    content: (
      <div className="prose prose-invert max-w-none">
        <h2>1) Master Snap Layouts Like a Pro</h2>
        <p>
          Press <strong>Win + Z</strong> to open Snap Layouts and instantly organize windows.
        </p>

        <h2>2) Use Virtual Desktops for Separation</h2>
        <p>
          Press <strong>Win + Tab</strong> and create separate desktops for Work, Study, and Editing.
        </p>

        <h2>3) Clipboard History</h2>
        <p>
          Press <strong>Win + V</strong> to enable clipboard history and paste previous items.
        </p>

        <h2>4) Focus Sessions</h2>
        <p>
          Use the Clock app Focus Sessions to reduce distractions while working.
        </p>

        <h2>5) Power User Menu</h2>
        <p>
          Press <strong>Win + X</strong> for quick access to Task Manager, Terminal, Disk Management, and more.
        </p>

        <h2>6) File Explorer Tabs</h2>
        <p>
          Use tabs in File Explorer to reduce clutter and move files faster.
        </p>

        <h2>7) Voice Typing</h2>
        <p>
          Press <strong>Win + H</strong> to dictate text instantly for emails and notes.
        </p>

        <h2>8) Auto HDR</h2>
        <p>
          Go to <strong>Settings → Display → HDR</strong> to improve visuals.
        </p>

        <h2>9) PowerToys</h2>
        <p>
          Install Microsoft PowerToys for FancyZones, Keyboard Manager, and more.
        </p>

        <h2>10) Quick Settings Customization</h2>
        <p>
          Customize Quick Settings so the toggles you use most are always 1 click away.
        </p>
      </div>
    ),
  },
];

export default function TipArticle() {
  const { slug } = useParams();

  const tip = useMemo(
    () => tipsData.find((t) => t.slug === slug),
    [slug]
  );

  if (!tip) return <NotFound />;

  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container">
          {/* Back */}
          <Link
            to="/tips"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tips
          </Link>

          {/* Hero */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[16/6] bg-secondary">
              <img
                src={tip.image}
                alt={tip.title}
                className="h-full w-full object-cover opacity-90"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs">
                    <Tag className="w-3.5 h-3.5" />
                    {tip.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {tip.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs">
                    <Eye className="w-3.5 h-3.5" />
                    {tip.views} views
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {tip.title}
                </h1>
                <p className="text-muted-foreground mt-3 max-w-3xl">
                  {tip.description}
                </p>
              </div>
            </div>

            {/* Article */}
            <div className="p-6 md:p-10">
              {tip.content}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}