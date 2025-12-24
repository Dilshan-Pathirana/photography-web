import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from './ui/Card';
import { Testimonial } from '../data/testimonials';
interface TestimonialCardProps {
  testimonial: Testimonial;
}
export function TestimonialCard({
  testimonial
}: TestimonialCardProps) {
  return <Card className="p-8 h-full flex flex-col justify-between bg-cream border-none shadow-none hover:bg-white transition-colors duration-300">
      <div>
        <Quote className="text-gold w-8 h-8 mb-6 opacity-50" />
        <p className="font-display text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
          "{testimonial.quote}"
        </p>
      </div>
      <div>
        <h4 className="font-bold text-charcoal tracking-wide">
          {testimonial.clientName}
        </h4>
        <p className="text-gold text-sm uppercase tracking-wider font-medium mt-1">
          {testimonial.eventType}
        </p>
      </div>
    </Card>;
}