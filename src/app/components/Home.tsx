import React from 'react'
import Hero from './Home/Hero/Hero'
import AboutMe from './Home/About/AboutMe'
import Services from './Home/Services/Services'
import Skills from './Home/Skills/Skills'
import Project from './Home/Project/Project'
import Future from './Home/Future/Future'
import Review from './Home/Reviews/Reviews'
import Contact from './Home/Contact/Contact'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Project/>
      <Future/>
     <Review/>
     <Contact/>
    </div>
  )
}

export default Home