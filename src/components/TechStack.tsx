import React from 'react';
import { motion } from 'framer-motion';


const technologies = [
  { name: 'Gemini', role: 'Multimodal Reasoning', color: 'border-eco-neon/30' },
  { name: 'OpenRouter', role: 'Intelligence Orchestration', color: 'border-cyan-neon/30' },
  { name: 'Groq', role: 'Inference Acceleration', color: 'border-eco-neon/30' },
  { name: 'SambaNova', role: 'Enterprise AI Compute', color: 'border-cyan-neon/30' },
  { name: 'Mistral', role: 'Adaptive Models', color: 'border-eco-neon/30' },
  { name: 'Cerebras', role: 'Wafer-Scale AI', color: 'border-cyan-neon/30' },
  { name: 'Supabase', role: 'Secure Data Infrastructure', color: 'border-eco-neon/30' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
        <p className="text-white/40">Integrated systems powering the environmental intelligence layer.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`glass px-8 py-6 flex flex-col items-center justify-center min-w-[200px] border-b-2 ${tech.color}`}
          >
            <div className="text-xl font-bold text-white mb-1">{tech.name}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">{tech.role}</div>
          </motion.div>
        ))}
      </div>

      {/* Floating labels requirement */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {[
          'Fallback Intelligence', 'Adaptive Routing', 'Quota Optimization', 
          'Neural Acceleration', 'Environmental Intelligence', 'Low-Latency Processing'
        ].map((label, i) => (
          <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] uppercase tracking-widest text-white/40">
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
