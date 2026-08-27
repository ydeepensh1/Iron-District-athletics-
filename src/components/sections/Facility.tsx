import React from 'react';
import { motion } from 'motion/react';
import { facilities } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

export function Facility() {
  return (
    <section id="facility" className="py-24 lg:py-32 bg-brand-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Enter The\nDistrict." 
          subtitle="Our Facility"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[500px] lg:h-[600px] w-full overflow-hidden flex flex-col justify-end p-8 cursor-pointer rounded-sm bg-brand-black"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:-translate-y-4">
                <span className="text-brand-accent font-display tracking-widest text-sm mb-4 block">
                  {facility.id}
                </span>
                <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">
                  {facility.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-out">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
