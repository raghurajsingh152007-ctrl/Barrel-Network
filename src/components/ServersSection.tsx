import { motion } from "framer-motion";
import { Copy, Pickaxe, Swords } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const servers = [
  {
    icon: <Pickaxe size={28} />,
    label: "Survival Multiplayer",
    name: "Barrel SMP",
    ip: "BarrelSMPS2.aternos.me:59011",
    details: [
      { label: "Version", value: "Java" },
      { label: "Mode", value: "Survival" },
      { label: "Season", value: "S2" },
    ],
  },
  {
    icon: <Swords size={28} />,
    label: "Box PvP",
    name: "Barrel Box",
    ip: "BarrelBoxS3.aternos.me:25082",
    details: [
      { label: "Version", value: "Java" },
      { label: "Mode", value: "PvP" },
      { label: "Season", value: "S3" },
    ],
  },
];

const ServersSection = () => {
  const { toast } = useToast();

  const copyIP = (ip: string) => {
    navigator.clipboard.writeText(ip);
    toast({ title: "Copied!", description: `${ip} copied to clipboard.` });
  };

  return (
    <section id="servers" className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            Game Modes
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Pick Your Server
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Two unique experiences under one network. Copy the IP and jump
            straight in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {servers.map((server, i) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{server.icon}</div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  {server.label}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-5">
                {server.name}
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <code className="flex-1 text-sm font-mono text-primary bg-primary/10 px-4 py-2.5 rounded-lg truncate">
                  {server.ip}
                </code>
                <button
                  onClick={() => copyIP(server.ip)}
                  className="shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label="Copy IP"
                >
                  <Copy size={16} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {server.details.map((d) => (
                  <div
                    key={d.label}
                    className="text-center p-3 rounded-lg bg-secondary/50"
                  >
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                      {d.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
