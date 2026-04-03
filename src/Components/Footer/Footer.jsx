import { Mail, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner container">
        <h2 className="site-footer__title">Moon Stars Scholars Academy</h2>
        <p className="site-footer__lead">
          Questions about admissions or campus visits? Reach us by email or phone—we typically reply
          within one business day.
        </p>
        <div className="site-footer__channels">
          <a className="site-footer__link" href="mailto:info@moonstarsscholars.example">
            <span className="site-footer__icon" aria-hidden>
              <Mail size={20} strokeWidth={2} />
            </span>
            <span>info@moonstarsscholars.example</span>
          </a>
          <a className="site-footer__link" href="tel:+2340000000000">
            <span className="site-footer__icon" aria-hidden>
              <Phone size={20} strokeWidth={2} />
            </span>
            <span>+234 000 000 0000</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
