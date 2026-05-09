import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Brain, RefreshCw, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

const capabilities = [
  {
    title: "Vision Intelligence",
    description: "Advanced plastic recognition and material composition analysis using real-time multimodal scanning.",
    icon: Eye,
    color: "text-eco-neon"
  },
  {
    title: "Environmental Reasoning",
    description: "Intelligent ecological impact assessment and sustainability scoring for waste materials.",
    icon: Brain,
    color: "text-cyan-neon"
  },
  {
    title: "Reuse Optimization",
    description: "Generation of high-fidelity reuse blueprints and creative transformation workflows.",
    icon: RefreshCw,
    color: "text-eco-neon"
  },
  {
    title: "Impact Calculation",
    description: "Real-time carbon reduction estimation and environmental savings verification.",
    icon: BarChart3,
    color: "text-cyan-neon"
  },
  {
    title: "Verification Systems",
    description: "Blockchain-ready verification of sustainability participation and authentic transformation.",
    icon: ShieldCheck,
    color: "text-eco-neon"
  },
  {
    title: "Ecological Intelligence",
    description: "Adaptive learning system that optimizes sustainability workflows based on user interactions.",
    icon: Zap,
    color: "text-cyan-neon"
  }
];

const WhatIsChloe: React.FC = () => {
  return (
    <section id="what-is-chloe" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-eco-neon text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
        >
          Environmental Intelligence Assistant
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          The Core of Next-Gen <br />Sustainability
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/40 max-w-2xl text-lg leading-relaxed"
        >
          Chloe AI isn't just a chatbot; it's a multi-layered ecosystem designed for planetary-scale waste management and intelligent ecological participation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => (
          <GlassCard key={i} delay={i * 0.1}>
            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${cap.color}`}>
              <cap.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {cap.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default WhatIsChloe;
