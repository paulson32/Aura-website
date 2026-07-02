'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    // Elegant incremental percentage loading counter
    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600); // short wait after hitting 100
          return 100;
        }
        // Random organic-looking steps for realism
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white select-none">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Awwwards Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            id="intro-loader"
            className="fixed inset-0 bg-[#0B0B0F] z-50 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: '-100%',
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            {/* Spinning decorative geometric background outline */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <div className="w-[500px] h-[500px] rounded-full border border-dashed border-white animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[600px] h-[600px] rounded-full border border-white animate-[spin_60s_linear_infinite]" />
            </div>

            <div className="flex flex-col items-center max-w-md w-full relative z-10">
              {/* Brand Logo Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-2 mb-8"
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center font-bold text-white shadow-lg shadow-accent-purple/30">
                  A
                </span>
                <span className="font-display font-black text-2xl tracking-widest text-white">
                  AURA
                </span>
              </motion.div>

              {/* Progress Value Counter */}
              <div className="w-full relative">
                <div className="flex justify-between items-baseline mb-2 font-mono text-xs">
                  <span className="text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-cyan animate-pulse" />
                    <span>Transmitting Assets</span>
                  </span>
                  <span className="text-accent-cyan font-bold text-sm tracking-wider">
                    {loadPercentage}%
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadPercentage}%` }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Footer indicator */}
              <div className="absolute bottom-10 font-mono text-[9px] text-gray-600 tracking-wider text-center uppercase">
                Aura Creative Digital Studio • Portfolio Core Engine v1.02
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Agency Content */}
      <div className="relative">
        <Navbar />

        {/* Section divider with premium fade glows */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* Glowing Animated Divider */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-purple/50 blur-[2px]" />
          </div>

          {/* Services Section */}
          <Services />

          {/* Glowing Animated Divider */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-blue/50 blur-[2px]" />
          </div>

          {/* Portfolio Section */}
          <Portfolio />

          {/* Glowing Animated Divider */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-cyan/50 blur-[2px]" />
          </div>

          {/* Testimonials Section */}
          <Testimonials />

          {/* Glowing Animated Divider */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-purple/50 blur-[2px]" />
          </div>

          {/* CTA Section */}
          <CTA />

          {/* Glowing Animated Divider */}
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500/50 blur-[2px]" />
          </div>

          {/* Contact Section */}
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
