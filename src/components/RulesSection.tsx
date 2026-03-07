import {
  ShieldOff, Copy, Cpu, UserX, Swords, Target,
  Lock, Scale, Waves, Mic, Hammer,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard3D from "@/components/GlassCard3D";

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

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-32 px-6 overflow-hidden">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none float-orb-slow" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
              Code of Conduct
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Server Rules
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Keep it fair. Keep it fun. Breaking these will get you banned.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <GlassCard3D className="p-6 h-full group">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.15)] transition-all duration-300">
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
              </GlassCard3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
