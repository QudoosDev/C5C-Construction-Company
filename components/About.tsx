'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit">
            About C5C
          </span>
          <h2 className="text-4xl font-bold tracking-tight">What We Stand For</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            At C5C, we bring together <span className="font-semibold text-gray-900">Construction, Commitment, Communication, Collaboration, and Customer Success</span> to deliver high-quality projects. With a focus on delivering end-to-end solutions, we ensure each phase of construction is handled with precision and professionalism.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src="https://picsum.photos/seed/founder/100/100"
                alt="Founder"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="font-bold text-sm">Robert Joe</p>
              <p className="text-xs text-gray-500">Founder</p>
            </div>
            <div className="ml-4">
              {/* Signature placeholder */}
              <span className="font-[cursive] text-2xl text-gray-800">Robert Joe</span>
            </div>
          </div>
        </motion.div>

        {/* Center Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden md:top-[-60px] z-10"
        >
          <Image
            src="/about.jpeg"
            alt="Team working on plans"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-end mb-4">
            <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[10px] uppercase tracking-widest fill-gray-500">
                  <textPath href="#curve">
                    More about us • Know more about us •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-400">
                LOGO
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To deliver top-quality construction services through trust, communication, and collaboration, always exceeding client expectations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be Sydney&apos;s leading construction partner by providing innovative, reliable, and customer-focused solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

