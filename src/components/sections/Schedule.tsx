import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { schedules } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '../../lib/utils';

export function Schedule() {
  const [activeDay, setActiveDay] = useState(schedules[0].day);

  const currentSchedule = schedules.find(s => s.day === activeDay);

  return (
    <section id="schedule" className="py-24 lg:py-32 bg-brand-surface">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          title="The Schedule." 
          subtitle="Weekly Classes"
          align="center"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {schedules.map((schedule) => (
            <button
              key={schedule.day}
              onClick={() => setActiveDay(schedule.day)}
              className={cn(
                "px-6 py-3 font-display tracking-widest uppercase text-sm transition-all duration-300 border-b-2",
                activeDay === schedule.day 
                  ? "border-brand-accent text-brand-accent" 
                  : "border-transparent text-brand-muted hover:text-brand-text hover:border-brand-text"
              )}
            >
              {schedule.day}
            </button>
          ))}
        </div>

        <div className="bg-brand-black p-6 md:p-10 rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-brand-surface"
            >
              {currentSchedule?.classes.map((cls, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-4 group">
                  <div className="font-display font-bold text-2xl md:text-3xl text-brand-text group-hover:text-brand-accent transition-colors">
                    {cls.time}
                  </div>
                  <div className="flex-1 md:text-right">
                    <h4 className="text-xl font-display font-bold uppercase text-white mb-1">{cls.name}</h4>
                    <p className="text-brand-muted text-sm">60 Minutes / All Levels</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
