import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROGRAMS', href: '#programs' },
  { name: 'TRAINERS', href: '#trainers' },
  { name: 'MEMBERSHIP', href: '#membership' },
  { name: 'SCHEDULE', href: '#schedule' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 print:absolute print:bg-transparent print:shadow-none",
          isScrolled ? "bg-brand-black/95 backdrop-blur-md py-3 md:py-4 shadow-xl" : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-accent flex items-center justify-center -skew-x-12 group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-bold text-white text-lg md:text-xl tracking-tighter skew-x-12">ID</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-xl font-display font-bold tracking-[0.2em] uppercase leading-none text-white">
                Iron District
              </span>
              <span className="text-[9px] md:text-[10px] font-display tracking-[0.4em] uppercase text-brand-accent mt-1 leading-none">
                Athletics
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wider text-brand-muted hover:text-brand-text transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="sm">Start Free Trial</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-text p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                className="text-brand-text p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-3xl font-display font-bold tracking-widest text-brand-text hover:text-brand-accent transition-colors uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button size="lg" onClick={() => setIsMobileMenuOpen(false)}>Start Free Trial</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
