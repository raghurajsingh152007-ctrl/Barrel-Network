import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.3em] mb-3 block">
            Screenshots
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Server Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A look at what our players have built.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="glass-card-hover rounded-xl overflow-hidden group">
                <img
                  src={src}
                  alt={`Server screenshot ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
