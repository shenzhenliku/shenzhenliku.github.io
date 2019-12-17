import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, welcome to our site!</h1>
      </header>
      <div className="content">
        <p>
          WE ARE WEB DEVELOPERS, WHO LOVE CODING AND USING
          <br />
          TECHNOLOGY TO BRING APPLICATIONS TO LIFE. WE ARE CURRENTLY
          <br />
          BUILDING A SAAS APPLICATION TO BE LAUNCHED APRIL 1ST, 2020.
        </p>
        <ul className="actions">
          <li>
            <a href="/landing" className="button next scrolly">
              Come work with us!
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
