'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 px-6 md:px-12 lg:px-16 bg-[#0B0B0F]"
    >
      {/* Background Animated Blobs - Softened & Deepened */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-[-15%] w-[600px] h-[600px] rounded-full glow-spot-purple opacity-30 animate-[pulse_12s_infinite_ease-in-out]" />
        <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] rounded-full glow-spot-blue opacity-25 animate-[pulse_15s_infinite_ease-in-out]" />
        <div className="absolute top-[30%] right-[25%] w-[400px] h-[400px] rounded-full glow-spot-cyan opacity-15 animate-[pulse_10s_infinite_ease-in-out]" />
      </div>

      {/* Ultra-subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 flex-grow">
        {/* Left Headline & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-accent-cyan text-xs font-semibold font-mono tracking-wider mb-8 w-fit backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            <span>CREATIVE AGENCY • AWWWARDS NOMINEE</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-white"
          >
            We Build Digital{' '}
            <span className="text-gradient bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
              Experiences
            </span>{' '}
            That Make Brands{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-pink-500">
              Unforgettable.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-gray-400 font-sans text-lg leading-relaxed max-w-xl"
          >
            We partner with ambitious startups and enterprises to create outstanding digital interfaces, high-performance web systems, and iconic brand strategies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => scrollToSection('contact')}
              id="hero-cta-start"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-white font-semibold tracking-wide hover:shadow-lg hover:shadow-accent-purple/20 group hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('portfolio')}
              id="hero-cta-portfolio"
              className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white font-semibold tracking-wide bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>View Portfolio</span>
            </button>
          </motion.div>
        </div>

        {/* Right Creative Visual - Premium Abstract Composition */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
          >
            {/* Outer Slow Rotating Ambient Aura */}
            <motion.div
              className="absolute inset-0 rounded-[40px] border border-white/[0.03] bg-white/[0.01] shadow-[inset_0_0_60px_rgba(255,255,255,0.02)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Middle Rotating Segment with Clean Border Accent */}
            <motion.div
              className="absolute w-[85%] h-[85%] rounded-[30px] border border-dashed border-accent-purple/15"
              animate={{ rotate: -180 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner Floating Glass Panel - Premium & Minimalist */}
            <motion.div
              className="absolute w-[65%] h-[65%] rounded-[24px] bg-gradient-to-br from-white/[0.03] to-white/[0.005] backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-6 overflow-hidden group"
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Decorative Corner Lights */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-cyan/10 to-transparent blur-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-purple/10 to-transparent blur-xl" />

              {/* Minimal Geometric Content representing Premium Code/Design */}
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">EXPERIENCE 01</span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                </div>
              </div>

              {/* Abstract Visual Centerpiece */}
              <div className="my-auto flex flex-col items-center justify-center gap-1">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/80 font-display text-sm font-bold bg-white/[0.02]">
                  A
                </div>
                <span className="text-[10px] font-mono text-gray-400 mt-2 tracking-widest uppercase">Aura Studio</span>
              </div>

              {/* Status Row */}
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="block text-[8px] font-mono text-gray-600 uppercase">SYS STATUS</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-[9px] font-mono text-gray-300">ONLINE</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-gray-500">INIT // 2026</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto w-full mt-24 lg:mt-36 border-t border-white/5 pt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:border-r border-white/5 last:border-0 pr-4"
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

