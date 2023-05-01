import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const backgroundColor = isDarkTheme
        ? 'dark-background-color'
        : 'light-background-color'

      const linkColor = isDarkTheme ? 'light-color' : 'dark-color'
      return (
        <div className={`navbar-container ${backgroundColor}`}>
          <img
            src={websiteLogo}
            alt="website logo"
            className="navbar-website-logo"
          />
          <div className="navbar-links-container">
            <ul className="navbar-links-list">
              <li className={`navbar-each-link ${linkColor}`}>
                <Link to="/">Home</Link>
              </li>

              <li className={`navbar-each-link ${linkColor}`}>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="website-theme"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img src={theme} alt="theme" className="navbar-website-logo" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
