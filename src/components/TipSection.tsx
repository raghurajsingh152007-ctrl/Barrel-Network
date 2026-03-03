import { motion } from "framer-motion";
import { Copy, Heart } from "lucide-react";
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
      <div className="container mx-auto max-w-xl">
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
          <p className="text-muted-foreground mt-4">
            Enjoying Barrel Network? Drop a tip to help keep things running.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover rounded-xl p-8 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Heart size={24} className="text-primary" />
          </div>

          <h3 className="text-xl font-display font-bold text-foreground mb-2">
            Send a Tip via UPI
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Every bit helps us keep the servers alive and improve the experience
            for everyone.
          </p>

          <div className="flex items-center gap-2 justify-center mb-4">
            <code className="text-sm font-mono text-primary bg-primary/10 px-4 py-2.5 rounded-lg">
              8307650450@fam
            </code>
            <button
              onClick={copyUPI}
              className="p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              aria-label="Copy UPI"
            >
              <Copy size={16} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Copy the UPI ID and paste it in any UPI app to send a tip.
          </p>
        </motion.div>

        <p className="text-xs text-muted-foreground/50 text-center mt-8 italic max-w-sm mx-auto">
          btw the guy who made this website (RisingForce) gets absolutely nothing
          from this. all tips go straight to the server owner.
        </p>
      </div>
    </section>
  );
};

export default TipSection;
