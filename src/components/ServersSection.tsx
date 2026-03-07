import { Copy, Pickaxe, Swords } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard3D from "@/components/GlassCard3D";

interface ServerData {
  icon: React.ReactNode;
  label: string;
  name: string;
  ip: string;
  mode: string;
  season: string;
}

const servers: ServerData[] = [
  {
    icon: <Pickaxe size={28} />,
    label: "Survival Multiplayer",
    name: "Barrel SMP",
    ip: "BarrelSMPS2.aternos.me:59011",
    mode: "Survival",
    season: "S2",
  },
  {
    icon: <Swords size={28} />,
    label: "Box PvP",
    name: "Barrel Box",
    ip: "BarrelBoxS3.aternos.me:25082",
    mode: "PvP",
    season: "S3",
  },
];

const ServerCard = ({ server, index }: { server: ServerData; index: number }) => {
  const { toast } = useToast();

  const copyIP = () => {
    navigator.clipboard.writeText(server.ip);
    toast({ title: "Copied!", description: `${server.ip} copied to clipboard.` });
  };

  return (
    <ScrollReveal delay={index * 0.15}>
      <GlassCard3D className="p-8 group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary">{server.icon}</div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              {server.label}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] uppercase tracking-widest font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Online
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
            onClick={copyIP}
            className="shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.2)] transition-all duration-300"
            aria-label="Copy IP"
          >
            <Copy size={16} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Version", value: "Java" },
            { label: "Mode", value: server.mode },
            { label: "Season", value: server.season },
          ].map((item) => (
            <div key={item.label} className="text-center p-3 rounded-lg bg-secondary/30 border border-border/30">
              <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </GlassCard3D>
    </ScrollReveal>
  );
};

const ServersSection = () => {
  return (
    <section id="servers" className="relative py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
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
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {servers.map((server, i) => (
            <ServerCard key={server.name} server={server} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
