'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageSquare, Zap } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] overflow-hidden"
    >
      {/* Glow Backdrops for intense high-end feeling */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-r from-accent-purple/20 via-accent-blue/15 to-accent-cyan/20 blur-3xl opacity-80" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Premium Call to Action Container Card */}
        <div className="relative rounded-3xl md:rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.002] backdrop-blur-xl p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col items-center text-center">
          
          {/* Subtle Grid Accent Decor inside the card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />
          
          {/* Sparkling top tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-cyan text-xs font-semibold font-mono tracking-widest mb-6 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-purple animate-pulse" />
            <span>Co-Create The Future</span>
          </motion.div>

          {/* Epic Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            Have an Ambitious Idea? <br className="hidden sm:inline" />
            Let&apos;s Build Something{' '}
            <span className="text-gradient bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
              Unforgettable.
            </span>
          </motion.h2>

          {/* Context Explainer */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-400 font-sans text-base md:text-lg max-w-2xl leading-relaxed"
          >
            We merge cutting-edge design paradigms with hyper-scalable modern technologies to secure absolute market dominance for startups and growing brands.
          </motion.p>

          {/* Interactive Button row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center items-center relative z-20"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-white font-semibold tracking-wide hover:shadow-xl hover:shadow-accent-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer interactive-hover"
            >
              <Zap className="w-4 h-4 text-white animate-pulse" />
              <span>Let&apos;s Talk Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="mailto:hello@auracreative.com"
              className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white font-semibold tracking-wide bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2.5 cursor-pointer interactive-hover"
            >
              <MessageSquare className="w-4 h-4 text-accent-cyan" />
              <span>Send Direct Email</span>
            </a>
          </motion.div>

          {/* Micro-insights beneath button */}
          <div className="mt-8 flex items-center gap-6 text-gray-600 font-mono text-[10px] tracking-widest uppercase">
            <span>• ZERO CONSULTATION FEES</span>
            <span>• GLOBAL REMOTE READY</span>
          </div>

          {/* Aesthetic Bottom Border glow accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
}
