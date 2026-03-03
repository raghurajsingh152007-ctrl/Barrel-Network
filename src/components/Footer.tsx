const Footer = () => (
  <footer className="py-10 px-6 border-t border-border/30">
    <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm font-display font-semibold text-gradient-gold">
        Barrel Network
      </span>
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Barrel Network. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
