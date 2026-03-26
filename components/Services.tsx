'use client';

import Image from 'next/image';
import { services } from '@/lib/data';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          <span className="text-yellow-400">Our</span> Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-sm"
        >
          We offer a comprehensive range of construction services designed to meet your needs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6 mb-24 items-start">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative h-[300px] md:h-[340px] cursor-pointer ${
              index % 2 !== 0 ? 'md:mt-16' : ''
            }`}
          >
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[24px] shadow-sm">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            
            {/* Overlapping Label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white w-[85%] px-4 py-3 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] text-center z-10 border border-gray-50">
              <span className="text-xs lg:text-sm font-semibold text-gray-800">{service.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <button 
          aria-label="Get a free quote for our services"
          className="bg-yellow-400 text-gray-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
        >
          Get A Free Quote
        </button>
      </motion.div>
    </section>
  );
}

