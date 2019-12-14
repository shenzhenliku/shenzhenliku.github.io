import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, welcome to our site!</h1>
      </header>
      <div className="content">
        <p>
          We are web developers, who loves coding and using
          <br />
          technology to bring application's to life. Currently
          <br />
          building a Saas application to be launched April 1st, 2020.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Come work with us!
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
