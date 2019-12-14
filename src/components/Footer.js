import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/m_demerjian"
            className="icon alt fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/michael.demerjian.1"
            className="icon alt fa-facebook"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Demerjianm"
            className="icon alt fa-github"
            target="_blank"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/demerjianm/"
            className="icon alt fa-linkedin"
            target="_blank"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; michaeldemerjian</li>
      </ul>
    </div>
  </footer>
)

export default Footer
