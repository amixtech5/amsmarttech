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
    image: "/tips/windows11-productivity.png",
    slug: "windows-11-productivity-hacks-2026",
    content: (
      <div className="space-y-8 mt-10">
        {/* Hack 1 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            1. Master Snap Layouts Like a Pro
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + Z</strong> to open Snap Layouts and instantly organize windows into clean
            layouts.
          </p>
          <ul className="list-disc ml-6 mt-3 text-muted-foreground space-y-1">
            <li>Create 2, 3, or 4 window layouts</li>
            <li>Keep apps aligned without resizing</li>
            <li>Perfect for multitasking (browser + notes + files)</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <strong>Pro Tip:</strong> Hover over the maximize button to choose layouts faster.
          </p>
        </div>

        {/* Hack 2 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            2. Use Virtual Desktops for Separation
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + Tab</strong> to create separate desktops for Work, Study, Editing, or Gaming.
            This keeps your workflow clean and reduces distractions.
          </p>
        </div>

        {/* Hack 3 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            3. Clipboard History (Game Changer)
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + V</strong> to enable Clipboard History. Windows saves multiple copied items so
            you can paste older text, pin important snippets, and work faster.
          </p>
        </div>

        {/* Hack 4 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            4. Focus Sessions to Eliminate Distractions
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Open the <strong>Clock</strong> app and start a <strong>Focus Session</strong>. It helps you stay
            locked-in by reducing notifications while the timer runs.
          </p>
        </div>

        {/* Hack 5 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            5. Open the Power User Menu Instantly
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + X</strong> (or right-click Start) to access powerful tools like Task Manager,
            Device Manager, Disk Management, and Terminal in seconds.
          </p>
        </div>

        {/* Hack 6 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            6. Use File Explorer Tabs
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            File Explorer now supports tabs. Open multiple folders in one window, like a browser, and copy files
            faster without cluttering your desktop.
          </p>
        </div>

        {/* Hack 7 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            7. Voice Typing for Fast Writing
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + H</strong> to start voice typing. It’s perfect for writing emails, notes, and
            social posts quickly.
          </p>
        </div>

        {/* Hack 8 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            8. Use Quick Settings Like a Pro
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Press <strong>Win + A</strong> to open Quick Settings. Customize it so your most-used toggles (Wi-Fi,
            Bluetooth, Night Light, Volume) are always one click away.
          </p>
        </div>

        {/* Hack 9 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            9. Install Microsoft PowerToys (Advanced)
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            PowerToys gives you pro features like <strong>FancyZones</strong> (advanced snapping), Keyboard
            remapping, and better file previews. Great for creators and power users.
          </p>
        </div>

        {/* Hack 10 */}
        <div>
          <h4 className="text-primary font-bold text-xl mb-2">
            10. Shortcuts You Should Memorize
          </h4>
          <ul className="list-disc ml-6 mt-3 text-muted-foreground space-y-1">
            <li>
              <strong>Win + D</strong> — Show desktop
            </li>
            <li>
              <strong>Win + E</strong> — Open File Explorer
            </li>
            <li>
              <strong>Win + L</strong> — Lock your PC
            </li>
            <li>
              <strong>Win + Shift + S</strong> — Screenshot tool
            </li>
            <li>
              <strong>Alt + Tab</strong> — Switch apps quickly
            </li>
          </ul>
        </div>

        {/* Final Thoughts */}
        <div className="pt-2">
          <h4 className="text-foreground font-bold text-xl mb-2">Final Thoughts</h4>
          <p className="text-muted-foreground leading-relaxed">
            Windows 11 in 2026 is more powerful than ever. If you apply even a few of these productivity hacks,
            you’ll notice faster workflow, fewer distractions, and smoother multitasking immediately.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TipArticle() {
  const { slug } = useParams();

  const tip = useMemo(() => tipsData.find((t) => t.slug === slug), [slug]);

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

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">{tip.title}</h1>
                <p className="text-muted-foreground mt-3 max-w-3xl">{tip.description}</p>
              </div>
            </div>

            {/* Article */}
            
            <div className="p-6 md:p-10">{tip.content}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}