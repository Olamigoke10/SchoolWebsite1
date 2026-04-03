import { motion } from 'framer-motion'
import { useRevealSectionProps } from '../hooks/useMotionPreference'

export function MotionSection({ children, className = '', ...rest }) {
  const reveal = useRevealSectionProps()
  return (
    <motion.section className={`section-block ${className}`.trim()} {...reveal} {...rest}>
      {children}
    </motion.section>
  )
}
