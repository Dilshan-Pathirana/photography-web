import React from 'react';
import { Instagram, Facebook, Mail, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Camera className="w-6 h-6 text-gold" />
              <span className="font-display font-bold text-xl tracking-wide">
                LUMINA
              </span>
            </Link>
            <p className="text-stone-400 text-sm max-w-xs text-center md:text-left">
              Capturing life's most precious moments with cinematic elegance and
              emotional depth.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 md:gap-16">
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h4 className="font-display text-gold text-lg">Explore</h4>
              <Link to="/albums" className="text-stone-400 hover:text-white transition-colors text-sm">
                Albums
              </Link>
              <Link to="/about" className="text-stone-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-stone-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h4 className="font-display text-gold text-lg">Connect</h4>
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm">
                Email
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Lumina Photography. All rights
            reserved.
          </p>
          <p>Designed with passion & light.</p>
        </div>
      </div>
    </footer>;
}