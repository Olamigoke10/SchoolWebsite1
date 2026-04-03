import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const BULLETS = [
  'Safe, stimulating creche care and early-years learning that builds social and school-ready skills.',
  'Primary years that strengthen literacy, numeracy, creativity, and confidence in a nurturing environment.',
  'Secondary pathways that deepen subject mastery, leadership, and preparation for life after school.',
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
          alt="MoonStarsScholars Academy campus and students from creche through secondary"
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
          About MoonStarsScholars Academy
        </p>
        <h2 className="about-title">Growing minds from creche to secondary</h2>
        <p className="about-lead">
          Families choose us for consistent care and quality across every stage—warm teachers, clear
          values, and a campus where children feel known and supported.
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
