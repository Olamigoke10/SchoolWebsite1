import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const SLIDES = [
  {
    name: 'Adaeze Okonkwo',
    location: 'Parent, Lagos',
    avatar: user_1,
    quote:
      "Moon Stars Scholars Academy transformed my child's education. With its forward-thinking curriculum and supportive community, my child has blossomed into a confident learner ready to tackle any challenge the future brings.",
  },
  {
    name: 'Chinedu Adeyemi',
    location: 'Alumnus, Abuja',
    avatar: user_2,
    quote:
      'Enrolling at Moon Stars Scholars Academy was the best decision I made for my academic journey. The personalized support, diverse environment, and cutting-edge resources have propelled me towards my dreams.',
  },
  {
    name: 'Amara Bello',
    location: 'Parent, Port Harcourt',
    avatar: user_3,
    quote:
      "As a parent, I couldn't be happier with the education my children are receiving at Moon Stars Scholars Academy. The inclusive atmosphere and top-notch facilities make it a truly exceptional learning environment.",
  },
  {
    name: 'David Okafor',
    location: 'Student, Enugu',
    avatar: user_4,
    quote:
      'Attending Moon Stars Scholars Academy has been an enriching experience. The interdisciplinary approach to learning, coupled with opportunities for extracurricular involvement, has broadened my horizons and prepared me for success beyond graduation.',
  },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const count = SLIDES.length
  const reduced = useReducedMotion()

  const goNext = () => setIndex((i) => (i + 1) % count)
  const goPrev = () => setIndex((i) => (i - 1 + count) % count)

  const slide = SLIDES[index]

  const transition = reduced ? { duration: 0.01 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }

  return (
    <div className="testimonials">
      <button type="button" className="slider-nav back-btn" onClick={goPrev} aria-label="Previous testimonial">
        <ChevronLeft size={22} strokeWidth={2} aria-hidden />
      </button>
      <button type="button" className="slider-nav next-btn" onClick={goNext} aria-label="Next testimonial">
        <ChevronRight size={22} strokeWidth={2} aria-hidden />
      </button>
      <div className="testimonials__viewport" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={slide.name}
            className="testimonial-card"
            initial={reduced ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -28 }}
            transition={transition}
          >
            <div className="testimonial-card__header">
              <img src={slide.avatar} alt="" className="testimonial-card__avatar" />
              <div>
                <h3 className="testimonial-card__name">{slide.name}</h3>
                <p className="testimonial-card__meta">{slide.location}</p>
              </div>
            </div>
            <p className="testimonial-card__quote">&ldquo;{slide.quote}&rdquo;</p>
          </motion.article>
        </AnimatePresence>
        <div className="testimonials__dots" role="tablist" aria-label="Choose testimonial">
          {SLIDES.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              className={`testimonials__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
