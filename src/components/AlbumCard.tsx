import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Album } from '../data/albums';
import { ArrowRight } from 'lucide-react';
import { publicUrl } from '../utils/publicUrl';
interface AlbumCardProps {
  album: Album;
}
export function AlbumCard({
  album
}: AlbumCardProps) {
  return <Link to={`/albums/${album.id}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
        <motion.img src={publicUrl(album.coverImage)} alt={album.coverAlt ? album.coverAlt : album.title} className="w-full h-full object-cover" whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.6,
        ease: 'easeOut'
      }} loading="lazy" decoding="async" />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 bg-gold text-charcoal text-xs font-bold uppercase tracking-wider mb-2 rounded-sm">
              {album.eventType}
            </span>
            <div className="flex items-center gap-2 text-white font-medium text-sm">
              <span>View Album</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-gold transition-colors">
          {album.title}
        </h3>
        <p className="text-sm text-stone-500 font-sans">
          {new Date(album.date).toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric'
        })}
        </p>
      </div>
    </Link>;
}