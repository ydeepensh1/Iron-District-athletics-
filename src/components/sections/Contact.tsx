import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeader 
              title="Start Your\nJourney." 
              subtitle="Contact Us"
            />
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-display tracking-widest uppercase text-brand-muted text-xs">First Name</label>
                  <input type="text" id="firstName" className="bg-brand-black border border-brand-surface-hover text-brand-text px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-display tracking-widest uppercase text-brand-muted text-xs">Last Name</label>
                  <input type="text" id="lastName" className="bg-brand-black border border-brand-surface-hover text-brand-text px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-display tracking-widest uppercase text-brand-muted text-xs">Email</label>
                <input type="email" id="email" className="bg-brand-black border border-brand-surface-hover text-brand-text px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-display tracking-widest uppercase text-brand-muted text-xs">Phone</label>
                <input type="tel" id="phone" className="bg-brand-black border border-brand-surface-hover text-brand-text px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="font-display tracking-widest uppercase text-brand-muted text-xs">Fitness Goal</label>
                <select id="goal" defaultValue="" className="bg-brand-black border border-brand-surface-hover text-brand-text px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select an option</option>
                  <option value="muscle">Build Muscle</option>
                  <option value="fat">Lose Fat</option>
                  <option value="stronger">Get Stronger</option>
                  <option value="fitness">Improve Fitness</option>
                  <option value="performance">Athletic Performance</option>
                  <option value="beginner">Beginner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" size="lg" className="mt-4">Start My Journey</Button>
            </motion.form>
          </div>

          <div className="relative flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video lg:aspect-auto lg:h-[400px] w-full relative group cursor-pointer overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3270&auto=format&fit=crop" 
                alt="Location"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-80 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-brand-black/50 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-accent text-white p-4 rounded-full">
                  <MapPin size={32} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-col md:flex-row gap-8 justify-between border-t border-brand-surface-hover pt-8"
            >
              <div>
                <h4 className="font-display font-bold uppercase text-brand-text text-xl mb-4">Location</h4>
                <p className="text-brand-muted text-sm leading-relaxed">
                  1201 South Congress Avenue<br/>
                  Austin, TX 78704<br/>
                  United States
                </p>
                <a href="#" className="inline-block mt-4 text-brand-accent font-display tracking-widest text-sm uppercase hover:text-white transition-colors">
                  Get Directions →
                </a>
              </div>
              
              <div>
                <h4 className="font-display font-bold uppercase text-brand-text text-xl mb-4">Hours</h4>
                <ul className="text-brand-muted text-sm leading-relaxed space-y-2">
                  <li><span className="text-brand-text">Mon-Fri:</span> 5:00 AM — 11:00 PM</li>
                  <li><span className="text-brand-text">Saturday:</span> 6:00 AM — 9:00 PM</li>
                  <li><span className="text-brand-text">Sunday:</span> 7:00 AM — 7:00 PM</li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
