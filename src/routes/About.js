import React from 'react'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="ABOUT." text="A FreeLancer, Learning and Improving."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About