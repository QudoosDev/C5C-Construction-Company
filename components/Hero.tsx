'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-4 md:pb-10 w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Cloudy soft blobs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-[10%] w-[40%] h-[60%] bg-gray-300/40 blur-[100px] rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[10%] right-[10%] w-[30%] h-[50%] bg-yellow-400/20 blur-[100px] rounded-full"
        ></motion.div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)] opacity-[0.43]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center w-full mx-auto mb-6">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-8 gap-y-0 items-center w-full mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-right justify-self-end text-sm lg:text-base font-medium text-gray-500 leading-snug"
          >
            Best construction<br/>company in <strong className="text-gray-900">Sydney</strong>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl lg:text-[72px] font-medium tracking-tight whitespace-nowrap justify-self-center"
          >
            <span className="text-yellow-400">Shaping</span> <span className="text-gray-900">your vision</span>
          </motion.h1>
          <div></div>

          <div></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl lg:text-[72px] font-medium tracking-tight text-gray-900 whitespace-nowrap justify-self-center"
          >
            With <span className="text-yellow-400">precision</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-left justify-self-start text-sm lg:text-base text-gray-500 leading-snug max-w-[280px]"
          >
            Delivering construction solutions<br/>grounded in commitment,<br/>communication, collaboration, and...
          </motion.div>
        </div>

        {/* Mobile Flex Layout */}
        <div className="flex md:hidden flex-col items-center gap-3 mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl font-medium tracking-tight leading-tight"
          >
            <span className="text-yellow-400">Shaping</span> <span className="text-gray-900">your vision</span><br/>
            <span className="text-gray-900">With</span> <span className="text-yellow-400">precision</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-gray-500"
          >
            Best construction company in <strong className="text-gray-900">Sydney</strong>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-gray-500 max-w-[280px]"
          >
            Delivering construction solutions grounded in commitment, communication, collaboration, and...
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 w-full md:w-auto px-6 md:px-0"
        >
          <button 
            aria-label="Request a free quote"
            className="flex-1 md:flex-none bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm md:text-base h-[48px] md:h-auto"
          >
            Free Quote
          </button>
          <button 
            aria-label="View our construction services"
            className="flex-1 md:flex-none bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm md:text-base h-[48px] md:h-auto flex items-center justify-center leading-none"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      {/* Mobile-only Badge Content (moved above image) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="md:hidden flex items-center justify-center gap-4 mb-4 px-6"
      >
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Rating</p>
            <div className="flex items-center gap-1 font-bold text-base">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              4.8
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative bg-gray-200 shadow-sm">
                <Image
                  src={`https://picsum.photos/seed/avatar${i}/100/100`}
                  alt={`Satisfied Customer ${i}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative w-full max-w-[960px] mx-auto aspect-[16/9] md:aspect-[12/7] px-4 md:px-0"
      >
        {/* SVG Shape for Hero Image - Both Mobile and Desktop */}
        <svg
          viewBox="0 0 1200 700"
          className="absolute inset-0 w-full h-full drop-shadow-2xl"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="hero-cutout">
              <path d="
                M 0 80 
                Q 0 40 40 45 
                L 580 125 
                Q 600 128 620 125 
                L 1160 45 
                Q 1200 40 1200 80 
                L 1200 480
                Q 1200 520 1160 520
                L 960 520
                Q 920 520 920 560
                L 920 660
                Q 920 700 880 700
                L 320 700
                Q 280 700 280 660
                L 280 560
                Q 280 520 240 520
                L 40 520
                Q 0 520 0 480
                Z
              " />
            </clipPath>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#facc15" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Raw image tag to preserve 100% original quality */}
          <image
            href="/hero.jpeg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hero-cutout)"
          />
          
          {/* Gradient Overlay */}
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-gradient)"
            clipPath="url(#hero-cutout)"
            style={{ mixBlendMode: 'multiply' }}
          />
        </svg>

        {/* Badge Content positioned in the SVG cutout - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block absolute bottom-4 left-4 md:bottom-8 md:left-12 z-20"
        >
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs text-gray-500 font-medium">Rating</p>
              <div className="flex items-center gap-1 font-bold text-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                4.8
              </div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                  <Image
                    src={`https://picsum.photos/seed/avatar${i}/100/100`}
                    alt="Avatar"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}

