import { Link } from 'react-router-dom'
import { PageMotion } from '../Components/PageMotion'
import './Page.css'

const NewsPage = () => {
  return (
    <main className="page-main">
      <div className="container">
        <PageMotion className="page-inner page-inner--wide page-card">
          <header className="page-hero">
            <h1>News &amp; events</h1>
            <p className="page-lead">
              Stay informed about school highlights, community events, and important dates.
            </p>
          </header>
          <ul className="news-list" aria-label="Recent news">
            <li>
              <article>
                <h2>Open house — spring term</h2>
                <p className="news-meta">Upcoming</p>
                <p>
                  Prospective families are invited to tour campus and meet faculty. RSVP via{' '}
                  <Link to="/contact">contact</Link>.
                </p>
              </article>
            </li>
            <li>
              <article>
                <h2>Science fair winners</h2>
                <p className="news-meta">Academics</p>
                <p>
                  Students showcased interdisciplinary projects blending STEM and the arts. Full
                  stories will appear in the next newsletter.
                </p>
              </article>
            </li>
            <li>
              <article>
                <h2>Community service day</h2>
                <p className="news-meta">Community</p>
                <p>
                  Learners partnered with local organizations for a day of volunteering and
                  reflection.
                </p>
              </article>
            </li>
          </ul>
        </PageMotion>
      </div>
    </main>
  )
}

export default NewsPage
