import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';
import type { AlbumImage } from '../data/albums';
interface PhotoGalleryProps {
  images: AlbumImage[];
}
export function PhotoGallery({
  images
}: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };
  return <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((image, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: index % 3 * 0.1
      }} className="break-inside-avoid">
            <div className="relative group overflow-hidden rounded-sm cursor-zoom-in" onClick={() => openLightbox(index)}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
              <img src={image.src} alt={image.alt} className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
            </div>
            {image.caption ? <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                {image.caption}
              </p> : null}
          </motion.div>)}
      </div>

      <Lightbox images={images} currentIndex={currentIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} onNext={nextImage} onPrev={prevImage} />
    </>;
}