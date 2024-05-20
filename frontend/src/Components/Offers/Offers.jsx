import React from 'react'
import './Offers.css'
import exclusive_image from'../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusivas</h1>
            <h1>Ofertas para ti</h1>
            <p>LOS MEJORES PRODUCTOS</p>
            <button>Ver ahora</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
