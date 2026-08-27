import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dumbbell';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-display tracking-wider uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-black disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-brand-accent text-white hover:bg-brand-accent-hover',
      secondary: 'bg-brand-surface text-brand-text hover:bg-white hover:text-brand-black',
      outline: 'border border-brand-muted text-brand-text hover:border-brand-text',
      ghost: 'text-brand-text hover:text-brand-accent',
      dumbbell: 'bg-brand-black border-y-2 border-brand-accent border-x-[12px] md:border-x-[16px] border-x-brand-accent text-white hover:bg-brand-accent hover:text-brand-black hover:border-x-brand-text hover:border-y-brand-accent transition-all duration-300',
    };
    
    const sizes = {
      sm: 'h-10 px-6 text-sm',
      md: 'h-14 px-8 text-base',
      lg: 'h-16 px-12 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
