import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'> 
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT MOON STARS SCHOLARS ACADEMY</h3>
        <h2>Knowledge is Power</h2>
        <p>At Moon Stars Scholars Academy, students embark on an interstellar journey of learning, 
            exploring cutting-edge facilities and interdisciplinary studies,
             while fostering a community united by diversity and inclusivity.</p>
        <p>
        Moon Stars Scholars Academy's curriculum transcends traditional boundaries, 
        blending science, art, and humanities, 
        fostering a passion for lifelong learning through collaborative projects and cosmic exploration.
        </p>
        <p>Moon Stars Scholars Academy fosters a diverse community, 
        where students engage in extracurricular activities, service projects, 
        and academic pursuits, igniting a passion for learning and reaching for the stars.
</p>
      </div>
    </div>
  )
}

export default About
