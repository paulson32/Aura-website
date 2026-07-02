'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The team exceeded our expectations and delivered an exceptional website. Their attention to minor interaction dynamics, high-fidelity layouts, and brand communication was breathtaking.",
    name: "Marcus Vane",
    position: "VP of Growth",
    company: "Vélour Paris",
    avatar: "https://picsum.photos/seed/marcus/150/150",
    rating: 5,
  },
  {
    quote: "Our conversions increased by 300% after the redesign. The asset dashboard we co-designed has simplified multi-portfolio tracking for our advisors while keeping security watertight.",
    name: "Sarah Jenkins",
    position: "Chief Product Officer",
    company: "Nexa Capital",
    avatar: "https://picsum.photos/seed/sarah/150/150",
    rating: 5,
  },
  {
    quote: "The absolute best creative partner we've worked with. Their multi-disciplinary team brings state-of-the-art vision, engineering excellence, and reliable support to every brand campaign.",
    name: "Harrison Wood",
    position: "Creative Director",
    company: "Onyx Group",
    avatar: "https://picsum.photos/seed/harrison/150/150",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 bg-[#0C0C12] overflow-hidden"
    >
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] rounded-full glow-spot-purple opacity-30" />
        <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] rounded-full glow-spot-blue opacity-25" />
      </div>

      {/* Grid structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase mb-4">
            • TESTIMONIALS
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Trusted by Growing Brands
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          {/* Floating Giant Quote Icon */}
          <div className="absolute -top-16 -left-6 md:-left-16 text-accent-purple/10 pointer-events-none">
            <Quote className="w-32 h-32 transform -scale-x-100" />
          </div>

          <div className="min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full"
              >
                <div className="glass-panel border-white/10 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center md:items-start relative">
                  {/* Client Photo & Info */}
                  <div className="flex flex-col items-center text-center shrink-0 w-full md:w-48">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 p-1 bg-white/5 mb-4 shadow-lg shadow-black/20">
                      <Image
                        src={TESTIMONIALS[activeIndex].avatar}
                        alt={TESTIMONIALS[activeIndex].name}
                        width={150}
                        height={150}
                        className="object-cover rounded-xl"
                        referrerPolicy="no-referrer"
                        priority
                      />
                    </div>
                    <h3 className="font-display font-bold text-white text-base">
                      {TESTIMONIALS[activeIndex].name}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 mt-1">
                      {TESTIMONIALS[activeIndex].position}
                    </p>
                    <p className="font-sans text-xs text-accent-cyan font-semibold mt-0.5">
                      {TESTIMONIALS[activeIndex].company}
                    </p>
                  </div>

                  {/* Quote & Stars */}
                  <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                    <div className="space-y-6">
                      {/* Rating Stars */}
                      <div className="flex items-center justify-center md:justify-start gap-1">
                        {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Actual Quote */}
                      <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-gray-200">
                        &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all duration-200 interactive-hover cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-accent-cyan' : 'w-1.5 bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-gray-400 hover:text-white transition-all duration-200 interactive-hover cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
