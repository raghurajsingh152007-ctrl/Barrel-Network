import { motion } from "framer-motion";
import { Copy, Heart, Flame, Server, Code2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TipSection = () => {
  const { toast } = useToast();

  const copyUPI = () => {
    navigator.clipboard.writeText("8307650450@fam");
    toast({ title: "Copied!", description: "UPI ID copied to clipboard." });
  };

  return (
    <section id="tip" className="relative py-28 px-6">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            Support
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Tip the Server
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Enjoying Barrel Network? Your support keeps the lights on and the
            servers humming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Decorative glow border */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 via-primary/5 to-transparent" />

          <div className="relative glass-card rounded-2xl p-10 text-center">
            {/* Animated heart icon */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Heart size={32} className="text-primary" fill="currentColor" />
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Send a Tip via UPI
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-xs mx-auto leading-relaxed">
              Every contribution helps us keep the servers alive and improve the
              experience for everyone.
            </p>

            {/* UPI copy area */}
            <div className="inline-flex items-center gap-2 px-2 py-2 rounded-xl bg-secondary/60 border border-border/50 mb-3">
              <code className="text-sm font-mono text-primary px-4 py-2">
                8307650450@fam
              </code>
              <button
                onClick={copyUPI}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300"
              >
                <Copy size={14} className="inline mr-1.5 -mt-0.5" />
                Copy
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Paste in any UPI app to send your tip
            </p>
          </div>
        </motion.div>

        {/* Made by credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
              Made with
            </span>
            <Flame size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
              by
            </span>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-card-hover rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Server size={16} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  Himanshu Rathore
                </p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest">
                  Server Creator
                </p>
              </div>
            </div>

            <div className="glass-card-hover rounded-xl px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 size={16} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">
                  Raghuraj Singh
                </p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest">
                  Website Designer
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TipSection;
