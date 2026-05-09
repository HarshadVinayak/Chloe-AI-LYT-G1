import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 relative bg-black text-center overflow-hidden">
      <div className="absolute inset-0 bg-neural-grid opacity-5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10"
      >
        <p className="text-white/40 text-sm tracking-[0.4em] uppercase mb-12">
          The future of sustainability is intelligent participation.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-5xl font-bold tracking-tighter text-white">Chloe AI</h2>
          <div className="text-eco-neon font-bold text-sm tracking-widest uppercase">
            Powered by LYT-G1
          </div>
          <p className="text-white/20 text-[10px] tracking-widest uppercase mt-8">
            Layered Yield Technology — Generation 1
          </p>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-[10px] text-white/10 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Chloe AI Research Labs. All Rights Reserved.
        </div>
      </motion.div>

      {/* Soft pulse background */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-eco-neon/10 blur-[100px] rounded-full"
      />
    </footer>
  );
};

export default Footer;
