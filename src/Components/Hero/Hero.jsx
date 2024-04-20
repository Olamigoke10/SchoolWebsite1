import React from 'react'
import './Hero.css' 
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For A Better World</h1>
            <p>Welcome to MoonStarsScholars Academy! 
                Ignite your learning journey under our celestial guidance. 
                Discover boundless opportunities for growth, excellence,
                and exploration in education's vast universe.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
