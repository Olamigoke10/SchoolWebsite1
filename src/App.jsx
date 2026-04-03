import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './pages/HomePage'
import AdmissionsPage from './pages/AdmissionsPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news" element={<NewsPage />} />
      </Route>
    </Routes>
  )
}

export default App
