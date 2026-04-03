import { Link } from 'react-router-dom'
import './Page.css'

const AdmissionsPage = () => {
  return (
    <main className="page-main">
      <div className="container page-inner">
        <h1>Admissions</h1>
        <p className="page-lead">
          Learn how to apply to Moon Stars Scholars Academy. We welcome families who share our
          commitment to academic excellence and an inclusive community.
        </p>
        <section className="page-section" aria-labelledby="process-heading">
          <h2 id="process-heading">Application process</h2>
          <ol className="page-list">
            <li>Submit an inquiry through our <Link to="/contact">contact page</Link>.</li>
            <li>Schedule a campus visit or virtual meeting with our admissions team.</li>
            <li>Complete the application packet and provide requested records.</li>
            <li>Receive an admissions decision and enrollment instructions.</li>
          </ol>
        </section>
        <p className="page-note">
          For detailed requirements and deadlines, please contact the school office.
        </p>
        <Link to="/contact" className="btn dark-btn page-cta">
          Contact admissions
        </Link>
      </div>
    </main>
  )
}

export default AdmissionsPage
