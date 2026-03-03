import { motion } from "framer-motion";

const rules = [
  { title: "No Hacking", desc: "Don't use clients or tools that give unfair advantages. Hacked clients, Minimaps, Xray, Freecam, etc." },
  { title: "No Duping", desc: "Duplication of any items is strictly forbidden." },
  { title: "No Lag Machines", desc: "Don't build machines or contraptions that cause server lag." },
  { title: "No Alting", desc: "No using alternate accounts — even your friend's. Username changes are NOT supported." },
  { title: "Combat Restrictions", desc: "No Crystals, Bed Bombs, Anchors, TNT Minecarts, TNT or debuffs in combat (unless Turtle Master)." },
  { title: "No Spawn Traps", desc: "No placing traps inside or within 100 blocks of spawn." },
  { title: "No Stasis Chambers", desc: "They're not allowed for any reason." },
  { title: "No Rule Loopholes", desc: "Don't stretch or twist rules to your advantage." },
  { title: "No Spawn Casting", desc: "No lavacasting or watercasting around spawn." },
  { title: "Voicechat", desc: "No earrape, soundboard spam, or NSFW content." },
  { title: "No Griefing", desc: "Respect the grind. Don't grief other builds or make inappropriate figures." },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-28 px-6">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="space-y-4">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover rounded-xl p-6 flex gap-5 items-start"
            >
              <span className="shrink-0 text-2xl font-display font-bold text-primary/40 w-10 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {rule.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
