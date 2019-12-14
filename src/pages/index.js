import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Shenzhen Liku Technology"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            {/* <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article> */}
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Jobs</h3>
                <p>See what we are looking for</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>About Us</h3>
                <p>Get to know us</p>
              </header>
              <Link to="/generic" className="link primary"></Link>
            </article>
            {/* <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article> */}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>What we do</h2>
              </header>
              <p>
                Shenzhen Liku Technology is a software company based in
                Shenzhen, China. We are a small team who are currently building
                an{' '}
                <a href="https://www.bamboohr.com/hr-glossary/human-capital-management-hcm/">
                  HCM
                </a>{' '}
                Saas application. Our primmary tools and languages are
                JavaScript, React, Node, Postgres, GraphQL, HTML, CSS, AWS. If
                you enjoy working on challenging problems, making a meaningful
                impact from day one, and working in a small fast paced
                environment you should check out our job applications below.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Jobs
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
