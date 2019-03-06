import React from 'react'

const logo = process.env.PUBLIC_URL + 'assets/img/react-logo.png'
const github_logo = process.env.PUBLIC_URL + 'assets/img/github-logo.png'

const Header = () => (
  <header>
      <nav className="nav__bar">
          <div className="container">
              <div className="nav__bar-logo">
                  <img src={logo} alt="Logo" />
              </div>
              <div className="nav__bar-github">
                  <img src={github_logo} alt="Github Logo" />
              </div>
          </div>
      </nav>
  </header>
)

export default Header
