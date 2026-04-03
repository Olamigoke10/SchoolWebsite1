import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

const IMAGES = [
  { src: gallery_1, alt: 'School courtyard with students' },
  { src: gallery_2, alt: 'Classroom learning activity' },
  { src: gallery_3, alt: 'Library and study space' },
  { src: gallery_4, alt: 'Outdoor campus gathering' },
]

const ease = [0.22, 1, 0.36, 1]

const Campus = () => {
  const reduced = useReducedMotion()

  return (
    <div className="campus">
      <div className="campus__grid">
        {IMAGES.map((item, i) => (
          <motion.div
            key={item.alt}
            className="campus__tile"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease }}
            whileHover={reduced ? undefined : { y: -4 }}
          >
            <img src={item.src} alt={item.alt} />
          </motion.div>
        ))}
      </div>
      <motion.button
        type="button"
        className="btn btn-primary campus__cta"
        whileHover={reduced ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
      >
        See more
        <ArrowRight size={18} strokeWidth={2} aria-hidden />
      </motion.button>
    </div>
  )
}

export default Campus
