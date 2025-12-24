import React from 'react';
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}
export function Textarea({
  label,
  error,
  className = '',
  ...props
}: TextareaProps) {
  return <div className="w-full">
      <label className="block text-sm font-medium text-charcoal/80 mb-1.5 font-sans">
        {label}
      </label>
      <textarea className={`w-full px-4 py-3 bg-white border ${error ? 'border-red-500' : 'border-stone-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors text-charcoal placeholder-stone-400 min-h-[120px] resize-y ${className}`} {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>;
}