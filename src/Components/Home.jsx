import React, { useEffect, useState } from 'react'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
const Home = () => {
   

  return (
    <div>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home