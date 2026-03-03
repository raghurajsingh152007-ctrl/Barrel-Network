import { motion } from "framer-motion";
import { ChevronDown, Server, Shield, Users, Loader2 } from "lucide-react";
import { useServerStatus } from "@/hooks/use-server-status";

const HeroSection = () => {
  const smp = useServerStatus("BarrelSMPS2.aternos.me:59011");
  const box = useServerStatus("BarrelBoxS3.aternos.me:25082");

  const anyOnline = smp.online || box.online;
  const totalPlayers = (smp.players?.online ?? 0) + (box.players?.online ?? 0);
  const isLoading = smp.loading || box.loading;

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
          {isLoading ? (
            <>
              <Loader2 size={12} className="animate-spin text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">
                Checking Servers…
              </span>
            </>
          ) : anyOnline ? (
            <>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">
                {totalPlayers} Player{totalPlayers !== 1 ? "s" : ""} Online
              </span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-destructive" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Servers Offline
              </span>
            </>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Barrel</span>{" "}
          <span className="text-gradient-gold">Network</span>
        </motion.h1>

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
