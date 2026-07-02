'use client';

import { motion } from 'motion/react';
import { Award, Layers, Code2, Smartphone, Target, Film, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'We create memorable, cohesive brand identities that communicate your mission, resonate with your target audience, and command premium authority.',
    details: 'Brand Strategy • Logo Design • Typography Systems • Style Guides • Collateral Design',
    icon: Award,
    color: 'from-accent-purple to-purple-600',
    glow: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Elite modern digital interfaces focused on intuitive user flows, polished ergonomics, responsive design, and pixel-perfect sensory engagement.',
    details: 'User Research • Wireframing • High-Fi Mockups • Interactive Prototypes • Design Systems',
    icon: Layers,
    color: 'from-accent-blue to-blue-600',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance, secure, SEO-optimized responsive web products built using Next.js, modern CSS, dynamic APIs, and state-of-the-art frameworks.',
    details: 'Fullstack Next.js • Headless CMS • E-Commerce Platforms • API Integration • Fast Core Web Vitals',
    icon: Code2,
    color: 'from-accent-cyan to-teal-500',
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Beautiful native and cross-platform mobile apps engineered with ultra-smooth transitions, fast caching, and full sensory responsiveness.',
    details: 'iOS & Android Apps • React Native • Responsive Design • Store Deployment • Push Systems',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236, 72, 153, 0.15)',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Hyper-targeted content strategies, technical search-engine optimization (SEO), PPC search funnels, and data-driven organic scaling.',
    details: 'SEO Strategy • Paid Social Campaigning • Conversion Audits • Analytics & Attribution',
    icon: Target,
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 191, 36, 0.15)',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description: 'Captivating visual storytelling, animated interactive micro-assets, explanation videos, and cinematic loops that elevate user attention.',
    details: 'Logo Animation • Explainer Videos • UI Micro-interactions • 3D Loops • Promotional Assets',
    icon: Film,
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52, 211, 153, 0.15)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 bg-[#0C0C12] overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full glow-spot-purple opacity-40" />
        <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] rounded-full glow-spot-blue opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase mb-4"
            >
              • OUR EXPERTISE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              What We Do
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 font-sans text-base md:text-lg max-w-md mt-6 md:mt-0"
          >
            We merge cutting-edge aesthetics with high-performance execution. Our tailored digital crafts help ambitious brands lead their markets.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: `0 20px 40px -15px ${service.glow}`,
                }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 overflow-hidden interactive-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)',
                }}
              >
                {/* Accent border glow mask */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.02] pointer-events-none" />

                <div>
                  {/* Icon Frame */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-cyan rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                      <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-accent-cyan group-hover:to-accent-purple transition-colors duration-300">
                        <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>

                    <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sublist specs */}
                <div className="border-t border-white/5 pt-4 mt-4">
                  <span className="block font-mono text-[10px] uppercase text-accent-cyan tracking-wider font-semibold mb-1">
                    Deliverables:
                  </span>
                  <span className="font-sans text-xs text-gray-500 leading-normal block">
                    {service.details}
                  </span>
                </div>

                {/* Card Glow spotlight */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{
                    background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
