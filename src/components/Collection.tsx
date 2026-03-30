import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use Vite's glob import to fetch all collection images
const imageModules = import.meta.glob('../assets/images/collection/**/*.{jpg,jpeg,png,webp}', { eager: true });

// Helper to group images by their folder (1-6)
const getCollectionImages = (folderIndex: number) => {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/collection/${folderIndex}/`))
    .map(([, module]) => (module as { default: string }).default);
};

interface CollectionItemProps {
  folderIndex: number;
  category: string;
  title: string;
  delay: number;
}

const CollectionItem = ({ folderIndex, category, title, delay }: CollectionItemProps) => {
  const images = getCollectionImages(folderIndex);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % images.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentIdx(0);
      }}
      className="group relative h-[700px] overflow-hidden cursor-pointer bg-luxury-grey"
    >
      <AnimatePresence mode="wait">
        <motion.div
           key={currentIdx}
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${images[currentIdx] || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop'})` }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center">
        <div className="overflow-hidden mb-4">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-gold uppercase tracking-[.4em] font-inter text-xs"
          >
            {category}
          </motion.p>
        </div>
        
        <div className="overflow-hidden mb-8">
          <motion.h3 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-white"
          >
            {title}
          </motion.h3>
        </div>

        <motion.button 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
          className="px-10 py-4 border border-white/30 text-white hover:bg-gold hover:border-gold transition-all duration-500 uppercase tracking-widest text-[10px] font-bold backdrop-blur-sm"
        >
          Explore Look
        </motion.button>
      </div>

      {images.length > 1 && (
        <div className="absolute top-10 right-10 flex gap-2">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-[2px] transition-all duration-500 ${i === currentIdx ? 'w-8 bg-gold' : 'w-4 bg-white/20'}`} 
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const collections = [
  { folderIndex: 1, category: "Bespoke Couture", title: "Cultural Mastery" },
  { folderIndex: 2, category: "Luxe Tailoring", title: "Modern Elegance" },
  { folderIndex: 3, category: "Heritage Series", title: "Timeless Roots" },
  { folderIndex: 4, category: "Editorial Selection", title: "Confident Grace" },
  { folderIndex: 5, category: "Traditional Luxe", title: "Sovereign Style" },
  { folderIndex: 6, category: "Artisan Accents", title: "The Moe Essence" },
];

export const Collection = () => {
  return (
    <section id="collection" className="bg-luxury-white py-32 px-6 md:px-12 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24 space-y-4"
      >
        <p className="text-gold uppercase tracking-[.4em] font-inter text-xs">The Vision</p>
        <h2 className="text-5xl md:text-7xl font-playfair font-bold text-luxury-black max-w-4xl mx-auto leading-tight">
          Refined Collection
        </h2>
        <div className="mx-auto w-24 h-[1px] bg-gold mt-10" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((item, index) => (
          <CollectionItem 
            key={item.title} 
            folderIndex={item.folderIndex}
            category={item.category}
            title={item.title}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

