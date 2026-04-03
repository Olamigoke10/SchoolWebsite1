import Hero from '../Components/Hero/Hero'
import Programs from '../Components/Programs/Programs'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Campus from '../Components/Campus/Campus'
import Testimonials from '../Components/Testimonials/Testimonials'

const HomePage = () => {
  return (
    <>
      <header id="hero">
        <Hero />
      </header>
      <main>
        <div className="container">
          <section id="programs" aria-labelledby="programs-heading">
            <Title subTitle="Our PROGRAM" title="What We Offer" titleId="programs-heading" />
            <Programs />
          </section>
          <section id="about" aria-labelledby="about-heading">
            <About headingId="about-heading" />
          </section>
          <section id="campus" aria-labelledby="campus-heading">
            <Title subTitle="Gallery" title="School Photos" titleId="campus-heading" />
            <Campus />
          </section>
          <section id="testimonials" aria-labelledby="testimonials-heading">
            <Title subTitle="TESTIMONIALS" title="What Student Says" titleId="testimonials-heading" />
            <Testimonials />
          </section>
        </div>
      </main>
    </>
  )
}

export default HomePage
