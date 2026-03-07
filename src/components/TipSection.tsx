import { motion } from "framer-motion";
import { Copy, Heart, Sparkles, Flame, Server, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const TipSection = () => {
  const { toast } = useToast();

  const copyUPI = () => {
    navigator.clipboard.writeText("8307650450@fam");
    toast({ title: "Copied!", description: "UPI ID copied to clipboard." });
  };

  return (
    <section id="tip" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none float-orb" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none float-orb-reverse" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 glass-premium mb-6">
              <Sparkles size={12} className="text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-[0.3em]">
                Support Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Fuel the <span className="text-gradient-gold">Network</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md mx-auto leading-relaxed">
              Your generosity keeps the servers alive, the community thriving, and
              the experience unforgettable.
            </p>
          </div>
        </ScrollReveal>

        {/* Main tip card */}
        <ScrollReveal delay={0.15}>
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/40 via-primary/10 to-primary/5 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative glass-card rounded-2xl overflow-hidden">
              {/* Top decorative strip */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="p-10 sm:p-12 text-center">
                {/* Heart with layered glow */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full bg-primary/8 blur-xl"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="absolute inset-2 rounded-full bg-primary/10 blur-md"
                  />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 via-primary/10 to-transparent flex items-center justify-center border border-primary/15">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Heart size={36} className="text-primary drop-shadow-lg" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
                  Send a Tip via UPI
                </h3>
                <p className="text-sm text-secondary-foreground mb-10 max-w-sm mx-auto leading-relaxed">
                  Every contribution, big or small, fuels the servers and makes the
                  Barrel Network experience better for everyone.
                </p>

                {/* UPI copy widget */}
                <div className="inline-flex items-center gap-0 rounded-xl border border-border/60 bg-secondary/40 overflow-hidden shadow-lg shadow-primary/5">
                  <code className="text-sm sm:text-base font-mono text-primary px-5 sm:px-6 py-3.5 tracking-wide">
                    8307650450@fam
                  </code>
                  <motion.button
                    onClick={copyUPI}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 sm:px-6 py-3.5 bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-200 border-l border-primary/30 cursor-pointer"
                  >
                    <Copy size={14} />
                    Copy
                  </motion.button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 tracking-wide">
                  Paste in any UPI app to send your tip ☕
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Made by credits */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-border/60" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-[11px] uppercase tracking-[0.3em]">Made with</span>
                <Flame size={13} className="text-primary" />
                <span className="text-[11px] uppercase tracking-[0.3em]">by</span>
              </div>
              <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-border/60" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {[
                { name: "Himanshu Rathore", role: "Server Creator", icon: <Server size={16} /> },
                { name: "Raghuraj Singh", role: "Website Designer", icon: <Code2 size={16} /> },
              ].map((person, i) => (
                <ScrollReveal key={person.name} delay={0.4 + i * 0.1}>
                  <div className="glass-card-hover rounded-xl px-6 py-4 flex items-center gap-3 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.15)] transition-all duration-300">
                      {person.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">{person.name}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{person.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TipSection;
