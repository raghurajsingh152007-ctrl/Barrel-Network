import { motion } from "framer-motion";
import { ChevronDown, Server, Shield } from "lucide-react";
import DiscordIcon from "@/components/DiscordIcon";
import barrelLogo from "@/assets/barrel-logo.png";

const DISCORD_URL = "https://discord.gg/RYyFvzr4CR";

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] float-orb pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px] float-orb-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[150px] float-orb-slow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 glass-premium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-primary uppercase tracking-widest">
            Server Online
          </span>
        </motion.div>

        {/* Title with barrel image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-6"
        >
          <motion.img
            src={barrelLogo}
            alt="Barrel"
            onClick={scrollToTop}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain cursor-pointer drop-shadow-[0_0_20px_hsl(32_90%_55%/0.4)]"
            whileHover={{
              scale: 1.15,
              rotate: [0, -8, 8, -4, 0],
              filter: "drop-shadow(0 0 30px hsl(32 90% 55% / 0.6))",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
            <span className="text-foreground">Barrel</span>{" "}
            <span className="text-gradient-gold relative">
              Network
              {/* Glow behind accent word */}
              <span className="absolute inset-0 blur-2xl bg-primary/20 -z-10" />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A Minecraft community built on fair play, exceptional builds, and
          camaraderie. Dive into SMP survival or prove your mettle in Box PvP.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById("servers")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-premium inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide glow-gold-intense border-none cursor-pointer"
          >
            <Server size={18} />
            View Servers
          </motion.button>
          <motion.button
            onClick={() => document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border/60 bg-secondary/20 backdrop-blur-sm text-foreground font-semibold text-sm tracking-wide hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 cursor-pointer"
          >
            <Shield size={18} />
            Read Rules
          </motion.button>
          <motion.a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary font-semibold text-sm tracking-wide hover:bg-primary/20 hover:border-primary/50 transition-all duration-500"
          >
            <DiscordIcon size={18} />
            Join Discord
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown size={16} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
