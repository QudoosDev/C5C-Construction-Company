import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 md:px-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter">
              C5C
            </Link>
            <div className="flex items-center gap-4 mt-4">
              <a 
                href="#" 
                aria-label="Follow C5C Construction on Facebook"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Follow C5C Construction on Instagram"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                aria-label="Follow C5C Construction on Twitter"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Quick Links</h4>
            <Link href="#about" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">About us</Link>
            <Link href="#services" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Services</Link>
            <Link href="#project" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Project</Link>
            <Link href="#contact" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Contact</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Services</h4>
            <Link href="#" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">New Builds</Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Knockdown Rebuilds</Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Custom Builds</Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-yellow-500 transition-colors">Project Management</Link>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 mb-2">Contact us</h4>
            <p className="text-gray-500 text-sm">+8801571484593</p>
            <p className="text-gray-500 text-sm">info@c5cproject.com</p>
            <p className="text-gray-500 text-sm">Gupatila, Tilagor, Sylhet</p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            All rights reserved © 2024 C5C Construction company
          </p>
        </div>
      </div>
    </footer>
  );
}
