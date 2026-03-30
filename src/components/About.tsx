import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/images/founder/1.jpg';
import img2 from '../assets/images/founder/2.jpg';
import img3 from '../assets/images/founder/3.jpg';
import img4 from '../assets/images/founder/4.jpg';

const founderImages = [img1, img2, img3, img4];

export const About = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % founderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="story" className="bg-luxury-white py-32 px-10 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group h-[500px] w-full max-w-md mx-auto md:mx-0 overflow-hidden shadow-2xl rounded-sm"
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImg}
              src={founderImages[currentImg]} 
              alt="Moe Lumière Founder" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-10 p-8 flex justify-center gap-3">
             {founderImages.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-[1px] transition-all duration-700 ${i === currentImg ? 'w-12 bg-gold' : 'w-6 bg-white/30'}`} 
               />
             ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-playfair font-bold text-luxury-black tracking-tighter leading-[0.9]">
              Heritage <br /><span className="italic">&</span> Innovation.
            </h2>
            <div className="w-16 h-[1px] bg-gold mt-10" />
          </div>

          <div className="space-y-8 text-grey-dark font-inter text-base md:text-lg leading-relaxed max-w-md tracking-wider">
            <p>
              Founded by Morenike Sulaiman, a FUTA Biotechnology graduate turned fashion designer, 
              Moe Lumière represents the intersection of scientific precision and cultural expression.
            </p>
            <p>
              Moe Lumière is more than a brand; it's a testament to the belief that luxury 
              should be effortless, and heritage should be worn with pride.
            </p>
            <div className="pt-12 border-l-2 border-gold/20 pl-8">
              <p className="font-playfair italic text-4xl text-luxury-black tracking-tight">
                M. Sulaiman
              </p>
              <p className="text-[10px] uppercase tracking-[.5em] text-gold mt-4 font-bold">
                Founder & Creative Director
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
