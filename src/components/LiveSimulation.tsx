import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';

const simulationLogs = [
  "Scanning Material...",
  "Analyzing Plastic Composition...",
  "Routing Intelligence Through LYT-G1...",
  "Activating Gemini Reasoning Layer...",
  "Optimizing Through Groq Inference...",
  "Generating Reuse Blueprint...",
  "Calculating Environmental Impact...",
  "Verifying Sustainability Transformation...",
  "Adaptive Learning Updated...",
];

const LiveSimulation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % simulationLogs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="simulation" className="py-24 px-6 relative bg-charcoal-800/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live AI Process Visualization</h2>
          <p className="text-white/40">Real-time trace of the Chloe AI reasoning engine.</p>
        </div>

        <GlassCard className="font-mono bg-black/60 border-eco-neon/20 p-0 overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          {/* Header */}
          <div className="bg-charcoal-800 p-3 px-6 flex justify-between items-center border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
              <Terminal size={12} /> Chloe_OS v1.0.4 - Internal Trace
            </div>
            <div />
          </div>

          {/* Terminal Body */}
          <div className="p-8 min-h-[400px]">
            <div className="space-y-4">
              {simulationLogs.slice(0, currentStep + 1).map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-eco-neon shrink-0">[{new Date().toLocaleTimeString()}]</span>
                  <span className="text-white/80">{log}</span>
                  {i === currentStep && (
                    <motion.div 
                      animate={{ opacity: [0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className="w-2 h-4 bg-eco-neon mt-1" 
                    />
                  )}
                  {i < currentStep && <CheckCircle2 size={16} className="text-eco-neon mt-1" />}
                </motion.div>
              ))}
            </div>

            {/* Visual Thinking Core */}
            <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="w-32 h-32 border-t-2 border-r-2 border-eco-neon rounded-full absolute opacity-20"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="w-40 h-40 border-b-2 border-l-2 border-cyan-neon rounded-full absolute opacity-10"
               />
               <Cpu size={40} className="text-eco-neon mb-4" />
               <div className="text-xs text-white/60 tracking-widest uppercase">Processing Intelligence</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default LiveSimulation;
