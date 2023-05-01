import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutHeadingColor = isDarkTheme ? 'light-color' : 'dark-color'
      console.log(aboutImage)
      const backgroundColor = isDarkTheme
        ? 'dark-background-color'
        : 'light-background-color'
      return (
        <div className={`home-container ${backgroundColor}`}>
          <Navbar />
          <div className="image-container">
            <img src={aboutImage} alt="about" className="home-image" />
            <h1 className={`about-heading ${aboutHeadingColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
