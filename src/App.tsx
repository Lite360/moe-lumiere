import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Collection } from './components/Collection';
import { BrandStatement } from './components/BrandStatement';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-inter selection:bg-gold selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative z-10">
          <About />
          <Services />
          <BrandStatement />
          <Collection />
          <CTABanner />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
