import Hero from '../Components/Hero/Hero'
import Programs from '../Components/Programs/Programs'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Campus from '../Components/Campus/Campus'
import Testimonials from '../Components/Testimonials/Testimonials'
import { MotionSection } from '../Components/MotionSection'
import { Images, MessageCircle, School } from 'lucide-react'

const HomePage = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main className="home-main">
        <div className="container">
          <MotionSection id="programs" aria-labelledby="programs-heading" className="section-block--tight-top">
            <Title
              subTitle="Our programs"
              title="From creche through secondary—one caring journey"
              titleId="programs-heading"
              icon={School}
            />
            <Programs />
          </MotionSection>
          <MotionSection id="about" aria-labelledby="about-heading">
            <About headingId="about-heading" />
          </MotionSection>
          <MotionSection id="campus" aria-labelledby="campus-heading">
            <Title subTitle="Gallery" title="Life on campus" titleId="campus-heading" icon={Images} />
            <Campus />
          </MotionSection>
          <MotionSection id="testimonials" aria-labelledby="testimonials-heading">
            <Title
              subTitle="Testimonials"
              title="Trusted by families and students"
              titleId="testimonials-heading"
              icon={MessageCircle}
            />
            <Testimonials />
          </MotionSection>
        </div>
      </main>
    </>
  )
}

export default HomePage
