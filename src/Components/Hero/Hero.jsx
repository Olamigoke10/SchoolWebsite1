import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]

const Hero = () => {
  const reduced = useReducedMotion()

  const containerProps = reduced
    ? {}
    : {
        initial: 'hidden',
        animate: 'visible',
        variants: {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.12 },
          },
        },
      }

  const itemProps = reduced
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 22 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
        },
      }

  return (
    <div className="hero" id="hero">
      <div className="hero__overlay" aria-hidden />
      <div className="hero__inner container">
        <motion.div className="hero__content" {...containerProps}>
          <motion.div className="hero__badge" {...itemProps}>
            <Sparkles size={16} strokeWidth={2} aria-hidden />
            <span>Excellence in every learner</span>
          </motion.div>
          <motion.h1 className="hero__title" {...itemProps}>
            Education that launches{' '}
            <span className="hero__title-accent">bold, capable futures</span>
          </motion.h1>
          <motion.p className="hero__lead" {...itemProps}>
            MoonStarsScholars Academy offers creche, primary, and secondary programs in one
            supportive community—nurturing confidence, character, and strong foundations from the
            earliest years through graduation.
          </motion.p>
          <motion.div className="hero__actions" {...itemProps}>
            <motion.div whileHover={reduced ? undefined : { scale: 1.02 }} whileTap={reduced ? undefined : { scale: 0.98 }}>
              <Link to={{ pathname: '/', hash: 'programs' }} className="btn btn-primary hero__cta-primary">
                Explore programs
                <ArrowRight size={18} strokeWidth={2} aria-hidden />
              </Link>
            </motion.div>
            <motion.div whileHover={reduced ? undefined : { scale: 1.02 }} whileTap={reduced ? undefined : { scale: 0.98 }}>
              <Link to="/admissions" className="btn btn-ghost-light hero__cta-secondary">
                Apply for admissions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
