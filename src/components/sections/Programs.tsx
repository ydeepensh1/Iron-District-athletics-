import React from 'react';
import { motion } from 'motion/react';
import { programs } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Ways To Train." 
          subtitle="Our Programs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block relative border border-brand-surface bg-brand-surface p-8 transition-all duration-300 hover:border-brand-accent cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-display font-bold text-brand-black transition-colors duration-300 group-hover:text-brand-accent/10 z-0">
                {program.id}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold uppercase mb-4 mt-8 group-hover:text-brand-accent transition-colors">
                  {program.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {program.description}
                </p>
              </div>
              
              <div className="mt-8 relative z-10 flex items-center text-sm font-display tracking-widest text-brand-text group-hover:text-brand-accent uppercase transition-colors">
                <span className="mr-2">Learn More</span>
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
