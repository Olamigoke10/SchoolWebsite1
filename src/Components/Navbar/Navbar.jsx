import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const hashLink = (hash) => ({ pathname: '/', hash })

const LINKS = [
  { to: '/', label: 'Home' },
  { to: hashLink('programs'), label: 'Program' },
  { to: hashLink('about'), label: 'About' },
  { to: hashLink('campus'), label: 'Campus' },
  { to: hashLink('testimonials'), label: 'Testimonials' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/news', label: 'News' },
]

const NavLinks = ({ onNavigate, className }) => (
  <ul className={className}>
    {LINKS.map(({ to, label }) => (
      <li key={label}>
        <Link to={to} onClick={onNavigate}>
          {label}
        </Link>
      </li>
    ))}
    <li>
      <Link to="/contact" className="btn btn-primary nav-cta" onClick={onNavigate}>
        Contact
      </Link>
    </li>
  </ul>
)

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)')
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  const panelTransition = reduceMotion
    ? { duration: 0.01 }
    : { type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }

  return (
    <header className="site-header">
      <nav
        className={`site-nav container ${sticky ? 'site-nav--scrolled' : ''}`}
        aria-label="Main"
      >
        <div className="site-nav__bar">
          <Link to="/" className="site-nav__logo">
            <img src={logo} alt="MoonStarsScholars Academy" width={180} />
          </Link>

          <NavLinks className="site-nav__links site-nav__links--desktop" />

          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={mobileOpen}
            aria-controls="site-nav-mobile"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} strokeWidth={2} aria-hidden /> : <Menu size={24} strokeWidth={2} aria-hidden />}
            <span className="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="site-nav-mobile"
              className="site-nav__mobile"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={panelTransition}
            >
              <NavLinks className="site-nav__links site-nav__links--mobile" onNavigate={closeMobile} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
