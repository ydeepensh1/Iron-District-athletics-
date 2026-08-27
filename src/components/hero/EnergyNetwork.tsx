import React from 'react';
import { motion, MotionValue } from 'motion/react';
import { nodes } from './nodesData';

interface EnergyNetworkProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  containerSize: { width: number; height: number };
  activeNode: string | null;
  isHovering: boolean;
}

const nodeConnections = [
  ['strength', 'power'],
  ['power', 'performance'],
  ['performance', 'community'],
  ['community', 'recovery'],
  ['recovery', 'strength'],
  ['strength', 'performance'],
];

export function EnergyNetwork({ mouseX, mouseY, containerSize, activeNode, isHovering }: EnergyNetworkProps) {
  return (
    <svg className="absolute inset-0 z-10 pointer-events-none" width="100%" height="100%">
      {/* Idle connections */}
      {nodeConnections.map(([id1, id2]) => {
        const n1 = nodes.find(n => n.id === id1)!;
        const n2 = nodes.find(n => n.id === id2)!;
        return (
          <line
            key={`idle-${id1}-${id2}`}
            x1={`${n1.x}%`}
            y1={`${n1.y}%`}
            x2={`${n2.x}%`}
            y2={`${n2.y}%`}
            stroke="#FF5A1F"
            strokeWidth={0.5}
            strokeOpacity={0.08}
          />
        );
      })}

      {/* Active connections to cursor */}
      {nodes.map(node => {
        const nodeX = (node.x / 100) * containerSize.width;
        const nodeY = (node.y / 100) * containerSize.height;
        const isActive = activeNode === node.id;
        
        return (
          <motion.line
            key={`active-${node.id}`}
            x1={mouseX}
            y1={mouseY}
            x2={nodeX}
            y2={nodeY}
            stroke="#FF5A1F"
            strokeWidth={isActive ? 1.5 : 0.5}
            animate={{
              opacity: isHovering && isActive ? 0.8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </svg>
  );
}
