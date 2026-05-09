import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Content */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <img 
            src="/assets/hero-orb.png" 
            alt="Chloe AI Neural Core" 
            className="w-full h-full object-contain mix-blend-lighten animate-float"
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full text-eco-neon">
            Intelligence Architecture v1.0
          </span>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
            Chloe <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-neon to-cyan-neon">AI</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/60 mb-8 tracking-tight">
            Powered by <span className="text-white font-medium">LYT-G1</span> — Layered Yield Technology
          </p>
          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed">
            Chloe AI is an adaptive environmental intelligence system designed to analyze waste materials, generate sustainable reuse solutions, and optimize ecological participation through advanced multi-model AI orchestration.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#what-is-chloe" className="px-8 py-4 bg-eco-neon text-charcoal-900 font-bold rounded-full hover:bg-white transition-colors duration-300 flex items-center gap-2">
            Explore LYT-G1 <Cpu size={18} />
          </a>
          <a href="#simulation" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 backdrop-blur-md">
            View Chloe Intelligence <Globe size={18} />
          </a>
          <a href="#architecture" className="px-8 py-4 bg-transparent text-white/60 font-bold rounded-full hover:text-white transition-colors duration-300 flex items-center gap-2">
            Analyze Architecture <Zap size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-eco-neon" />
        </motion.div>
      </motion.div>

      {/* Data Streams Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-eco-neon/50"
            style={{ 
              top: `${20 + i * 15}%`, 
              left: '-100%', 
              width: '50%',
              opacity: 0.2
            }}
            animate={{ left: '200%' }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5 
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
