import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn'/>
      <img src={back_icon} alt=""  className='back-btn'/>
      <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>M&S, Nigeria</span>
                            </div>
                    </div>
                    <p>
                    Moon Stars Scholars Academy transformed my child's education. 
                    With its forward-thinking curriculum and supportive community,
                    my child has blossomed into a confident learner ready to tackle any challenge the future 
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>M&S, Nigeria</span>
                            </div>
                    </div>
                    <p>
                    Enrolling at Moon Stars Scholars Academy was the best decision I made for my academic journey.
                    The personalized support, diverse environment,
                    and cutting-edge resources have propelled me towards my dreams.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>M&S, Nigeria</span>
                            </div>
                    </div>
                    <p>
                    As a parent, I couldn't be happier with the education
                    my children are receiving at Moon Stars Scholars Academy.
                    The inclusive atmosphere and top-notch facilities make it a truly exceptional learning environment.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>M&S, Nigeria</span>
                            </div>
                    </div>
                    <p>
                    Attending Moon Stars Scholars Academy has been an enriching experience. 
                    The interdisciplinary approach to learning, coupled with opportunities for extracurricular involvement,
                    has broadened my horizons and prepared me for success beyond graduation 
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
