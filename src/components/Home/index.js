import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      console.log(homeImage)
      const aboutHeadingColor = isDarkTheme ? 'light-color' : 'dark-color'
      const backgroundColor = isDarkTheme
        ? 'dark-background-color'
        : 'light-background-color'
      return (
        <div className="home-container">
          <Navbar />
          <div className={`image-container ${backgroundColor}`}>
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={`home-heading ${aboutHeadingColor}`}>home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
