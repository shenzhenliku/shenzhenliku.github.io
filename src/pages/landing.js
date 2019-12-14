import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import FullStack from '../assets/images/FullStack.pdf'
const Landing = props => (
  <Layout>
    <Helmet>
      <title>Jobs - Shenzhen Liku</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      {/* <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
        </div>
      </section> */}
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Full Stack Developer</h3>
              </header>
              <p>
                Are you interested in being able to take a feature from mockups
                all the way to production? If so, this may be the job for you.
                Some front end or backend experience is required but a desire to
                learn and gain valuable experience in both is most important.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    onClick={() => window.open(FullStack)}
                    className="button"
                  >
                    View Job
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>UI Designer</h3>
              </header>
              <p>
                If you are a great designer with experience in designing
                business/Saas applications we would love to talk with you. We
                will be looking to hire for this position in the coming months.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/#" className="button">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </section>
    </div>
  </Layout>
)

export default Landing
