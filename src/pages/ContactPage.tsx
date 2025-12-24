import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
export function ContactPage() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="pt-32 pb-24 bg-cream min-h-screen">
      <Helmet>
        <title>Contact — Lumina Photography</title>
        <meta name="description" content="Get in touch to discuss your event. Send a message or reach out directly via email or phone." />
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal mb-6">
            Get In Touch
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            We'd love to hear about your upcoming event. Fill out the form below
            or reach out directly to start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
              <h3 className="font-display text-2xl text-charcoal mb-6">
                Contact Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-full text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Email
                    </p>
                    <a href="mailto:hello@lumina.com" className="text-charcoal hover:text-gold transition-colors font-medium">
                      hello@lumina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-full text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Phone
                    </p>
                    <a href="tel:+15551234567" className="text-charcoal hover:text-gold transition-colors font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cream rounded-full text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">
                      Studio
                    </p>
                    <p className="text-charcoal font-medium">
                      123 Creative Ave, Arts District
                      <br />
                      New York, NY 10013
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-stone-100">
                <h4 className="text-sm font-bold text-charcoal mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-charcoal text-white rounded-full hover:bg-gold transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="p-2 bg-charcoal text-white rounded-full hover:bg-gold transition-colors">
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-stone-100">
              <h3 className="font-display text-2xl text-charcoal mb-8">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
}