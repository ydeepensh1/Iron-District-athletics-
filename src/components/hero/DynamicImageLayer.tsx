import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { nodes } from './nodesData';

// Cinematic default image of an athlete working out to ground the scene
const defaultHeroImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop';

export function DynamicImageLayer({ activeNode }: { activeNode: string | null }) {
  const activeImageData = nodes.find(n => n.id === activeNode);
  const currentImage = activeImageData ? activeImageData.image : defaultHeroImage;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 2. Gym image/video layer */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={currentImage}
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          animate={{ 
            opacity: activeNode ? 0.85 : 0.75, // Significantly higher visibility (75-85%)
            scale: activeNode ? 1.02 : 1, // Subtle scale up on node proximity
            filter: activeNode ? 'blur(0px) contrast(1.05)' : 'blur(0px) contrast(1)',
          }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* 3. Cinematic gradient (localized for typography readability without obscuring the image) */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(7,7,7,0.20) 0%, rgba(7,7,7,0.45) 50%, rgba(7,7,7,0.35) 100%)`
        }}
      />
      
      {/* Subtly darker area specifically localized behind the main typography */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, rgba(7,7,7,0.45) 0%, transparent 60%)`
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(7,7,7,0.25) 0%, transparent 20%, transparent 80%, rgba(7,7,7,0.25) 100%)`
        }}
      />

      {/* 4. Subtle particles / grain layer to bind the composition */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
