import { motion } from "framer-motion";
import { Mail, Server, Code2 } from "lucide-react";

const team = [
  {
    name: "Himanshu Rathore",
    role: "Server Creator",
    email: "raghurajsingh15007@gmail.com",
    icon: <Server size={20} />,
  },
  {
    name: "Raghuraj Singh",
    role: "Website Designer",
    email: "raghurajsingh152007@gmail.com",
    icon: <Code2 size={20} />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Have questions, suggestions, or want to collaborate? Reach out to the
            team behind Barrel Network.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover rounded-xl p-7 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                {member.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] mt-1 mb-5">
                {member.role}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <Mail size={14} />
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
