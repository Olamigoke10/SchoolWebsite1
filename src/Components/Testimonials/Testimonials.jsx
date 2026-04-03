import { useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
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
      'Moon Stars Scholars Academy transformed my child\'s education. With its forward-thinking curriculum and supportive community, my child has blossomed into a confident learner ready to tackle any challenge the future brings.',
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
      'As a parent, I couldn\'t be happier with the education my children are receiving at Moon Stars Scholars Academy. The inclusive atmosphere and top-notch facilities make it a truly exceptional learning environment.',
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

  const goNext = () => setIndex((i) => (i + 1) % count)
  const goPrev = () => setIndex((i) => (i - 1 + count) % count)

  return (
    <div className="testimonials">
      <button
        type="button"
        className="slider-nav next-btn"
        onClick={goNext}
        aria-label="Next testimonial"
      >
        <img src={next_icon} alt="" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="slider-nav back-btn"
        onClick={goPrev}
        aria-label="Previous testimonial"
      >
        <img src={back_icon} alt="" aria-hidden="true" />
      </button>
      <div className="slider" aria-live="polite">
        <ul style={{ transform: `translateX(-${index * 100}%)` }}>
          {SLIDES.map((slide) => (
            <li key={slide.name}>
              <div className="slide">
                <div className="user-info">
                  <img src={slide.avatar} alt="" />
                  <div>
                    <h3>{slide.name}</h3>
                    <span>{slide.location}</span>
                  </div>
                </div>
                <p>{slide.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
