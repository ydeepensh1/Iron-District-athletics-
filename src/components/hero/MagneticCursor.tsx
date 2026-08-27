import React from 'react';
import { motion, MotionValue } from 'motion/react';

export function MagneticCursor({ mouseX, mouseY }: { mouseX: MotionValue<number>, mouseY: MotionValue<number> }) {
  return (
    <div className="hidden md:block">
      <motion.div
        className="absolute w-2 h-2 bg-[#FF5A1F] rounded-full pointer-events-none z-[100] mix-blend-screen shadow-[0_0_10px_rgba(255,90,31,0.8)]"
        style={{ left: mouseX, top: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="absolute w-10 h-10 border border-[#FF5A1F] rounded-full pointer-events-none z-[99] mix-blend-screen opacity-40"
        style={{ left: mouseX, top: mouseY, translateX: '-50%', translateY: '-50%' }}
        transition={{ type: "spring", damping: 40, stiffness: 300, mass: 0.5 }}
      />
    </div>
  );
}
