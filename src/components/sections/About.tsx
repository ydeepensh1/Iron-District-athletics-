import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { stats } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayValue(Math.floor(easeProgress * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-accent truncate">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop" 
                  alt="Training floor"
                  className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -right-10 w-2/3 aspect-square border-8 border-brand-black hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=3270&auto=format&fit=crop" 
                  alt="Detail"
                  className="w-full h-full object-cover rounded-sm"
                />
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader 
              title="This isn't\njust a gym." 
              subtitle="Our Philosophy" 
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-muted text-lg md:text-xl leading-relaxed mb-16"
            >
              IRON DISTRICT ATHLETICS combines serious strength equipment, expert coaching, performance training, recovery and a community built around measurable progress. We are built for those who refuse to stay the same.
            </motion.p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col min-w-0"
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <span className="text-brand-muted font-display tracking-widest uppercase text-xs sm:text-sm mt-1 sm:mt-2 truncate">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
