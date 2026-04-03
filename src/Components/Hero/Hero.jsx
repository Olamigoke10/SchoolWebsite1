import { Link } from 'react-router-dom'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>
          Welcome to Moon Stars Scholars Academy! Ignite your learning journey under our celestial
          guidance. Discover boundless opportunities for growth, excellence, and exploration in
          education&apos;s vast universe.
        </p>
        <Link to={{ pathname: '/', hash: 'programs' }} className="btn">
          Explore more{' '}
          <img src={dark_arrow} alt="" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
