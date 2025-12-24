import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { FeaturedAlbums } from '../components/FeaturedAlbums';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
export function LandingPage() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      <Helmet>
        <title>Lumina Photography — Portfolio</title>
        <meta name="description" content="Explore featured photography albums across weddings, events, and portraits. Browse recent work and get in touch for your next project." />
      </Helmet>
      <Hero />

      {/* Vision Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                Our Philosophy
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
                We don't just take photos. We capture{' '}
                <span className="italic text-gold">feelings</span>.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                Photography is more than just clicking a shutter. It's about
                observing the subtle interactions, the fleeting glances, and the
                raw emotions that make your story unique. Our approach is
                unobtrusive yet intimate, ensuring we document the authentic
                essence of your special moments.
              </p>
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="relative">
              <div className="absolute -inset-4 border border-gold/30 rounded-lg z-0 translate-x-4 translate-y-4" />
              <img src="/albums/album-2/1.jpg" alt="Featured work preview" className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-xl" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedAlbums />

      {/* Curated Grid */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Visual Stories
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Glimpses into the beautiful narratives we've had the honor of
              documenting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            <motion.div className="md:col-span-2 h-[420px] md:h-full relative overflow-hidden group" whileHover={{
            scale: 0.98
          }} transition={{
            duration: 0.4
          }}>
              <img src="/albums/album-1/1.jpg" alt="Featured gallery image" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" decoding="async" />
            </motion.div>
            <div className="flex flex-col gap-4 h-[420px] md:h-full">
              <motion.div className="flex-1 relative overflow-hidden group" whileHover={{
              scale: 0.98
            }} transition={{
              duration: 0.4
            }}>
                <img src="/albums/album-5/1.jpg" alt="Featured gallery image" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" decoding="async" />
              </motion.div>
              <motion.div className="flex-1 relative overflow-hidden group" whileHover={{
              scale: 0.98
            }} transition={{
              duration: 0.4
            }}>
                <img src="/albums/album-3/1.jpg" alt="Featured gallery image" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" decoding="async" />
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-12 relative z-10">
            <Link to="/albums" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-lg font-medium mt-5">
              Explore Full Gallery <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-16 text-charcoal">
            Client Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>)}
          </div>
        </div>
      </section>
    </motion.div>;
}