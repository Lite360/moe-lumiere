import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import logo from '../assets/images/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Services', href: '#services' },
    { name: 'Collection', href: '#collection' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 flex justify-between items-center ${
          isScrolled || isMobileMenuOpen ? 'glass-navbar py-4 shadow-sm text-luxury-black' : 'bg-transparent py-8 text-white'
        }`}
      >
        <div className="flex-1">
          <a href="/">
            <img 
              src={logo} 
              alt="Moe Lumiere" 
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'}`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-inter text-[10px] tracking-[.4em] uppercase items-center">
          {navLinks.map((item) => (
            <motion.a 
              key={item.name}
              href={item.href} 
              className="hover:text-gold transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ease-out group-hover:w-full" />
            </motion.a>
          ))}
          <div className="flex items-center gap-8 pl-8 border-l border-luxury-black/10 transition-colors ml-4">
             <Search size={18} className="cursor-pointer hover:text-gold transition-all duration-300 hover:scale-110" />
             <div className="relative group">
                <ShoppingBag size={18} className="cursor-pointer hover:text-gold transition-all duration-300 hover:scale-110" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[8px] flex items-center justify-center rounded-full font-bold">0</span>
             </div>
          </div>
          <a 
            href="https://wa.me/2347066125117" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group ml-8"
          >
            <button className="luxury-button text-white border-none">
              <span className="relative z-10">Concierge</span>
              <div className="absolute inset-0 bg-luxury-black transform scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-right" />
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-6">
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className={`p-2 transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
           >
             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-luxury-white flex flex-col pt-32 px-10"
          >
             <div className="flex flex-col gap-8">
               {navLinks.map((link, idx) => (
                 <motion.a
                   key={link.name}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 * idx + 0.3 }}
                   href={link.href}
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-4xl font-playfair font-bold text-luxury-black hover:text-gold transition-colors flex items-center gap-4"
                 >
                   <span className="text-xs font-inter text-gold/40 tracking-widest">0{idx + 1}</span>
                   {link.name}
                 </motion.a>
               ))}
             </div>

             <div className="mt-auto mb-20 space-y-10">
               <div className="h-[1px] w-full bg-grey-light" />
               <div className="flex justify-between items-end">
                 <div className="space-y-4">
                    <p className="text-[10px] font-inter uppercase tracking-[.4em] text-gold font-bold">Follow Our Journey</p>
                    <div className="flex gap-6">
                       <Instagram className="text-luxury-black hover:text-gold transition-colors cursor-pointer" />
                       <MessageCircle className="text-luxury-black hover:text-gold transition-colors cursor-pointer" />
                    </div>
                 </div>
                 <a 
                   href="https://wa.me/2347066125117" 
                   target="_blank" 
                   rel="noopener noreferrer"
                 >
                   <button className="px-8 py-4 bg-luxury-black text-white uppercase text-[10px] tracking-[.3em] font-bold">
                      Book Service
                   </button>
                 </a>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
