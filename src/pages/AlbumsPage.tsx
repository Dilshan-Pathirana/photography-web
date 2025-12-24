import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { albums } from '../data/albums';
import { AlbumCard } from '../components/AlbumCard';
import { Search } from 'lucide-react';

type SortOption = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc';
export function AlbumsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  const featuredAlbums = useMemo(() => {
    return [...albums].filter(a => a.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const filteredAlbums = useMemo(() => {
    const result = albums.filter(album => album.title.toLowerCase().includes(searchQuery.toLowerCase()) || album.eventType.toLowerCase().includes(searchQuery.toLowerCase()));
    result.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
    return result;
  }, [searchQuery, sortBy]);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="pt-32 pb-24 min-h-screen bg-cream">
      <Helmet>
        <title>Albums — Lumina Photography</title>
        <meta name="description" content="Browse all photography albums. Search by name, sort by date or title, and explore featured highlights." />
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-4">
              Albums
            </h1>
            <p className="text-stone-500 max-w-md">
              Browse our collection of captured moments across weddings, events,
              and portraits.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input type="text" placeholder="Search albums..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-gold w-full sm:w-64" />
            </div>

            <select value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)} className="px-4 py-2.5 bg-white border border-stone-200 rounded-sm focus:outline-none focus:border-gold cursor-pointer">
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        {searchQuery.trim().length === 0 && featuredAlbums.length > 0 ? <section className="mb-16">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                  Featured
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                  Latest Highlights
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {featuredAlbums.map((album, index) => <motion.div key={album.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.05
          }}>
                  <AlbumCard album={album} />
                </motion.div>)}
            </div>
          </section> : null}

        {filteredAlbums.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredAlbums.map((album, index) => <motion.div key={album.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }}>
                <AlbumCard album={album} />
              </motion.div>)}
          </div> : <div className="text-center py-24">
            <p className="text-stone-500 text-lg">
              No albums found matching your search.
            </p>
            <button onClick={() => setSearchQuery('')} className="text-gold hover:text-charcoal mt-4 underline transition-colors">
              Clear filters
            </button>
          </div>}
      </div>
    </motion.div>;
}