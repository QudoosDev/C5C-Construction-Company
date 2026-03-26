'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link 
          href="/" 
          aria-label="C5C Construction Home"
          className="bg-gray-100 px-6 py-2 rounded-md text-xl font-bold tracking-tighter text-gray-900"
        >
          C5C
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 bg-gray-100 px-8 py-2.5 rounded-md text-sm font-medium text-gray-600">
          <Link href="/" className="text-gray-900 font-semibold transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-gray-900 transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-gray-900 transition-colors">About us</Link>
          <Link href="#services" className="hover:text-gray-900 transition-colors">Services</Link>
        </div>

        <button 
          aria-label="Contact C5C Construction"
          className="bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors"
        >
          Contact us
        </button>
      </div>
    </nav>
  );
}


