import React from 'react'
import './Hero.css'
import { PiHandWavingLight } from "react-icons/pi";



const Hero = () => {
  return (
    <div className='hero-containner' id='Hero'>
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-content">
            <h4></h4>
            <h2>Hello! I'm <PiHandWavingLight className='waving'/></h2>
            <h1 className='gold'>Omolisa Olayemi</h1>
            <p>
        
              Full Stack Developer Based in Nigeria
            </p>

           

          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero