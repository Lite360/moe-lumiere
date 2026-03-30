import { motion } from 'framer-motion';

export const BrandStatement = () => {
  return (
    <section className="bg-luxury-white py-48 px-6 md:px-20 text-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] border border-gold/5 pointer-events-none" 
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-[1px] bg-gold/40" />
          <p className="text-gold uppercase tracking-[.6em] font-inter text-[10px] md:text-xs font-bold leading-none">
            The Moe Lumière Philosophy
          </p>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl font-playfair font-bold text-luxury-black italic leading-[1.1] tracking-tight relative"
        >
          <span className="relative z-10 block">
            “Crafted for <span className="text-gold italic font-normal">confidence</span>. <br className="hidden md:block" />
            Designed for <span className="font-normal">timeless</span> expression.”
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-grey-dark font-inter uppercase tracking-[.45em] text-xs font-semibold pt-10">
            Moe Lumière — The Art of Refined Living
          </p>
          <div className="mx-auto w-10 h-[1px] bg-gold/30" />
        </motion.div>
      </div>

       {/* Subliminal Brand Mark */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-playfair font-bold text-luxury-black/[0.02] pointer-events-none select-none -z-10 tracking-tighter">
        MOE
      </div>
    </section>
  );
};
