import { Link } from 'react-router-dom'
import { Mail, Phone, Clock } from 'lucide-react'
import { PageMotion } from '../Components/PageMotion'
import './Page.css'

const ContactPage = () => {
  return (
    <main className="page-main">
      <div className="container">
        <PageMotion className="page-inner page-card">
          <header className="page-hero">
            <h1>Contact</h1>
            <p className="page-lead">
              We are happy to answer questions about programs, visits, and enrollment at Moon Stars
              Scholars Academy.
            </p>
          </header>
          <section className="page-section contact-details" aria-labelledby="reach-heading">
            <h2 id="reach-heading">Reach us</h2>
            <p>
              <Mail
                size={18}
                strokeWidth={2}
                className="page-inline-icon"
                aria-hidden
              />{' '}
              <strong>Email:</strong>{' '}
              <a href="mailto:info@moonstarsscholars.example">info@moonstarsscholars.example</a>
            </p>
            <p>
              <Phone size={18} strokeWidth={2} className="page-inline-icon" aria-hidden />{' '}
              <strong>Phone:</strong> <a href="tel:+2340000000000">+234 000 000 0000</a>
            </p>
            <p>
              <Clock size={18} strokeWidth={2} className="page-inline-icon" aria-hidden />{' '}
              <strong>Office hours:</strong> Monday–Friday, 8:00 a.m.–4:00 p.m.
            </p>
          </section>
          <p>
            <Link to="/admissions" className="btn btn-primary">
              Admissions information
            </Link>
          </p>
        </PageMotion>
      </div>
    </main>
  )
}

export default ContactPage
