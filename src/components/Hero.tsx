import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-luxury-white/10" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 px-6 max-w-5xl mx-auto space-y-10 pt-32"
      >
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: { staggerChildren: 0.2, delayChildren: 0.5 }
             }
           }}
           className="space-y-12"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <p className="text-gold uppercase tracking-[.6em] font-inter text-[10px] md:text-xs font-bold whitespace-nowrap">
              EST. 2024 | MOE LUMIÈRE
            </p>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[9rem] font-playfair leading-[0.85] tracking-tighter"
          >
            Timeless Style.<br />
            <span className="italic font-normal text-gold/90">Effortless</span> Confidence.
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="font-inter text-sm md:text-lg font-light text-white/70 max-w-2xl mx-auto tracking-[.2em] leading-relaxed uppercase"
          >
            Modern African fashion designed for refined individuals who value heritage.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-6 justify-center pt-8"
        >
          <button className="luxury-button bg-white text-luxury-black border-none group px-12 py-6">
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </button>
          <button className="px-12 py-6 border border-white/30 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-700 uppercase tracking-[.3em] text-[10px] font-bold">
            Private Consultation
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[.4em] uppercase flex flex-col items-center gap-6"
      >
        <span className="[writing-mode:vertical-lr] mb-2">Scroll To Discover</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
             animate={{ height: ['0%', '100%'], top: ['0%', '100%'] }}
             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             className="absolute top-0 w-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
