import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, hoverGlow = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        "glass p-6 group relative overflow-hidden",
        hoverGlow && "glass-hover",
        className
      )}
    >
      {/* Internal Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-eco-neon/30 transition-colors duration-500 rounded-tr-2xl" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
