import { motion } from 'framer-motion';
import { Scissors, ShoppingBag, Sparkles } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: "01",
    title: "Bespoke Couture",
    description: "One-of-a-kind creations tailored to your exact measurements. A fusion of biotech precision and cultural artistry.",
    icon: <Scissors size={24} />,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Luxe Standard",
    description: "Our signature ready-to-wear essentials. Timeless silhouettes crafted with the finest local and imported fabrics.",
    icon: <ShoppingBag size={24} />,
    image: "https://images.unsplash.com/photo-1445205170230-053b830c60f5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Personal Image",
    description: "Exclusive styling and image consulting. We don't just dress you; we curate your personal brand statement.",
    icon: <Sparkles size={24} />,
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2000&auto=format&fit=crop"
  },
];

export const Services = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="bg-luxury-black text-white py-40 px-6 md:px-20 relative overflow-hidden">
      {/* Background Image Reveal */}
      {services.map((service, index) => (
        <div 
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${hoveredIdx === index ? 'opacity-20 translate-y-0 scale-105' : 'opacity-0 translate-y-10 scale-100'}`}
          style={{ 
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black z-0 pointer-events-none" />

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8"
        >
          <div className="space-y-6">
            <p className="text-gold uppercase tracking-[.6em] font-inter text-xs">Excellence Defined</p>
            <h2 className="text-5xl md:text-8xl font-playfair font-bold leading-tight">
              Refined <br /> <span className="italic text-gold/80">Offerings.</span>
            </h2>
          </div>
          <div className="md:max-w-xs text-grey-medium font-inter text-sm tracking-widest leading-relaxed uppercase">
            Every thread woven with purpose. Every design a testament to our commitment to excellence.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative p-16 bg-luxury-black hover:bg-transparent transition-all duration-700 cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-white/10"
            >
              <div className="relative z-10 space-y-10">
                <span className="block text-gold/30 font-playfair italic text-6xl group-hover:text-gold transition-colors duration-500">
                  {service.id}
                </span>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 border border-gold/30 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-playfair font-bold tracking-wide">{service.title}</h3>
                  </div>
                  
                  <p className="font-inter text-grey-medium leading-relaxed font-light group-hover:text-white transition-colors duration-500 text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="pt-10">
                   <button className="flex items-center gap-4 text-[10px] uppercase tracking-[.4em] font-bold text-gold group-hover:gap-8 transition-all duration-500">
                      Learn More <div className="w-8 h-[1px] bg-gold" />
                   </button>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold/0 group-hover:border-gold/30 transition-all duration-700 m-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
