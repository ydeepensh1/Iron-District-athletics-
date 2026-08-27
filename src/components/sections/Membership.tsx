import React from 'react';
import { motion } from 'motion/react';
import { memberships } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Membership() {
  return (
    <section id="membership" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Join The\nDistrict." 
          subtitle="Memberships"
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {memberships.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative bg-brand-black p-8 md:p-10 border transition-all duration-300 flex flex-col h-full",
                plan.isPopular 
                  ? "border-brand-accent shadow-2xl lg:scale-105 z-10" 
                  : "border-brand-surface hover:border-brand-muted"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-xs font-display tracking-widest uppercase px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 border-b border-brand-surface pb-8">
                <h3 className="text-2xl font-display font-bold uppercase text-brand-text mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-brand-muted text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-brand-muted text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Select Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
