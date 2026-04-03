import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="site-footer container">
      <h2>Contact Moon Stars Scholars Academy</h2>
      <p>
        Questions about admissions or campus visits? Reach us by email or phone.
      </p>
      <p className="footer-contact">
        <a href="mailto:info@moonstarsscholars.example">info@moonstarsscholars.example</a>
        <span aria-hidden="true"> · </span>
        <a href="tel:+2340000000000">+234 000 000 0000</a>
      </p>
    </footer>
  )
}

export default Footer
