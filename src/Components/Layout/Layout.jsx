import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollToHash from '../ScrollToHash'

const Layout = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <div className="page-shell">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
