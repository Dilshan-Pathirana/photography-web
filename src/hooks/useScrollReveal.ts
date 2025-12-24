import { useInView } from 'framer-motion';
import { useRef } from 'react';
export function useScrollReveal(once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.2
  });
  return {
    ref,
    isInView
  };
}