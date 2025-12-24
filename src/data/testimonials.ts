export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  eventType: string;
}
export const testimonials: Testimonial[] = [{
  id: '1',
  clientName: 'Sarah & Michael',
  quote: 'Captured our day perfectly. Every emotion, every moment was preserved with such elegance.',
  eventType: 'Wedding'
}, {
  id: '2',
  clientName: 'Tech Summit Organizers',
  quote: 'Professional, creative, and so easy to work with. The photos elevated our brand significantly.',
  eventType: 'Corporate'
}, {
  id: '3',
  clientName: 'The Johnson Family',
  quote: 'These photos will be treasured for generations. You have a gift for capturing the real us.',
  eventType: 'Private Session'
}, {
  id: '4',
  clientName: 'Emma & James',
  quote: 'We are blown away by the artistry. Not just photos, but true pieces of art.',
  eventType: 'Wedding'
}];