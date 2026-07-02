'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Linkedin, Twitter, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const BUDGET_OPTIONS = [
  'Under $15K',
  '$15K - $30K',
  '$30K - $75K',
  '$75K+',
];

const SERVICE_OPTIONS = [
  'Branding',
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'Digital Marketing',
  'Motion Graphics',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    budget: 'Under $15K',
    service: 'UI/UX Design',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please provide your name.';
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Please write a message description.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setForm({
        name: '',
        email: '',
        company: '',
        budget: 'Under $15K',
        service: 'UI/UX Design',
        message: '',
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 bg-[#0B0B0F] overflow-hidden"
    >
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full glow-spot-cyan opacity-25" />
        <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full glow-spot-purple opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <div className="font-mono text-xs font-bold text-accent-cyan tracking-widest uppercase mb-4">
            • GET IN TOUCH
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Let&apos;s Build Something Amazing
          </h2>
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <p className="font-sans text-gray-400 text-lg leading-relaxed max-w-sm">
                Have an ambitious idea or startup concept? Fill out the brief details, and our core creative engineering team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Contact list items */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-white group-hover:border-accent-cyan transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-500 font-semibold">
                      Send an email
                    </span>
                    <a
                      href="mailto:hello@auracreative.com"
                      className="font-sans text-white hover:text-accent-cyan transition-colors"
                    >
                      hello@auracreative.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-white group-hover:border-accent-cyan transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-500 font-semibold">
                      Give us a call
                    </span>
                    <a
                      href="tel:+13235550190"
                      className="font-sans text-white hover:text-accent-cyan transition-colors"
                    >
                      +1 (323) 555-0190
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-white group-hover:border-accent-cyan transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-gray-500 font-semibold">
                      Visit our studio
                    </span>
                    <span className="font-sans text-white">
                      8420 Sunset Boulevard, Los Angeles, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials Grid */}
            <div>
              <span className="block font-mono text-[10px] uppercase text-gray-500 font-semibold mb-4">
                Connect with Aura
              </span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
                  aria-label="Instagram link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300"
                  aria-label="LinkedIn link"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
                  aria-label="Twitter link"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form with state integrations */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl glass-panel border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden min-h-[550px] flex flex-col justify-center">
              {/* Submission animation overlays */}
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                            errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent-cyan'
                          } text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all font-sans text-sm`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <span className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent-cyan'
                          } text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all font-sans text-sm`}
                          placeholder="jane@company.com"
                        />
                        {errors.email && (
                          <span className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company input */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-cyan text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all font-sans text-sm"
                          placeholder="Acme Corp (Optional)"
                        />
                      </div>

                      {/* Service selection dropdown */}
                      <div className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                          Required Service
                        </label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#12121A] border border-white/10 focus:border-accent-cyan text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all font-sans text-sm appearance-none cursor-pointer"
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#12121A]">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Selection presets */}
                    <div className="space-y-3">
                      <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {BUDGET_OPTIONS.map((budgetOpt) => (
                          <button
                            key={budgetOpt}
                            type="button"
                            onClick={() => setForm({ ...form, budget: budgetOpt })}
                            className={`py-3.5 px-2 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-300 interactive-hover cursor-pointer ${
                              form.budget === budgetOpt
                                ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white border-transparent shadow-md'
                                : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {budgetOpt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] uppercase text-gray-400 font-semibold">
                        Tell us about the project *
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-accent-cyan'
                        } text-white focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 transition-all font-sans text-sm resize-none`}
                        placeholder="I want to design a modern fintech app..."
                      />
                      {errors.message && (
                        <span className="flex items-center gap-1.5 text-xs text-red-400 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan text-white font-semibold hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 interactive-hover cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-animation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <div className="relative">
                      {/* Decorative pulsing circles behind checkmark */}
                      <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl scale-150 animate-pulse" />
                      <CheckCircle2 className="w-20 h-20 text-accent-cyan relative z-10 animate-[bounce_1s_1]" />
                    </div>

                    <div className="space-y-3 max-w-sm mx-auto">
                      <h3 className="font-display text-2xl font-bold text-white">
                        Message Transmitted!
                      </h3>
                      <p className="font-sans text-sm text-gray-400 leading-relaxed">
                        Thank you for reaching out to Aura. Our core planning team has received your brief and is already mapping out your project.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
