import { motion } from 'framer-motion';
import { Instagram, Mail, ShieldCheck, MessageCircle } from 'lucide-react';
import logo from '../assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-luxury-white py-24 px-10 md:px-20 border-t border-grey-light">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
        {/* Brand Section */}
        <div className="md:col-span-5 space-y-8">
          <img 
            src={logo} 
            alt="Moe Lumiere" 
            className="h-20 w-auto opacity-100 hover:opacity-80 transition-all duration-500 cursor-pointer" 
          />
          <p className="text-lg font-playfair italic text-luxury-black max-w-sm leading-relaxed">
            Blending African cultural richness with modern elegance. Crafted for those who value timeless style.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-grey-light flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500 text-luxury-black group">
               <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://wa.me/2347066125117" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-grey-light flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500 text-luxury-black group"
            >
               <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-playfair font-bold uppercase tracking-widest text-xs text-gold underline decoration-gold/30 underline-offset-8">Explore</h4>
          <ul className="space-y-4 font-inter text-sm tracking-widest uppercase text-grey-dark">
             <li><a href="#about" className="hover:text-gold transition-colors block">Our Story</a></li>
             <li><a href="#services" className="hover:text-gold transition-colors block">Services</a></li>
             <li><a href="#collection" className="hover:text-gold transition-colors block">Collection</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-playfair font-bold uppercase tracking-widest text-xs text-gold underline decoration-gold/30 underline-offset-8">Concierge</h4>
          <div className="space-y-4 font-inter text-sm leading-relaxed text-grey-dark max-w-xs">
            <p>Our team is available for private styling sessions and custom consultations.</p>
            <a href="mailto:moefashionworld@gmail.com" className="flex items-center gap-3 hover:text-gold transition-colors">
              <Mail size={16} /> moefashionworld@gmail.com
            </a>
            <div className="pt-4 flex flex-col gap-3">
               <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors text-xs uppercase tracking-widest">
                 <ShieldCheck size={14} /> Privacy Policy
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 border-t border-grey-light flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-inter uppercase tracking-[.4em] text-grey-medium">
          © 2024 MOE LUMIÈRE | ALL RIGHTS RESERVED
        </p>
        <p className="text-[10px] font-inter uppercase tracking-[.4em] text-grey-medium opacity-60 italic">
          Designed for Excellence
        </p>
      </div>
    </footer>
  );
};
