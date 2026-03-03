import Layout from "@/components/layout/Layout";

const Windows11ProductivityHacks = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-4xl">

          {/* Header */}
          <header className="mb-14">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              10 Windows 11 Productivity Hacks (2026 Guide)
            </h1>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Windows 11 is packed with powerful features that can dramatically improve your workflow — 
              if you know where to look. These tips help you work faster and smarter in 2026.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Windows 11</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Productivity</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">2026</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="space-y-12 text-lg leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">1.</span>
                Master Snap Layouts Like a Pro
              </h2>
              <p className="text-muted-foreground mt-3">
                Press <strong>Win + Z</strong> to instantly organize apps using Snap Layouts.
              </p>
              <ul className="list-disc ml-6 mt-3 text-muted-foreground space-y-1">
                <li>Create 3-column layouts</li>
                <li>Arrange 4 apps in grids</li>
                <li>Multitask faster without resizing windows</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                <strong>Pro Tip:</strong> Hover over the maximize button to quickly choose a layout.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">2.</span>
                Use Virtual Desktops for Task Separation
              </h2>
              <p className="text-muted-foreground mt-3">
                Press <strong>Win + Tab</strong> to create separate desktops for Work, Study, and Editing.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">3.</span>
                Clipboard History (Game Changer)
              </h2>
              <p className="text-muted-foreground mt-3">
                Press <strong>Win + V</strong> to enable clipboard history and reuse previously copied items.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">4.</span>
                Focus Sessions to Eliminate Distractions
              </h2>
              <p className="text-muted-foreground mt-3">
                Open the <strong>Clock</strong> app and start a <strong>Focus Session</strong> to reduce notifications.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">5.</span>
                Quick Access Power User Menu
              </h2>
              <p className="text-muted-foreground mt-3">
                Press <strong>Win + X</strong> for fast access to Task Manager, Terminal, Disk Management, and more.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">6.</span>
                File Explorer Tabs
              </h2>
              <p className="text-muted-foreground mt-3">
                Use tabs in File Explorer to reduce clutter and manage multiple folders easily.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">7.</span>
                Voice Typing for Fast Writing
              </h2>
              <p className="text-muted-foreground mt-3">
                Press <strong>Win + H</strong> to convert speech into text instantly.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">8.</span>
                Auto HDR for Better Visuals
              </h2>
              <p className="text-muted-foreground mt-3">
                Go to <strong>Settings → Display → HDR</strong> to enhance colors and depth.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">9.</span>
                Use Microsoft PowerToys
              </h2>
              <p className="text-muted-foreground mt-3">
                Install PowerToys for advanced window snapping, keyboard remapping, and more.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary text-3xl font-extrabold">10.</span>
                Essential Keyboard Shortcuts
              </h2>
              <ul className="list-disc ml-6 mt-3 text-muted-foreground space-y-1">
                <li><strong>Win + D</strong> — Show desktop</li>
                <li><strong>Win + E</strong> — Open File Explorer</li>
                <li><strong>Win + L</strong> — Lock PC</li>
                <li><strong>Win + Shift + S</strong> — Screenshot tool</li>
                <li><strong>Alt + Tab</strong> — Switch apps</li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div>
              <h2 className="text-2xl font-bold">Final Thoughts</h2>
              <p className="text-muted-foreground mt-3">
                Windows 11 in 2026 is more powerful than ever. Apply even a few of these hacks 
                and you’ll notice a faster workflow, fewer distractions, and smoother multitasking.
              </p>
            </div>

          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Windows11ProductivityHacks;