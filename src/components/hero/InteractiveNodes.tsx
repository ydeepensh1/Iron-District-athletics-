import React from 'react';
import { motion } from 'motion/react';
import { nodes } from './nodesData';

export function InteractiveNodes({ activeNode }: { activeNode: string | null }) {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {nodes.map(node => {
        const isActive = activeNode === node.id;
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <motion.div
              animate={{
                scale: isActive ? 2 : 1,
                opacity: isActive ? 1 : 0.3,
                boxShadow: isActive ? '0 0 25px rgba(255, 90, 31, 0.6)' : 'none',
              }}
              transition={{ duration: 0.4 }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"
            />
            <motion.div
              animate={{
                opacity: isActive ? 1 : 0.15,
                y: isActive ? 0 : 5,
              }}
              transition={{ duration: 0.4 }}
              className="mt-3 text-center"
            >
              <div className="text-[10px] md:text-xs tracking-[0.25em] text-[#F4F1EA] font-display uppercase">{node.label}</div>
              <motion.div 
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  height: isActive ? 'auto' : 0,
                  marginTop: isActive ? '4px' : '0px'
                }}
                className="text-[#FF5A1F] text-[8px] md:text-[10px] tracking-[0.2em] font-display uppercase overflow-hidden"
              >
                {node.microCopy}
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
