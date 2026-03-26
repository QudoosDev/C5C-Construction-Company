'use client';

import { features } from '@/lib/data';
import { motion } from 'motion/react';

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative">
        {/* Custom Rounded Shape Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 100C0 77.9086 17.9086 60 40 60H220C235 60 245 50 250 35C255 20 270 0 280 0H720C730 0 745 20 750 35C755 50 765 60 780 60H960C982.091 60 1000 77.9086 1000 100V560C1000 582.091 982.091 600 960 600H400C390 600 375 580 370 565C365 550 355 540 340 540H40C17.9086 540 0 522.091 0 500V100Z" 
              fill="#111111"
            />
          </svg>
        </motion.div>

        <div
          className="relative z-10 px-6 md:px-12 lg:px-16 pt-32 pb-32 overflow-hidden"
        >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-20 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4"
          >
            Why choose <span className="text-yellow-400">C5C</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm max-w-lg mx-auto"
          >
            We offer a comprehensive range of construction services designed to meet your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 hover:-translate-y-2 transition-all duration-300 group relative"
            >
              <div className="text-4xl font-extralight text-white/10 mb-6 transition-colors group-hover:text-yellow-400/30">
                {feature.id}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow in the bottom-left cutout area (on white background) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-[20px] left-[40px] w-[28%] items-center text-gray-400 z-10 hidden md:flex"
        >
          <div className="h-[1px] w-full bg-gray-300"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-[-8px]">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

