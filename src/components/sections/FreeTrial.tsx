import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';

export function FreeTrial() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden bg-brand-black flex items-center justify-center text-center">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-brand-black/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop" 
          alt="Gym Free Trial" 
          className="w-full h-full object-cover object-center grayscale opacity-50"
        />
      </motion.div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase leading-[0.9] text-white mb-8"
        >
          Your First 7 Days.<br/><span className="text-brand-accent">On Us.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-12"
        >
          Experience the facility, meet our coaches and discover how we train.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button size="lg" className="px-12">Claim Your Free Trial</Button>
        </motion.div>
      </div>
    </section>
  );
}
