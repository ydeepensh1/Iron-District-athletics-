import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

export function PersonalTraining() {
  const benefits = [
    'Personalized workouts',
    'Exercise technique coaching',
    'Progress tracking',
    'Goal setting',
    'Regular assessments'
  ];

  return (
    <section className="py-24 lg:py-32 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=3270&auto=format&fit=crop" 
                alt="Personal Training"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-display tracking-widest text-sm uppercase mb-4"
            >
              1-ON-1 COACHING
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8"
            >
              ONE COACH.<br/>ONE PLAN.<br/>YOUR GOALS.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-muted text-lg mb-8"
            >
              Stop guessing. Get a structured plan designed specifically for your body, your lifestyle, and your goals, executed alongside a world-class coach.
            </motion.p>

            <ul className="flex flex-col gap-4 mb-12">
              {benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 text-brand-text"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <Check size={14} />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg">Meet Our Coaches</Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
