import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  variant = 'primary',
  className,
  icon,
  ...props
}) => {
  const variants = {
    primary: "border-agro-green text-agro-green hover:bg-agro-green hover:text-black shadow-[0_0_10px_rgba(0,255,157,0.2)] hover:shadow-neon-green",
    secondary: "border-agro-blue text-agro-blue hover:bg-agro-blue hover:text-black shadow-[0_0_10px_rgba(0,210,255,0.2)] hover:shadow-neon-blue",
    danger: "border-agro-accent text-agro-accent hover:bg-agro-accent hover:text-white shadow-[0_0_10px_rgba(255,0,85,0.2)] hover:shadow-[0_0_20px_rgba(255,0,85,0.4)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center justify-center gap-2 px-6 py-2 rounded-lg border font-semibold transition-all duration-300 uppercase tracking-wider text-sm",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </motion.button>
  );
};
