import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import barrelLogo from "@/assets/barrel-logo.png";

const DISCORD_URL = "https://discord.gg/RYyFvzr4CR";

const navLinks = [
  { label: "Servers", href: "#servers" },
  { label: "Rules", href: "#rules" },
  { label: "Gallery", href: "#gallery" },
  { label: "Staff", href: "#staff" },
  { label: "Support", href: "#tip" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-premium py-2 shadow-[0_4px_30px_hsl(0_0%_0%/0.3)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Brand with barrel logo */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 group bg-transparent border-none cursor-pointer px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors duration-300"
        >
          <motion.img
            src={barrelLogo}
            alt="Barrel Network"
            className="w-8 h-8 object-contain drop-shadow-[0_0_8px_hsl(32_90%_55%/0.4)]"
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-xl font-display font-bold text-gradient-gold tracking-wide">
            Barrel Network
          </span>
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              onClick={() => {
                const el = document.getElementById(link.href.replace("#", ""));
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`relative text-xs font-medium px-3.5 py-2 rounded-lg transition-all duration-300 tracking-widest uppercase cursor-pointer border ${
                activeSection === link.href
                  ? "text-primary border-primary/30 bg-primary/10"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-px left-1/4 right-1/4 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--gold-glow)/0.15)] transition-all duration-500 border border-primary/20"
          >
            <DiscordIcon size={14} />
            Discord
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-foreground bg-transparent border-none cursor-pointer p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-premium mx-4 mt-2 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    setMobileOpen(false);
                    const el = document.getElementById(link.href.replace("#", ""));
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm font-medium transition-all py-2.5 px-4 uppercase tracking-wide rounded-lg cursor-pointer text-left ${
                    activeSection === link.href
                      ? "text-primary bg-primary/10 border border-primary/30"
                      : "text-muted-foreground hover:text-primary border border-transparent hover:border-border/50 hover:bg-secondary/30"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide hover:bg-primary/20 transition-all duration-300"
              >
                <DiscordIcon size={16} />
                Discord
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
