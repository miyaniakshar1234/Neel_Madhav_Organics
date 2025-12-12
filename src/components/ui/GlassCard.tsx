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
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, hoverEffect = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hoverEffect ? { scale: 1.01, boxShadow: "0 0 15px rgba(0, 255, 157, 0.2)" } : {}}
      className={cn(
        "glass-panel rounded-xl p-6 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-agro-green/30 to-transparent opacity-50" />
      {children}
    </motion.div>
  );
};
