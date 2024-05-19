import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          
          <div>
            <div className="hero-hand-icon">
              
              
            </div>
            <p>Descubre tu estilo,</p>
            <p>vive tu esencia.</p>
            
          </div>
          <div className="hero-latest-btn">
            <div>Ver nueva colección</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
            
        </div>
    </div>
  )
}
