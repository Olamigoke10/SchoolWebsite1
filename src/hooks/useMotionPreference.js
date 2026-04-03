import { useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]

/**
 * Props for motion.section scroll reveals; respects prefers-reduced-motion.
 */
export function useRevealSectionProps() {
  const reduced = useReducedMotion()
  if (reduced) {
    return {
      initial: false,
      viewport: { once: true, amount: 0.15 },
    }
  }
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, ease: easeOut },
  }
}

export { useReducedMotion }
