import React from 'react';
import { motion } from 'framer-motion';

const NeuralGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-charcoal-900">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-neural-grid opacity-20" />
      
      {/* Animated Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-eco-neon/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-neon/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 
          }}
          animate={{ 
            y: [null, '-100vh'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
      
      {/* Scan Lines */}
      <div className="neural-line opacity-10" />
    </div>
  );
};

export default NeuralGrid;
