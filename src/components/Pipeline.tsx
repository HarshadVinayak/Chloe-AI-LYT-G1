import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Scan, Recycle, Leaf, TrendingDown, CheckCircle, Lightbulb, Trophy } from 'lucide-react';

const steps = [
  { title: "Upload", icon: Upload, desc: "Materials entered into the intelligence funnel." },
  { title: "Vision Analysis", icon: Scan, desc: "Multimodal identification of plastic and waste structures." },
  { title: "Classification", icon: Recycle, desc: "Categorization of waste composition and reuse potential." },
  { title: "Environmental Reasoning", icon: Leaf, desc: "Context-aware ecological impact simulation." },
  { title: "Reuse Intelligence", icon: Lightbulb, desc: "Generative creation of sustainable blueprints." },
  { title: "Impact Calculation", icon: TrendingDown, desc: "Carbon reduction and resource savings estimation." },
  { title: "Verification", icon: CheckCircle, desc: "Authenticity audit of the transformation cycle." },
  { title: "Reward System", icon: Trophy, desc: "Ecological contribution tracking and incentives." }
];

const Pipeline: React.FC = () => {
  return (
    <section className="py-24 px-6 relative max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">AI Intelligence Pipeline</h2>
        <p className="text-white/40">The end-to-end lifecycle of environmental data processing.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-eco-neon via-cyan-neon to-transparent hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 relative"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-charcoal-800 border border-eco-neon/50 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <step.icon size={20} className="text-eco-neon" />
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-white/40 text-sm max-w-lg">{step.desc}</p>
              </div>

              {/* Animated processing indicator */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute left-[-4px] top-1/2 w-4 h-4 rounded-full bg-eco-neon blur-md hidden md:block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
