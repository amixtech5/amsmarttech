import Layout from "@/components/layout/Layout";
import { ExternalLink, Download, Star, ArrowRight } from "lucide-react";

const tools = [
  {
    name: "PowerToys",
    description: "Microsoft's essential power user tools for Windows power users.",
    category: "Productivity",
    link: "https://github.com/microsoft/PowerToys",
    featured: true,
  },
  {
    name: "Everything Search",
    description: "Lightning-fast file search tool that finds files instantly.",
    category: "Utilities",
    link: "https://www.voidtools.com/",
    featured: true,
  },
  {
    name: "ShareX",
    description: "Advanced screenshot and screen recording tool with annotations.",
    category: "Productivity",
    link: "https://getsharex.com/",
    featured: true,
  },
  {
    name: "7-Zip",
    description: "Free, open-source file archiver with high compression ratio.",
    category: "Utilities",
    link: "https://www.7-zip.org/",
    featured: false,
  },
  {
    name: "VLC Media Player",
    description: "Versatile media player that plays almost any video format.",
    category: "Media",
    link: "https://www.videolan.org/vlc/",
    featured: false,
  },
  {
    name: "Notion",
    description: "All-in-one workspace for notes, docs, and project management.",
    category: "Productivity",
    link: "https://www.notion.so/",
    featured: true,
  },
  {
    name: "VS Code",
    description: "Lightweight but powerful code editor with great extensions.",
    category: "Development",
    link: "https://code.visualstudio.com/",
    featured: false,
  },
  {
    name: "Bitwarden",
    description: "Secure, open-source password manager for all your accounts.",
    category: "Security",
    link: "https://bitwarden.com/",
    featured: false,
  },
];

const downloads = [
  {
    title: "Windows Optimization Guide",
    description: "Complete PDF guide to speed up your Windows PC.",
    type: "PDF Guide",
    comingSoon: true,
  },
  {
    title: "Keyboard Shortcuts Cheatsheet",
    description: "Printable cheatsheet with 50+ essential shortcuts.",
    type: "Cheatsheet",
    comingSoon: true,
  },
  {
    title: "PC Maintenance Checklist",
    description: "Monthly maintenance checklist to keep your PC running smooth.",
    type: "Checklist",
    comingSoon: true,
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="gradient-orb w-[500px] h-[500px] -top-48 -left-48 opacity-10" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Tools & <span className="gradient-text">Downloads</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Curated collection of the best tools, software, and resources 
              to enhance your Windows experience and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Recommended <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Software I personally use and recommend.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-interactive p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      {tool.featured && (
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Free Downloads */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Free <span className="gradient-text">Downloads</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Exclusive resources created for the AMSmartTech community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloads.map((download, index) => (
              <div
                key={download.title}
                className="relative card-elevated p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {download.comingSoon && (
                  <div className="absolute top-4 right-4 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <Download className="w-7 h-7" />
                </div>
                <h3 className="font-semibold mb-2">{download.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{download.description}</p>
                <span className="text-xs text-muted-foreground">{download.type}</span>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">Get notified when downloads are ready</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to be the first to access free resources.
              </p>
              <a href="/#newsletter" className="btn-primary">
                Subscribe Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
