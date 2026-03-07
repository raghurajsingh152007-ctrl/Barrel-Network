import { Mail, Server, Code2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard3D from "@/components/GlassCard3D";

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
        <ScrollReveal>
          <div className="text-center mb-14">
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
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.15}>
              <GlassCard3D className="p-7 text-center group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:shadow-[0_0_20px_hsl(var(--gold-glow)/0.2)] transition-all duration-300">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--gold-glow)/0.15)] transition-all duration-300"
                >
                  <Mail size={14} />
                  {member.email}
                </a>
              </GlassCard3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
