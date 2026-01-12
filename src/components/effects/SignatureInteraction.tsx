import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../motion/Reveal';

interface SignatureInteractionProps {
  type: 'reveal' | 'hover' | 'marquee' | 'smooth-scroll' | 'text-reveal';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  onClick
}) => {
  if (type === 'reveal') {
    return <Reveal className={className}>{children}</Reveal>;
  }

  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden flex ${className}`}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20,
            repeatType: "loop"
          }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
