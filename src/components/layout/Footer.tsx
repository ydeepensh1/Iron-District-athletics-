import React from 'react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-surface pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-accent flex items-center justify-center -skew-x-12">
                <span className="font-display font-bold text-white text-xl tracking-tighter skew-x-12">ID</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-display font-bold tracking-[0.2em] uppercase leading-none text-brand-text">
                  Iron District
                </span>
                <span className="text-[10px] font-display tracking-[0.4em] uppercase text-brand-accent mt-1 leading-none">
                  Athletics
                </span>
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              "Train With Purpose. Live With Power."
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'TikTok', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-brand-muted hover:text-brand-accent text-sm font-semibold tracking-wider uppercase transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display tracking-widest uppercase mb-6 text-brand-text">Explore</h3>
            <ul className="flex flex-col gap-3">
              {['About', 'Programs', 'Trainers', 'Membership', 'Schedule', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-brand-muted hover:text-brand-text transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display tracking-widest uppercase mb-6 text-brand-text">Contact</h3>
            <ul className="flex flex-col gap-3 text-brand-muted">
              <li>1201 South Congress Avenue</li>
              <li>Austin, TX 78704</li>
              <li className="mt-4">(512) 555-0187</li>
              <li>hello@irondistrictathletics.com</li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-lg font-display tracking-widest uppercase mb-6 text-brand-text">Hours</h3>
             <ul className="flex flex-col gap-3 text-brand-muted">
              <li><span className="text-brand-text block text-sm mb-1 uppercase tracking-wider font-semibold">Monday - Friday</span> 5:00 AM — 11:00 PM</li>
              <li className="mt-2"><span className="text-brand-text block text-sm mb-1 uppercase tracking-wider font-semibold">Saturday</span> 6:00 AM — 9:00 PM</li>
              <li className="mt-2"><span className="text-brand-text block text-sm mb-1 uppercase tracking-wider font-semibold">Sunday</span> 7:00 AM — 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-surface pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Iron District Athletics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
