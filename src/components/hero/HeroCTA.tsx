import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, ArrowRight } from 'lucide-react';

export function MagneticButton({ children, className, onClick }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function HeroCTA() {
  const scrollToNext = () => {
    // Assuming next section has an id like 'about' or we just scroll down
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex flex-col sm:flex-row gap-4 w-[90%] sm:w-auto justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <MagneticButton 
          className="group relative w-full sm:w-auto px-8 py-4 bg-[#FF5A1F] text-white font-display uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-white hover:text-[#070707] flex items-center justify-center gap-3 border border-[#FF5A1F]"
          onClick={scrollToNext}
        >
          <Dumbbell className="w-4 h-4 group-hover:text-[#070707] transition-colors" />
          <span className="relative z-10 font-bold">Start Your Free Trial</span>
          <ArrowRight className="w-4 h-4 group-hover:text-[#070707] transition-colors group-hover:translate-x-1 duration-300" />
        </MagneticButton>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <MagneticButton 
          className="group relative w-full sm:w-auto px-8 py-4 border border-[#8A8A8A] text-white font-display uppercase tracking-widest text-sm transition-all hover:border-white flex items-center justify-center"
          onClick={scrollToNext}
        >
          Explore The District
        </MagneticButton>
      </motion.div>
    </div>
  );
}
