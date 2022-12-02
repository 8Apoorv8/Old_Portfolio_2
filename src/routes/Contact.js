import React from 'react'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="CONTACT." text="Lets have a meet"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact