import { motion } from "framer-motion";
import {
  ShieldOff, Copy, Cpu, UserX, Swords, Target,
  Lock, Scale, Waves, Mic, Hammer,
} from "lucide-react";

const rules = [
  { icon: <ShieldOff size={20} />, title: "No Hacking", desc: "Don't use clients or tools that give unfair advantages. Hacked clients, Minimaps, Xray, Freecam, etc." },
  { icon: <Copy size={20} />, title: "No Duping", desc: "Duplication of any items is strictly forbidden." },
  { icon: <Cpu size={20} />, title: "No Lag Machines", desc: "Don't build machines or contraptions that cause server lag." },
  { icon: <UserX size={20} />, title: "No Alting", desc: "No using alternate accounts — even your friend's. Username changes are NOT supported." },
  { icon: <Swords size={20} />, title: "Combat Restrictions", desc: "No Crystals, Bed Bombs, Anchors, TNT Minecarts, TNT or debuffs in combat (unless Turtle Master)." },
  { icon: <Target size={20} />, title: "No Spawn Traps", desc: "No placing traps inside or within 100 blocks of spawn." },
  { icon: <Lock size={20} />, title: "No Stasis Chambers", desc: "They're not allowed for any reason." },
  { icon: <Scale size={20} />, title: "No Rule Loopholes", desc: "Don't stretch or twist rules to your advantage." },
  { icon: <Waves size={20} />, title: "No Spawn Casting", desc: "No lavacasting or watercasting around spawn." },
  { icon: <Mic size={20} />, title: "Voicechat", desc: "No earrape, soundboard spam, or NSFW content." },
  { icon: <Hammer size={20} />, title: "No Griefing", desc: "Respect the grind. Don't grief other builds or make inappropriate figures." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            Code of Conduct
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Server Rules
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Keep it fair. Keep it fun. Breaking these will get you banned.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col group-hover:border-primary/20 transition-colors duration-500">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
                    {rule.icon}
                  </div>
                  <span className="text-3xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="text-base font-display font-bold text-foreground mb-2">
                  {rule.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
