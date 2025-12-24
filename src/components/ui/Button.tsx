import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  href,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-gold text-charcoal hover:bg-gold-light shadow-md',
    secondary: 'bg-charcoal text-cream hover:bg-black',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-charcoal bg-transparent'
  };
  const content = <motion.span whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </motion.span>;
  if (href) {
    return <Link to={href} className="inline-block">
        {content}
      </Link>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {content}
    </button>;
}