import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} aria-label="Main">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Moon Stars Scholars Academy" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{ pathname: '/', hash: 'programs' }}>Program</Link>
        </li>
        <li>
          <Link to={{ pathname: '/', hash: 'about' }}>About</Link>
        </li>
        <li>
          <Link to={{ pathname: '/', hash: 'campus' }}>Campus</Link>
        </li>
        <li>
          <Link to={{ pathname: '/', hash: 'testimonials' }}>Testimonials</Link>
        </li>
        <li>
          <Link to="/admissions" className="nav-inline-link">
            Admissions
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav-inline-link">
            News
          </Link>
        </li>
        <li>
          <Link to="/contact" className="btn nav-contact-btn">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
