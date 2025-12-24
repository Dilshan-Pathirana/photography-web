import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { publicUrl } from '../utils/publicUrl';
export function Hero() {
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{
      y
    }} className="absolute inset-0 z-0">
        <img src={publicUrl('/albums/album-10/5.jpg')} alt="Featured album cover" className="w-full h-full object-cover" loading="eager" decoding="async" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Capturing the <span className="text-gold italic">Soul</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
            Cinematic photography for life's most profound moments. We tell your
            story through light, shadow, and emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/albums" variant="primary">
              View Albums
            </Button>
            <Button href="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div style={{
      opacity
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70" animate={{
      y: [0, 10, 0]
    }} transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: 'easeInOut'
    }}>
        <ChevronDown size={32} />
      </motion.div>
    </section>;
}