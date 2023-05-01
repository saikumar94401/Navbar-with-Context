import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutHeadingColor = isDarkTheme ? 'light-color' : 'dark-color'
      const backgroundColor = isDarkTheme
        ? 'dark-background-color'
        : 'light-background-color'
      return (
        <div className="not-found-container">
          <Navbar />
          <div className={`image-container ${backgroundColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${aboutHeadingColor}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-para ${aboutHeadingColor}`}>
              We cannot seem to find the page that you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
