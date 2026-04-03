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
      "MoonStarsScholars Academy transformed my child's education. From creche onward, the caring staff and structured programs helped my child become a confident, curious learner ready for each new stage.",
  },
  {
    name: 'Chinedu Adeyemi',
    location: 'Former student, Abuja',
    avatar: user_2,
    quote:
      'Attending MoonStarsScholars Academy through secondary school was the best foundation I could have asked for. The personalized support, diverse classmates, and dedicated teachers set me up for the next chapter with confidence.',
  },
  {
    name: 'Amara Bello',
    location: 'Parent, Port Harcourt',
    avatar: user_3,
    quote:
      "As a parent, I couldn't be happier with the education my children are receiving at MoonStarsScholars Academy. The inclusive atmosphere and facilities support them from early years through secondary with real consistency.",
  },
  {
    name: 'David Okafor',
    location: 'Student, Enugu',
    avatar: user_4,
    quote:
      'MoonStarsScholars Academy has been an enriching experience across primary and secondary. The blend of academics, clubs, and character-building opportunities has prepared me for success after secondary school.',
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
