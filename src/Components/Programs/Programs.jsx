import { motion, useReducedMotion } from 'framer-motion'
import './Programs.css'
import programs_1 from '../../assets/program-1.png'
import programs_2 from '../../assets/program-2.png'
import programs_3 from '../../assets/program-3.png'
import programs_icon_1 from '../../assets/program-icon-1.png'
import programs_icon_2 from '../../assets/program-icon-2.png'
import programs_icon_3 from '../../assets/program-icon-3.png'

const ease = [0.22, 1, 0.36, 1]

const ITEMS = [
  { img: programs_1, icon: programs_icon_1, alt: 'Students celebrating graduation', label: 'Graduation Degree' },
  { img: programs_2, icon: programs_icon_2, alt: 'Graduate students in academic regalia', label: 'Masters Degree' },
  { img: programs_3, icon: programs_icon_3, alt: 'Postgraduate scholars collaborating', label: 'Post Graduation' },
]

const Programs = () => {
  const reduced = useReducedMotion()

  return (
    <div className="programs">
      {ITEMS.map((item, i) => (
        <motion.article
          key={item.label}
          className="program-card"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: i * 0.08, ease }}
          whileHover={reduced ? undefined : { y: -6 }}
        >
          <div className="program-card__media">
            <img src={item.img} alt={item.alt} />
            <div className="program-card__caption">
              <img src={item.icon} alt="" aria-hidden />
              <p>{item.label}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default Programs
