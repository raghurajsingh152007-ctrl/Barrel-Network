import ScrollReveal from "@/components/ScrollReveal";

const images = [
  "./images/gallery-1.png",
  "./images/gallery-2.png",
  "./images/gallery-3.png",
  "./images/gallery-4.png",
  "./images/gallery-5.png",
  "./images/gallery-6.png",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-28 px-6">
      <div className="section-divider w-full max-w-xl mx-auto mb-28" />
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
              Screenshots
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              Server Gallery
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              A look at what our players have built.
            </p>
          </div>
        </ScrollReveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="break-inside-avoid">
                <div className="glass-card-hover rounded-xl overflow-hidden group relative">
                  <img
                    src={src}
                    alt={`Server screenshot ${i + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
