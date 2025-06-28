import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ 
  children, 
  className = "", 
  glowColor = "purple" 
}) => {
  return (
    <motion.div
      className={`relative group ${className} rounded-[12px]`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor}-600 to-blue-600 blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 rounded-2xl`} />
      <div className="relative bg-black/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingCard;