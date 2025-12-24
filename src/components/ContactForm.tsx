import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const eventType = String(formData.get('eventType') ?? '').trim();
    const date = String(formData.get('date') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Name is required.';
    if (!email) nextErrors.email = 'Email is required.';
    if (!message) nextErrors.message = 'Message is required.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitting(false);
      return;
    }

    const subject = `Photography inquiry${eventType ? ` — ${eventType}` : ''}`;
    const bodyLines = [`Name: ${name}`, `Email: ${email}`];
    if (eventType) bodyLines.push(`Event Type: ${eventType}`);
    if (date) bodyLines.push(`Date: ${date}`);
    bodyLines.push('', message);

    const mailto = `mailto:hello@lumina.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;

    setIsSubmitting(false);
    setIsSuccess(true);
  };
  if (isSuccess) {
    return <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="bg-cream p-12 rounded-lg text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-gold" />
        </div>
        <h3 className="font-display text-3xl text-charcoal mb-4">
          Message Sent
        </h3>
        <p className="text-stone-600 mb-8">
          Thank you for reaching out. We will get back to you within 24 hours to
          discuss your vision.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </motion.div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Name" name="name" placeholder="Your full name" required error={errors.name} />
        <Input label="Email" name="email" type="email" placeholder="your@email.com" required error={errors.email} />
      </div>

      <Input label="Event Type" name="eventType" placeholder="e.g. Wedding, Corporate, Portrait" />

      <Input label="Date (Optional)" name="date" type="date" />

      <Textarea label="Message" name="message" placeholder="Tell us about your event and vision..." required rows={5} error={errors.message} />

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>;
}