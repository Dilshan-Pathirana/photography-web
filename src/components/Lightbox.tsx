import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { AlbumImage } from '../data/albums';
import { publicUrl } from '../utils/publicUrl';
interface LightboxProps {
  images: AlbumImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: LightboxProps) {
  // Restore focus to the element that opened the lightbox
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    return () => {
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);
  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
          {/* Close Button */}
          <button onClick={e => {
        e.stopPropagation();
        onClose();
      }} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50" aria-label="Close image viewer" autoFocus>
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button onClick={e => {
        e.stopPropagation();
        onPrev();
      }} className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-50 hidden md:block" aria-label="Previous image">
            <ChevronLeft size={48} />
          </button>

          <button onClick={e => {
        e.stopPropagation();
        onNext();
      }} className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-50 hidden md:block" aria-label="Next image">
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12" onClick={e => e.stopPropagation()}>
            <motion.img key={currentIndex} initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.95
        }} transition={{
          duration: 0.2
        }} src={publicUrl(images[currentIndex].src)} alt={images[currentIndex].alt} className="max-w-full max-h-full object-contain shadow-2xl" loading="eager" decoding="async" drag="x" dragConstraints={{
          left: 0,
          right: 0
        }} dragElastic={0.2} onDragEnd={(e, {
          offset,
          velocity
        }) => {
          const swipe = Math.abs(offset.x) * velocity.x;
          if (swipe < -100) onNext();
          if (swipe > 100) onPrev();
        }} />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-sans text-sm tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>}
    </AnimatePresence>;
}