'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Sparkles, Check, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'UI Design' | 'Development' | 'Marketing';
  shortDesc: string;
  longDesc: string;
  image: string;
  client: string;
  year: string;
  services: string[];
  results: string;
}

const PROJECTS: Project[] = [
  {
    id: 'luxury-fashion',
    title: 'Vélour Haute Couture',
    category: 'Branding',
    shortDesc: 'A premium visual identity reboot for an elite Parisian luxury design house.',
    longDesc: 'We rebuilt the legacy identity of Vélour from the ground up, infusing modern minimalism with classic French heritage. Our team created a bespoke typography set, luxurious physical packaging designs, and a state-of-the-art interactive digital lookbook that acts as an online museum of couture collections.',
    image: 'https://picsum.photos/seed/luxuryfashion/800/600',
    client: 'Vélour Paris',
    year: '2025',
    services: ['Brand Strategy', 'Logo & Identity Design', 'Premium Packaging', 'Creative Direction'],
    results: '40% increase in online boutique engagement, successful global launch of Autumn collection.',
  },
  {
    id: 'fintech-dashboard',
    title: 'Nexa Asset Management',
    category: 'UI Design',
    shortDesc: 'A high-fidelity dashboard system for ultra-high-net-worth liquidity tracking.',
    longDesc: 'Nexa requested an interface that could synthesize complex quantitative portfolios into an elegant, fast, and secure sensory workspace. We designed an eye-safe custom dark interface utilizing crisp charting aesthetics, quick filters, and interactive risk analysis modeling widgets.',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    client: 'Nexa Capital',
    year: '2026',
    services: ['User Research', 'Wireframing', 'UI Design', 'Data Visualization Systems'],
    results: 'Reduced daily asset review duration for advisors by 55%, resulting in higher productivity.',
  },
  {
    id: 'restaurant-website',
    title: 'Onyx Sensory Dining',
    category: 'Development',
    shortDesc: 'A cinematic, high-speed booking platform for a Michelin-starred immersive restaurant.',
    longDesc: 'Onyx is an experiential restaurant that combines gastronomic wizardry with ambient projection mapping. We developed a highly cinematic, lightweight web platform featuring interactive video menus, custom soundscapes, and an instant booking tunnel built using modern server-side rendering.',
    image: 'https://picsum.photos/seed/restaurant/800/600',
    client: 'Onyx Group',
    year: '2025',
    services: ['Web Development', 'Soundscape Design', 'Interactive UI Coding', 'Booking API Integration'],
    results: 'Reservation waitlist fully booked for 6 consecutive months within 48 hours of site launch.',
  },
  {
    id: 'fitness-app',
    title: 'Aura Fit Mobile ecosystem',
    category: 'UI Design',
    shortDesc: 'A dynamic, high-engagement workout ecosystem featuring biometric visualizers.',
    longDesc: 'We designed the full brand-aligned interface for Aura Fit, a next-gen wellness platform. By merging live biometric telemetry tracking with game-like visual rewards, we created a motivating ecosystem that feels premium, energetic, and intuitive.',
    image: 'https://picsum.photos/seed/fitnessapp/800/600',
    client: 'Aura Fit Inc.',
    year: '2025',
    services: ['Product Design', 'Mobile UI Guidelines', 'Telemetry Charting', 'Visual Asset Design'],
    results: 'App Store rating improved from 4.1 to 4.8 stars with over 1M global active downloads.',
  },
  {
    id: 'real-estate',
    title: 'Lumina Luxury Residences',
    category: 'Development',
    shortDesc: 'A fully virtualized real estate hub with interactive 3D spatial tours.',
    longDesc: 'Lumina represents the vanguard of sustainable urban penthouse architecture. We developed their full-scale sales platform, incorporating interactive layout blueprints, WebGL-driven structural models, and automatic agent-routing chat widgets.',
    image: 'https://picsum.photos/seed/realestate/800/600',
    client: 'Lumina Holdings',
    year: '2026',
    services: ['Next.js Framework Coding', 'Interactive Floorplan Rendering', 'Sales Tunnel Engineering'],
    results: 'Generated $85M in pre-sale commitments entirely through digital spatial showcase leads.',
  },
  {
    id: 'ai-startup',
    title: 'Synthetix AI Engine',
    category: 'Marketing',
    shortDesc: 'A high-impact visual campaign and landing page for an autonomous agent platform.',
    longDesc: 'Synthetix is an LLM infrastructure provider for workflow automations. We crafted their complete market entry strategy, designing a high-conversion landing page with custom vector graphics, kinetic copy animations, and a real-time developer playground simulator.',
    image: 'https://picsum.photos/seed/aistartup/800/600',
    client: 'Synthetix Labs',
    year: '2026',
    services: ['Landing Page Architecture', 'Conversion Rate Optimization', 'Campaign Graphics', 'Ad Funnel Strategy'],
    results: '300,000 developer sign-ups recorded in first month of public campaign launch.',
  },
];

const CATEGORIES = ['All', 'Branding', 'UI Design', 'Development', 'Marketing'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] overflow-hidden"
    >
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full glow-spot-cyan opacity-20" />
        <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full glow-spot-purple opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase mb-4">
              • RECENT RELEASES
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Our Work
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0 max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 interactive-hover border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white border-transparent shadow-lg shadow-accent-purple/20'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-dark-card border border-white/5 aspect-[4/3] flex flex-col justify-end interactive-hover"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                </div>

                {/* Info Overlay */}
                <div className="relative p-8 z-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-purple/20 border border-accent-purple/30 text-accent-cyan font-mono text-[10px] uppercase font-bold tracking-widest mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.shortDesc}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-accent-cyan transition-colors duration-300 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Detail Dialog Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-crosshair"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border-white/10 text-white shadow-2xl z-10 flex flex-col scroll-smooth"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all duration-200 z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Cover Image */}
              <div className="relative w-full h-[250px] sm:h-[350px]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="px-3 py-1 rounded-full bg-accent-purple/20 border border-accent-purple/30 text-accent-cyan font-mono text-[10px] uppercase font-bold tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#12121A]/95">
                {/* Left Long Description */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent-cyan" />
                      <span>Project Overview</span>
                    </h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-3">Key Results & Impact</h4>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <p className="font-sans text-xs text-gray-300 leading-normal">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Specs & Metadata */}
                <div className="md:col-span-5 space-y-6 md:border-l border-white/5 md:pl-8">
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-2">
                      Client
                    </h4>
                    <p className="font-sans text-sm font-semibold text-white">{selectedProject.client}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-2">
                      Release Year
                    </h4>
                    <p className="font-sans text-sm text-white">{selectedProject.year}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-3">
                      Provided Services
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.services.map((serv, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-400 font-sans">
                          <ChevronRight className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                          <span>{serv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Bar Footer */}
              <div className="border-t border-white/5 p-6 bg-black/40 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
