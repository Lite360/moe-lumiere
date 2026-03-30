import { motion } from 'framer-motion';

export const CTABanner = () => {
  return (
    <section id="contact" className="bg-luxury-black py-40 px-6 md:px-20 text-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto space-y-16"
      >
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.6em' }}
            transition={{ duration: 1.5 }}
            className="text-gold uppercase font-inter text-[10px] md:text-xs font-bold"
          >
            Your Signature Journey Starts Here
          </motion.p>
          <h2 className="text-5xl md:text-[8rem] font-playfair font-bold text-white tracking-tighter leading-[0.85] italic">
            Let’s create your next statement piece.
          </h2>
          <div className="mx-auto w-32 h-[1px] bg-gold/50 mt-12" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a 
            href="https://wa.me/2347066125117" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <button className="luxury-button bg-white text-luxury-black border-none px-16 py-6 shadow-2xl scale-110">
              <span className="relative z-10">Consult on WhatsApp</span>
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </button>
          </a>
          <a href="mailto:moefashionworld@gmail.com" className="text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[.4em] font-bold border-b border-white/10 pb-2">
            moefashionworld@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/[0.03] text-[20vw] font-playfair font-black select-none pointer-events-none whitespace-nowrap">
        BESPOKE LUXURY
      </div>
    </section>
  );
};
