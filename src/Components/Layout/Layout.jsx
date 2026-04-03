import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollToHash from '../ScrollToHash'

const Layout = () => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
