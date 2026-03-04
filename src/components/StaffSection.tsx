import { motion } from "framer-motion";
import { Server, Code2, Crown, UserPlus } from "lucide-react";

const staff = [
  {
    name: "Himanshu Rathore",
    role: "Server Creator",
    icon: <Server size={22} />,
    accent: "Owner",
  },
  {
    name: "Raghuraj Singh",
    role: "Website Designer",
    icon: <Code2 size={22} />,
    accent: "Developer",
  },
];

const StaffSection = () => {
  return (
    <section id="staff" className="relative py-28 px-6">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            The Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Our Staff
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            The people who keep Barrel Network running smoothly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card-hover rounded-xl p-8 text-center group cursor-default"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary transition-transform duration-300 group-hover:scale-110">
                {member.icon}
              </div>

              {/* Rank badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-[0.15em] font-semibold mb-4">
                <Crown size={10} />
                {member.accent}
              </span>

              {/* Name */}
              <h3 className="text-xl font-display font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
                {member.role}
              </p>
            </motion.div>
          ))}

          {/* Coming Soon placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: staff.length * 0.12 }}
            className="glass-card rounded-xl p-8 text-center flex flex-col items-center justify-center border-dashed border-border/60 cursor-default"
          >
            <div className="w-16 h-16 rounded-full bg-muted/40 flex items-center justify-center mx-auto mb-5 text-muted-foreground">
              <UserPlus size={22} />
            </div>
            <h3 className="text-lg font-display font-semibold text-muted-foreground mb-1">
              More Staff
            </h3>
            <p className="text-[11px] text-muted-foreground/70 uppercase tracking-[0.2em]">
              Coming Soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
