import { motion } from "framer-motion";
import DiscordIcon from "@/components/DiscordIcon";
import { Server, Shield, Mail, Heart } from "lucide-react";

const DISCORD_URL = "https://discord.gg/RYyFvzr4CR";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "Servers", href: "#servers" },
      { label: "Rules", href: "#rules" },
      { label: "Gallery", href: "#gallery" },
      { label: "Staff", href: "#staff" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: DISCORD_URL, external: true },
      { label: "Support Us", href: "#tip" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden">
      {/* Gradient top border */}
      <div className="section-divider w-full max-w-3xl mx-auto mb-16" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
          {/* Brand column */}
          <div className="sm:col-span-1">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              className="text-2xl font-display font-bold text-gradient-gold tracking-wide mb-4 block bg-transparent border-none cursor-pointer p-0"
            >
              Barrel Network
            </motion.button>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A Minecraft community built on fair play, exceptional builds, and camaraderie.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.2)] transition-all duration-300"
              >
                <DiscordIcon size={18} />
              </motion.a>
              <motion.a
                href="mailto:raghurajsingh15007@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.2)] transition-all duration-300"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-[0.2em] mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Barrel Network. All rights reserved.
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart size={10} className="text-primary" fill="currentColor" /> by the Barrel team
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
