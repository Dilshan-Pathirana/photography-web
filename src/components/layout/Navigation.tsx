import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Albums',
    path: '/albums'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isOpen ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50 group" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
            <Camera className={`w-6 h-6 transition-colors ${scrolled || isOpen ? 'text-gold' : 'text-charcoal'}`} />
            <span className={`font-display font-bold text-xl tracking-wide transition-colors ${scrolled || isOpen ? 'text-charcoal' : 'text-charcoal'}`}>
              LUMINA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-charcoal'}`}>
                {link.name}
              </Link>)}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50 p-2 text-charcoal hover:text-gold transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'tween',
        duration: 0.3
      }} className="fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-2xl font-display font-medium transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-charcoal'}`}>
                  {link.name}
                </Link>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}