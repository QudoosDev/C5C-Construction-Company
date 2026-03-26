'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faq } from '@/lib/data';
import { motion } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#111111] rounded-[32px] px-8 md:px-16 py-20 relative overflow-hidden"
      >
        {/* Decorative background pattern (simulated with SVG) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topography" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 100c20-20 40-20 60 0s40 20 60 0M0 80c20-20 40-20 60 0s40 20 60 0M0 60c20-20 40-20 60 0s40 20 60 0M0 40c20-20 40-20 60 0s40 20 60 0M0 20c20-20 40-20 60 0s40 20 60 0M0 0c20-20 40-20 60 0s40 20 60 0" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topography)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Frequently Asked <br />
              <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
              Ready to start your next project? Get in touch for a free consultation and see how we can bring your vision to life.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
              Get A Free Quote
            </button>
          </motion.div>

          {/* Right Accordion */}
          <div className="flex flex-col gap-4">
            {faq.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-xl border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
                  >
                    <span className="text-white font-medium pr-8">{item.question}</span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

