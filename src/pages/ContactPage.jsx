import { Link } from 'react-router-dom'
import './Page.css'

const ContactPage = () => {
  return (
    <main className="page-main">
      <div className="container page-inner">
        <h1>Contact</h1>
        <p className="page-lead">
          We are happy to answer questions about programs, visits, and enrollment at Moon Stars
          Scholars Academy.
        </p>
        <section className="page-section contact-details" aria-labelledby="reach-heading">
          <h2 id="reach-heading">Reach us</h2>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@moonstarsscholars.example">info@moonstarsscholars.example</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+2340000000000">+234 000 000 0000</a>
          </p>
          <p>
            <strong>Office hours:</strong> Monday–Friday, 8:00 a.m.–4:00 p.m.
          </p>
        </section>
        <p>
          <Link to="/admissions" className="btn dark-btn">
            Admissions information
          </Link>
        </p>
      </div>
    </main>
  )
}

export default ContactPage
