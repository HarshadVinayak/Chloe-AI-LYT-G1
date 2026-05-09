import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const milestones = [
  { era: "G1", title: "Intelligence Core", desc: "Foundation of LYT-G1 multi-model routing and material analysis." },
  { era: "G2", title: "Neural Expansion", desc: "Deployment of autonomous environmental reasoning agents." },
  { era: "Phase 3", title: "Community Intelligence", desc: "Adaptive sustainability participation at community scale." },
  { era: "Phase 4", title: "Global Network", desc: "Planetary-scale recycling infrastructure integration." },
  { era: "Final", title: "Ecological Autonomy", desc: "Self-optimizing autonomous environmental intelligence." }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Future Roadmap</h2>
        <p className="text-white/40">The path toward planetary sustainability optimization.</p>
      </div>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eco-neon/30 to-transparent hidden lg:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {milestones.map((ms, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-eco-neon shadow-[0_0_15px_#ccff00] z-20 hidden lg:block" />
              
              <GlassCard className="h-full pt-12 pb-8 flex flex-col items-center text-center">
                <span className="text-eco-neon font-bold text-xs tracking-widest uppercase mb-4">{ms.era}</span>
                <h3 className="text-lg font-bold text-white mb-3">{ms.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{ms.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
