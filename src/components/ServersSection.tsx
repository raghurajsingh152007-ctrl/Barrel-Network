import { motion } from "framer-motion";
import { Copy, Pickaxe, Swords, Users, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useServerStatus } from "@/hooks/use-server-status";

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
  const status = useServerStatus(server.ip);

  const copyIP = () => {
    navigator.clipboard.writeText(server.ip);
    toast({ title: "Copied!", description: `${server.ip} copied to clipboard.` });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="glass-card-hover rounded-xl p-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-primary">{server.icon}</div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {server.label}
          </span>
        </div>

        {/* Status badge */}
        {status.loading ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-[10px] uppercase tracking-widest">
            <Loader2 size={10} className="animate-spin" />
            Checking
          </span>
        ) : status.online ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] uppercase tracking-widest font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Online
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-destructive/10 text-destructive text-[10px] uppercase tracking-widest font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
            Offline
          </span>
        )}
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
          className="shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Copy IP"
        >
          <Copy size={16} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {/* Player count */}
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
            Players
          </span>
          {status.loading ? (
            <Loader2 size={14} className="animate-spin mx-auto text-muted-foreground" />
          ) : status.online && status.players ? (
            <span className="text-sm font-semibold text-foreground inline-flex items-center justify-center gap-1">
              <Users size={12} className="text-primary" />
              {status.players.online}/{status.players.max}
            </span>
          ) : (
            <span className="text-sm font-semibold text-muted-foreground">—</span>
          )}
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
            Version
          </span>
          <span className="text-sm font-semibold text-foreground">Java</span>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
            Mode
          </span>
          <span className="text-sm font-semibold text-foreground">{server.mode}</span>
        </div>
        <div className="text-center p-3 rounded-lg bg-secondary/50">
          <span className="block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
            Season
          </span>
          <span className="text-sm font-semibold text-foreground">{server.season}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ServersSection = () => {
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
            <ServerCard key={server.name} server={server} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
