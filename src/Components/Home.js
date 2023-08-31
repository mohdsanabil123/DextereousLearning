import React from 'react'
import Banner from './Banner'
import Notes from './Notes'
import Team from './Team'
import Contact from './Contact'
import About from './About'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Notes/>
      <Team/>
      <About />
      <Contact />
    </div>
  )
}

export default Home
