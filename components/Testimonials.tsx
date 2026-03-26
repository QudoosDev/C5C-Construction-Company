'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { motion } from 'motion/react';

// Custom Quote Icon Component
const CustomQuoteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11L8 17H5L7 11H5V7H10V11ZM19 11L17 17H14L16 11H14V7H19V11Z" fill="currentColor" />
  </svg>
);

export default function Testimonials() {
  // Duplicate testimonials for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          Stories of Trust, Quality, and <br />
          <span className="text-yellow-400">Commitment</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex gap-6 whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[280px] md:w-[320px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between whitespace-normal"
            >
              <div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={`Client ${testimonial.name}`}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
                <div 
                  aria-label="Quote"
                  className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900"
                >
                  <CustomQuoteIcon />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}


