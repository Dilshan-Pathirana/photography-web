import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { albums } from '../data/albums';
import { PhotoGallery } from '../components/PhotoGallery';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
export function AlbumDetailPage() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const album = albums.find(a => a.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!album) {
    return <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-display text-3xl mb-4">Album Not Found</h2>
          <Link to="/albums" className="text-gold hover:text-charcoal underline">
            Return to Albums
          </Link>
        </div>
      </div>;
  }
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="bg-white min-h-screen">
      <Helmet>
        <title>{album.title} — Albums — Lumina Photography</title>
        <meta name="description" content={album.description ? album.description : `View photos from ${album.title}.`} />
      </Helmet>
      {/* Header */}
      <div className="bg-cream pt-32 pb-16 border-b border-stone-100">
        <div className="container mx-auto px-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-stone-500 hover:text-gold transition-colors mb-8 text-sm uppercase tracking-wider font-medium">
            <ArrowLeft size={16} /> Back to Albums
          </button>

          <div className="max-w-4xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="flex items-center gap-4 text-gold text-sm font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1">
                  <Tag size={14} /> {album.eventType}
                </span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span className="flex items-center gap-1">
                  <Calendar size={14} />{' '}
                  {new Date(album.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-6">
                {album.title}
              </h1>
              {album.description ? <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  {album.description}
                </p> : null}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-6 py-16">
        <PhotoGallery images={album.images} />
      </div>

      {/* Next Album Navigation (Optional) */}
      <div className="bg-charcoal text-white py-24 text-center">
        <h3 className="font-display text-3xl mb-6">
          Ready to start your project?
        </h3>
        <Link to="/contact" className="inline-block px-8 py-3 bg-gold text-charcoal font-medium rounded-sm hover:bg-white transition-colors duration-300">
          Get in Touch
        </Link>
      </div>
    </motion.div>;
}