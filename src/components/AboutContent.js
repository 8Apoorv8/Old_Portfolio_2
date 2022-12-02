import React from 'react'
import { Link } from 'react-router-dom'
import './AboutContent.css'
import react1 from '../Assets/react1.jpg'
import react2 from '../Assets/react2.webp'
const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am a React Developer, I create responsive website for clients and also as projects.</p>
        <Link to="/contact" >
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="img" className='img' />
          </div>
          <div className="img-stack bottom">
            <img src={react2} alt="img" className='img' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutContent