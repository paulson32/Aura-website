'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled past 300px
      setShowScrollTop(window.scrollY > 300);

      // Scroll percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercentage(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;

    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#08080C] border-t border-white/5 pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full glow-spot-purple opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Top Segment: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center font-bold text-white shadow-lg">
                A
              </span>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                AURA
              </span>
            </div>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-sm">
              An award-winning boutique digital agency crafting bespoke brand experiences, interfaces, and platforms for the modern epoch.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
              <span>CRAFTED IN LOS ANGELES, CA</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-500">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors duration-200">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Expertise
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-500">
              <li>Branding &amp; Corporate Identity</li>
              <li>Interactive UI/UX Product Design</li>
              <li>Next.js Web Platforms Coding</li>
              <li>Biometric Mobile Development</li>
              <li>Performance-driven Marketing</li>
              <li>Cinematic Graphics &amp; Loops</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Weekly Insight
            </h4>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              Subscribe to get rare perspectives on visual culture, high-end design showcases, and web technology trends.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
              <AnimatePresence mode="wait">
                {newsletterStatus !== 'success' ? (
                  <motion.div
                    key="input-row"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan text-white text-xs focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'submitting'}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-xs font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer shrink-0"
                    >
                      {newsletterStatus === 'submitting' ? '...' : 'Join'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-row"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold text-center"
                  >
                    Successfully joined our dispatch!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Bottom Segment: Disclaimers & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-600 font-mono">
          <div>
            &copy; {currentYear} Aura Creative Studio Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Persistent Floating Back-to-Top Button with Scroll Progress ring */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 15 }}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full glass-panel border-white/10 flex items-center justify-center text-white hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-white/10 active:scale-95 transition-all shadow-xl shadow-black/30 cursor-pointer group"
            aria-label="Scroll back to top"
          >
            {/* SVG Progress Circle Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="2"
              />
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="transparent"
                stroke="url(#purpleCyanGradient)"
                strokeWidth="2.5"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - scrollPercentage)}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="purpleCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
