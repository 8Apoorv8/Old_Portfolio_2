import React from 'react'
import './Hero.css'
import introImg from '../Assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={introImg} alt="introimg" />
            </div>
            <div className="content">
                <p>
                    HI, I AM A FREELANCER
                </p>
                <h1>React Developer.</h1>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero