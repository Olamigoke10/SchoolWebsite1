import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const BULLETS = [
  'Cutting-edge facilities and interdisciplinary studies in a welcoming, inclusive community.',
  'A curriculum that blends science, art, and humanities with collaborative, real-world projects.',
  'Extracurriculars, service, and academics that inspire lifelong curiosity.',
]

const About = ({ headingId }) => {
  const reduced = useReducedMotion()

  return (
    <div className="about">
      <motion.div
        className="about-left"
        initial={reduced ? false : { opacity: 0, x: -20 }}
        whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={about_img}
          alt="Moon Stars Scholars Academy campus and students"
          className="about-img"
        />
        <img src={play_icon} alt="Play video" className="play-icon" />
      </motion.div>
      <motion.div
        className="about-right"
        initial={reduced ? false : { opacity: 0, x: 20 }}
        whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="about-kicker" id={headingId}>
          About Moon Stars Scholars Academy
        </p>
        <h2 className="about-title">Knowledge is power—applied with purpose</h2>
        <p className="about-lead">
          Students embark on a journey of discovery with faculty who care, peers who challenge, and
          programs designed for the world ahead.
        </p>
        <ul className="about-list" aria-label="Highlights">
          {BULLETS.map((text) => (
            <li key={text}>
              <CheckCircle2 className="about-list__icon" size={22} strokeWidth={2} aria-hidden />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default About
