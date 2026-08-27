import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Quote } from 'lucide-react';

export function Results() {
  return (
    <section className="py-24 lg:py-32 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          title="The Work\nChanges You." 
          subtitle="Testimonials"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-black p-10 relative border-t-2 border-transparent hover:border-brand-accent transition-colors duration-500"
            >
              <Quote size={40} className="text-brand-surface-hover absolute top-10 right-10" />
              
              <div className="mb-8 relative z-10 pt-4">
                <p className="text-brand-text text-lg leading-relaxed font-light italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="mt-auto relative z-10">
                <p className="font-display font-bold uppercase tracking-widest text-brand-accent text-lg">
                  {testimonial.name}
                </p>
                <p className="text-brand-muted text-sm">
                  Age {testimonial.age}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large text in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-display font-bold text-brand-black opacity-30 select-none whitespace-nowrap z-0 overflow-hidden w-full leading-none pointer-events-none">
        RESULTS MATTER
      </div>
    </section>
  );
}
