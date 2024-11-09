import React from 'react'
import Details from '../components/details/Details';
import AboutMe from '../components/Home/About/AboutMe';
import Skills from '../components/Home/Skills/Skills';

const page = () => {
  return (
    <div>
        <Details/>
        <AboutMe/>
       <div>
       <Skills/>
       </div>
    </div>
  )
}

export default page