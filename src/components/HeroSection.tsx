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

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8"
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-lg">
            <motion.img
              src={barrelLogo}
              alt="Barrel"
              onClick={scrollToTop}
              className="w-[120%] h-[120%] object-cover cursor-pointer drop-shadow-[0_0_20px_hsl(32_90%_55%/0.4)] -m-[10%]"
              whileHover={{
                scale: 1.15,
                rotate: [0, -8, 8, -4, 0],
                filter: "drop-shadow(0 0 30px hsl(32 90% 55% / 0.6))",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight">
            <span className="text-foreground">Barrel</span>{" "}
            <span className="text-gradient-gold">Network</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
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
          <button
            onClick={() => document.getElementById("servers")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 glow-gold border-none cursor-pointer"
          >
            <Server size={18} />
            View Servers
          </button>
          <button
            onClick={() => document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-transparent text-foreground font-semibold text-sm tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <Shield size={18} />
            Read Rules
          </button>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary/30 bg-primary/10 text-primary font-semibold text-sm tracking-wide hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <DiscordIcon size={18} />
            Join Discord
          </a>
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
