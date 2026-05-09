import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, Layers, Workflow, Radio, Brain, Zap } from 'lucide-react';
import GlassCard from './GlassCard';

const models = [
  { name: 'Gemini', role: 'Advanced Reasoning & Multimodal Intelligence', icon: Brain },
  { name: 'Groq', role: 'Ultra-fast Inference & Low-latency Processing', icon: Zap },
  { name: 'SambaNova', role: 'High-performance AI Acceleration', icon: Cpu },
  { name: 'Mistral', role: 'Lightweight Adaptive Language Intelligence', icon: Radio },
  { name: 'Cerebras', role: 'Large-scale Neural Computation', icon: Layers },
  { name: 'OpenRouter', role: 'Intelligent Model Routing & Fallback', icon: Network },
];

const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 px-6 relative bg-charcoal-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            LYT-G1 Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-lg max-w-3xl mx-auto"
          >
            Layered Yield Technology Generation 1 combines multiple AI systems into one adaptive intelligence layer, dynamically routing tasks based on complexity and speed requirements.
          </motion.p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative h-[600px] mb-20 flex items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40">
          {/* Central Hub */}
          <motion.div 
            animate={{ 
              boxShadow: ['0 0 20px rgba(204, 255, 0, 0.2)', '0 0 60px rgba(204, 255, 0, 0.4)', '0 0 20px rgba(204, 255, 0, 0.2)'] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-20 w-48 h-48 rounded-full bg-charcoal-900 border-2 border-eco-neon flex flex-col items-center justify-center text-center p-4 shadow-2xl shadow-eco-neon/20"
          >
            <Workflow size={40} className="text-eco-neon mb-2" />
            <span className="text-xl font-bold text-white">LYT-G1</span>
            <span className="text-[10px] uppercase tracking-widest text-eco-neon/60">Core Routing</span>
          </motion.div>

          {/* Model Nodes */}
          {models.map((model, i) => {
            const angle = (i * 360) / models.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={model.name}>
                {/* Connecting Line */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  className="absolute z-10 h-0.5 bg-gradient-to-r from-eco-neon to-transparent origin-left"
                  style={{ 
                    width: radius,
                    left: '50%',
                    top: '50%',
                    rotate: `${angle}deg`
                  }}
                />
                
                {/* Pulsing Signal on Line */}
                <motion.div
                  animate={{ 
                    x: [0, x],
                    y: [0, y],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute z-20 w-1.5 h-1.5 rounded-full bg-eco-neon shadow-[0_0_12px_#ccff00]"
                  style={{ 
                    left: '50%', 
                    top: '50%',
                    marginLeft: '-3px',
                    marginTop: '-3px'
                  }}
                />

                {/* Model Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="absolute z-30 w-32 p-3 rounded-xl bg-charcoal-800 border border-white/10 text-center"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <model.icon size={20} className="mx-auto mb-2 text-cyan-neon" />
                  <div className="text-xs font-bold text-white mb-1">{model.name}</div>
                  <div className="text-[8px] text-white/40 leading-tight uppercase tracking-tighter">{model.role}</div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Component breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Layered', desc: 'Multi-stage AI reasoning architecture' },
            { label: 'Yield', desc: 'Optimized environmental output generation' },
            { label: 'Technology', desc: 'Adaptive intelligence orchestration framework' },
            { label: 'Generation 1', desc: 'First-gen sustainability intelligence core' },
          ].map((item, i) => (
            <GlassCard key={i} className="text-center py-8">
              <div className="text-eco-neon font-bold text-2xl mb-2">{item.label}</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">{item.desc}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
