import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';

export function Community() {
  const list = [
    'Weekend training',
    'Fitness challenges',
    'Strength competitions',
    'Community workouts',
    'Member events',
    'Charity workouts'
  ];

  return (
    <section className="py-24 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <SectionHeader 
              title="Train Together.\nGet Stronger\nTogether." 
              subtitle="Community" 
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-muted text-lg leading-relaxed mb-12"
            >
              We believe that who you train with matters just as much as how you train. Iron District is built on a foundation of supportive, hard-working individuals pushing each other to be better.
            </motion.p>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {list.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="font-display uppercase tracking-widest text-brand-text text-sm flex items-center gap-3 border-b border-brand-surface pb-4"
                >
                  <span className="text-brand-accent">/</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
