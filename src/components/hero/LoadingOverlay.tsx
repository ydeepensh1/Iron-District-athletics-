import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function LoadingOverlay({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#070707] flex flex-col items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
       <div className="relative flex flex-col items-center justify-center h-full w-full">
         <motion.div
           initial={{ scaleX: 0, opacity: 0 }}
           animate={{ scaleX: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="w-32 md:w-64 h-[1px] bg-[#FF5A1F] absolute"
         />
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 font-display tracking-[0.4em] text-white text-sm md:text-lg uppercase"
         >
           Iron District
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-2 text-[#8A8A8A] text-xs tracking-widest uppercase"
         >
           Train With Purpose.
         </motion.div>
       </div>
    </motion.div>
  );
}
