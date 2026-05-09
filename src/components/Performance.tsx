import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, FastForward, Target, BarChart } from 'lucide-react';
import GlassCard from './GlassCard';

const Counter = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    
    const timer = setInterval(() => {
      start += end / totalSteps;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};

const Performance: React.FC = () => {
  return (
    <section className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span className="text-cyan-neon text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Intelligence Metrics
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            High-Performance <br />Ecological Analysis
          </h2>
          <p className="text-white/40 text-lg mb-12 leading-relaxed">
            LYT-G1 dynamically combines Gemini, Groq, SambaNova, Mistral, Cerebras, and OpenRouter to maximize intelligence quality, processing speed, and sustainability optimization.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'AI Response Speed', value: 98, suffix: 'ms', icon: FastForward },
              { label: 'Sustainability Accuracy', value: 99, suffix: '%', icon: Target },
              { label: 'Analysis Depth', value: 450, suffix: ' layers', icon: Activity },
              { label: 'Routing Efficiency', value: 100, suffix: '%', icon: BarChart },
            ].map((metric, i) => (
              <div key={i} className="p-4 border-l-2 border-eco-neon/20 bg-white/5 rounded-r-xl">
                <div className="text-eco-neon mb-2"><metric.icon size={20} /></div>
                <div className="text-3xl font-bold text-white mb-1">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <GlassCard className="aspect-square flex items-center justify-center overflow-hidden" hoverGlow={false}>
            {/* Holographic Graph Simulation */}
            <div className="w-full h-full p-8 flex flex-col justify-between relative">
              <div className="flex justify-between items-center mb-8">
                <div className="text-xs font-bold text-eco-neon">LIVE NETWORK THROUGHPUT</div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-eco-neon animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>

              <div className="flex-1 flex items-end gap-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 20 }}
                    animate={{ height: [20, 100 + Math.random() * 150, 60, 120 + Math.random() * 80, 20] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="flex-1 bg-gradient-to-t from-eco-neon/40 to-cyan-neon/40 rounded-t-sm"
                  />
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div className="text-center">
                  <div className="text-[10px] text-white/30 uppercase mb-1">Latency</div>
                  <div className="text-sm font-bold text-white">12ms</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-white/30 uppercase mb-1">Tokens/sec</div>
                  <div className="text-sm font-bold text-white">2.4k</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-white/30 uppercase mb-1">Logic Depth</div>
                  <div className="text-sm font-bold text-white">X-09</div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-10 -right-10 glass p-4 text-[10px] font-mono text-eco-neon border-eco-neon/30"
          >
            SYS_HEALTH: OPTIMAL
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
