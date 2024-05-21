import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Consigue ofertas exclusivas en tu correo electrónico</h1>
        <p>Suscribete a nuestras publicaciones para mantenerte informado</p>
        <div>
            <input type="email" placeholder='Tu correo electrónico'/>
            <button>Suscribirse</button>
        </div>
    </div>
  )
}
