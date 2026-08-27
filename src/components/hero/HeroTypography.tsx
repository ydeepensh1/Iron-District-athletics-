import React from 'react';
import { motion } from 'motion/react';

export function HeroTypography() {
  return (
    <div className="text-center z-20 pointer-events-none px-4 flex flex-col items-center">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] blur-xl -z-10" />
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[8.5rem] font-display font-bold uppercase leading-[0.85] tracking-tight text-[#F4F1EA] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          <span className="block">Built For Those</span>
          <span className="block text-[#a3a3a3]">Who Refuse To</span>
          <span className="block">Stay The Same.</span>
        </motion.h1>
      </div>
      
      <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 1 }}
         className="mt-8 text-sm md:text-lg text-[#F4F1EA] max-w-xl mx-auto font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        Built for those who refuse to stay the same.
      </motion.p>
    </div>
  );
}
