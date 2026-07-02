'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background shift
      setScrolled(window.scrollY > 40);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Highlight active navigation section
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          const rect = el.getBoundingClientRect();
          // Find the section that occupies the upper-middle part of viewport
          return {
            id: item.href.replace('#', ''),
            offset: Math.abs(rect.top - 100),
          };
        }
        return null;
      }).filter((sec): sec is { id: string; offset: number } => sec !== null);

      if (sections.length > 0) {
        const closest = sections.reduce((prev, curr) => (prev.offset < curr.offset ? prev : curr));
        setActiveSection(closest.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      const yOffset = -80; // height of fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b',
          scrolled
            ? 'bg-[#0B0B0F]/80 backdrop-blur-md border-white/10 py-4 shadow-lg shadow-black/30'
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center font-bold text-white shadow-lg shadow-accent-purple/30 group-hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-accent-cyan transition-colors duration-300">
              AURA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  id={`nav-link-${id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1',
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-cta-talk"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-sm font-semibold overflow-hidden group transition-all duration-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent-purple/50 shadow-md hover:shadow-accent-purple/10"
            >
              <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-colors duration-300">
                Let&apos;s Talk
              </span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-[72px] bg-[#0B0B0F]/95 backdrop-blur-lg z-30 md:hidden flex flex-col justify-between px-8 py-12 border-t border-white/5"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.name}
                    id={`mobile-nav-link-${id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={cn(
                      'font-display text-2xl font-semibold tracking-wide py-2 flex items-center justify-between border-b border-white/5',
                      isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className={cn('w-5 h-5 opacity-40', isActive && 'opacity-100 text-accent-cyan')} />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Contact Button & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue hover:from-accent-purple/90 hover:to-accent-blue/90 font-sans font-semibold text-white shadow-lg shadow-accent-purple/20 transition-all duration-300"
              >
                Let&apos;s Build Together
              </a>
              <div className="flex justify-center gap-6 text-gray-500 text-sm font-mono">
                <span>Dribbble</span>
                <span>•</span>
                <span>Behance</span>
                <span>•</span>
                <span>Instagram</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
