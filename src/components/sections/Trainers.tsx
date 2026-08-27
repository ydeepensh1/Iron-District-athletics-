import React from 'react';
import { motion } from 'motion/react';
import { trainers } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export function Trainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="The Experts." 
          subtitle="Our Coaches"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-brand-surface aspect-[3/4]"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-accent font-display tracking-widest text-xs uppercase mb-2 block">
                  {trainer.role}
                </span>
                <h3 className="text-3xl font-display font-bold uppercase text-white mb-2">
                  {trainer.name}
                </h3>
                <p className="text-brand-muted text-sm mb-6">
                  {trainer.experience}
                </p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {trainer.socials.instagram && (
                    <a href={trainer.socials.instagram} className="text-white hover:text-brand-accent transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a href={trainer.socials.twitter} className="text-white hover:text-brand-accent transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {trainer.socials.linkedin && (
                    <a href={trainer.socials.linkedin} className="text-white hover:text-brand-accent transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
