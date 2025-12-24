import React from 'react';
import { motion } from 'framer-motion';
import { albums } from '../data/albums';
import { AlbumCard } from './AlbumCard';
import { Button } from './ui/Button';
export function FeaturedAlbums() {
  const featuredAlbums = [...albums].filter(album => album.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Featured Work
          </h2>
        </div>
        <Button href="/albums" variant="outline" className="hidden md:inline-flex">
          View All Projects
        </Button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-6 min-w-max">
          {featuredAlbums.map((album, index) => <motion.div key={album.id} className="w-[300px] md:w-[400px]" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <AlbumCard album={album} />
            </motion.div>)}
        </div>
      </div>

      <div className="container mx-auto px-6 md:hidden mt-4">
        <Button href="/albums" variant="outline" className="w-full">
          View All Projects
        </Button>
      </div>
    </section>;
}