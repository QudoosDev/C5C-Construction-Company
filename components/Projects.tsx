'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { motion } from 'motion/react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          Expertly Completed <span className="text-yellow-400">Projects</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer bg-gray-100"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Arrow Icon - Top Right */}
            <div 
              aria-label={`View details for ${project.title}`}
              className="absolute top-4 right-4 bg-white w-12 h-12 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-none flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-md"
            >
              <ArrowUpRight className="w-5 h-5 text-gray-900" />
            </div>

            {/* Info Box - Bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
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
          aria-label="Get a free construction quote"
          className="bg-yellow-400 text-gray-900 px-8 py-3.5 rounded-lg font-bold hover:bg-yellow-500 transition-colors shadow-sm"
        >
          Get A Free Quote
        </button>
      </motion.div>
    </section>
  );
}

