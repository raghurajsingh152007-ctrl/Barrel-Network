import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "./images/gallery-1.png",
  "./images/gallery-2.png",
  "./images/gallery-3.png",
  "./images/gallery-4.png",
  "./images/gallery-5.png",
  "./images/gallery-6.png",
];

const BackgroundSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 10000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Blur + darken + blue tint overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-[hsl(220_60%_8%/0.78)]" />

      {/* Subtle blue gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_50%_12%/0.6)] via-transparent to-[hsl(220_50%_6%/0.85)]" />
    </div>
  );
};

export default BackgroundSlideshow;
