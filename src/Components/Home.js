import React from 'react'
import Banner from './Banner'
import Notes from './Notes'
import Team from './Team'
import Contact from './Contact'
import About from './About'
import Pricing from './Pricing'
import News from './News'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Notes/>
      <Team/>
      <About />
      <Pricing />
      <News />
      <Contact />
    </div>
  )
}

export default Home
