import React from 'react';
import { motion } from 'motion/react';
import { galleryImages } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Inside The\nDistrict." 
          subtitle="Gallery"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.category}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-display font-bold text-2xl tracking-widest text-white uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
