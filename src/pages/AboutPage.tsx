import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
export function AboutPage() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="pt-32 pb-24 bg-cream min-h-screen">
      <Helmet>
        <title>About — Lumina Photography</title>
        <meta name="description" content="Learn about our photography philosophy, experience, and approach to capturing authentic stories." />
      </Helmet>
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-8">
              The Artist Behind the Lens
            </h1>
            <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
              <p>
                Hello, I'm Alex. For over a decade, I've been obsessed with the
                interplay of light and emotion. My journey began not with a
                camera, but with a love for storytelling. I realized that while
                words can describe a moment, a photograph can make you feel it
                again.
              </p>
              <p>
                Lumina was born from a desire to strip away the artificial and
                focus on the authentic. I believe the best photos aren't staged;
                they are discovered. They happen in the quiet breaths between
                the big events.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="absolute inset-0 bg-gold/10 translate-x-4 translate-y-4 rounded-lg" />
            <img src="/albums/album-1/2.jpg" alt="Featured album image" className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-8">
            "Photography is the pause button of life."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="font-display text-xl mb-3 text-charcoal">
                Authenticity
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We prioritize real moments over perfect poses. We want you to
                look back and remember how you felt, not just how you looked.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-charcoal">
                Timelessness
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Trends fade, but style endures. We edit with a cinematic,
                natural aesthetic that will look just as beautiful in 50 years.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3 text-charcoal">
                Connection
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We build relationships with our clients. Understanding who you
                are allows us to capture your true essence.
              </p>
            </div>
          </div>
        </div>

        {/* Stats/Facts */}
        <div className="bg-white p-12 rounded-lg shadow-sm border border-stone-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block font-display text-4xl text-gold mb-2">
                10+
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500">
                Years Experience
              </span>
            </div>
            <div>
              <span className="block font-display text-4xl text-gold mb-2">
                500+
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500">
                Events Covered
              </span>
            </div>
            <div>
              <span className="block font-display text-4xl text-gold mb-2">
                50+
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500">
                Destinations
              </span>
            </div>
            <div>
              <span className="block font-display text-4xl text-gold mb-2">
                100%
              </span>
              <span className="text-xs uppercase tracking-widest text-stone-500">
                Passion
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
}