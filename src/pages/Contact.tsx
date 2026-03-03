import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Send, Instagram, Twitter, Youtube, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@amsmarttech",
      icon: Instagram,
      href: "https://instagram.com/amsmarttech",
      color: "from-purple-500 to-pink-500",
      description: "DM me for quick questions",
    },
    {
      name: "Twitter",
      handle: "@amsmarttech",
      icon: Twitter,
      href: "https://twitter.com/amsmarttech",
      color: "from-blue-400 to-blue-500",
      description: "Tweet at me anytime",
    },
    {
      name: "YouTube",
      handle: "@amsmarttech",
      icon: Youtube,
      href: "https://youtube.com/@amsmarttech1",
      color: "from-red-500 to-red-600",
      description: "Watch tutorials & guides",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="gradient-orb w-[500px] h-[500px] -top-48 -right-48 opacity-10" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a question, suggestion, or just want to say hi? 
              I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                  <p className="text-muted-foreground text-sm">I'll get back to you as soon as possible.</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll respond within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Question</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Tech Support Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Connect on Social</h2>
                  <p className="text-muted-foreground text-sm">Follow me for daily tips and updates.</p>
                </div>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} text-white`}>
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-primary">{social.handle}</div>
                      <div className="text-xs text-muted-foreground mt-1">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* FAQ Teaser */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Before reaching out, check if your question has already been answered.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Response time is usually 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">For quick questions, DM me on Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Open to collaborations and partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
