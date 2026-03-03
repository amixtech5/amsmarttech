import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube, Mail, Zap, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Tips", path: "/tips" },
      { name: "About", path: "/about" },
      { name: "Resources", path: "/resources" },
      { name: "Contact", path: "/contact" },
    ],
    categories: [
      { name: "Windows Tips", path: "/tips?category=windows" },
      { name: "Productivity", path: "/tips?category=productivity" },
      { name: "PC Fixes", path: "/tips?category=fixes" },
      { name: "Tutorials", path: "/tips?category=tutorials" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/amsmarttech", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/amsmarttech", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@amsmarttech1", label: "YouTube" },
    {
  icon: Mail,
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=amsmarttech1@gmail.com&su=AMSmartTech%20Website%20Inquiry&body=Hi%20AMSmartTech%2C%0A%0AI'm%20reaching%20out%20about%3A%20%0A%0A%5BWrite%20your%20message%20here%5D%0A%0AThanks%2C%0A",
  label: "Email"
}
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                AM<span className="gradient-text">Smart</span>Tech
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your go-to source for Windows tips, PC tricks, and productivity hacks. 
              Making tech simple, one tip at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest tips and tricks delivered to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AMSmartTech. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for tech enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
