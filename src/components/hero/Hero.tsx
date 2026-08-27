import React, { useRef, useState, useEffect } from 'react';
import { useMotionValue, useSpring, useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import { HeroBackground } from './HeroBackground';
import { DynamicImageLayer } from './DynamicImageLayer';
import { EnergyNetwork } from './EnergyNetwork';
import { HeroTypography } from './HeroTypography';
import { InteractiveNodes } from './InteractiveNodes';
import { MagneticCursor } from './MagneticCursor';
import { HeroCTA } from './HeroCTA';
import { LoadingOverlay } from './LoadingOverlay';
import { nodes } from './nodesData';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });
  
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Auto-cycle through nodes to create a "video-like" presentation when idle
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovering && !showLoader) {
      interval = setInterval(() => {
        setActiveNode(prev => {
          if (!prev) return nodes[0].id;
          const currentIndex = nodes.findIndex(n => n.id === prev);
          return nodes[(currentIndex + 1) % nodes.length].id;
        });
      }, 3500); // Crossfade image and activate node every 3.5s
    }
    return () => clearInterval(interval);
  }, [isHovering, showLoader]);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
  const yNetwork = useTransform(scrollY, [0, 800], [0, 100]);
  const scrollBridgeScale = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    const timeoutId = setTimeout(updateSize, 100);
    return () => {
      window.removeEventListener('resize', updateSize);
      clearTimeout(timeoutId);
    };
  }, [showLoader]);

  const updateMousePosition = (x: number, y: number) => {
    mouseX.set(x);
    mouseY.set(y);

    let closestNode = null;
    let minDistance = 150;

    nodes.forEach(node => {
      const nodePxX = (node.x / 100) * containerSize.width;
      const nodePxY = (node.y / 100) * containerSize.height;
      const dist = Math.sqrt(Math.pow(x - nodePxX, 2) + Math.pow(y - nodePxY, 2));
      
      if (dist < minDistance) {
        minDistance = dist;
        closestNode = node.id;
      }
    });

    setActiveNode(closestNode);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || showLoader) return;
    const rect = containerRef.current.getBoundingClientRect();
    updateMousePosition(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || showLoader) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    updateMousePosition(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && <LoadingOverlay onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>

      <section 
        ref={containerRef}
        className="hero-print-fix relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-[#070707] md:cursor-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setActiveNode(null);
        }}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => {
          setIsHovering(false);
          setActiveNode(null);
        }}
      >
        <HeroBackground />
        
        {!showLoader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <DynamicImageLayer activeNode={activeNode} />
            
            <motion.div style={{ y: yNetwork }} className="absolute inset-0 w-full h-full">
              <EnergyNetwork 
                mouseX={smoothMouseX} 
                mouseY={smoothMouseY} 
                containerSize={containerSize} 
                activeNode={activeNode}
                isHovering={isHovering}
              />
              <InteractiveNodes activeNode={activeNode} />
            </motion.div>

            <motion.div 
              style={{ y: yText, opacity: opacityText }} 
              className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <HeroTypography />
            </motion.div>
            
            <HeroCTA />
            
            {isHovering && (
              <MagneticCursor mouseX={smoothMouseX} mouseY={smoothMouseY} />
            )}
            
            <motion.div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-16 md:h-24 bg-gradient-to-b from-[#FF5A1F] to-transparent z-10 origin-top"
              style={{ scaleY: scrollBridgeScale }}
            />
          </motion.div>
        )}
      </section>
    </>
  );
}
