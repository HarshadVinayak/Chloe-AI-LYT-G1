import React, { useEffect } from 'react';
import NeuralGrid from './components/NeuralGrid';
import Hero from './components/Hero';
import WhatIsChloe from './components/WhatIsChloe';
import Architecture from './components/Architecture';
import Pipeline from './components/Pipeline';
import Performance from './components/Performance';
import LiveSimulation from './components/LiveSimulation';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-charcoal-900 text-white selection:bg-eco-neon selection:text-charcoal-900">
      {/* Global Background */}
      <NeuralGrid />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <WhatIsChloe />
        <Architecture />
        <Pipeline />
        <Performance />
        <LiveSimulation />
        <TechStack />
        <Roadmap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[20px] border-black/10 mix-blend-overlay" />
    </div>
  );
};

export default App;
