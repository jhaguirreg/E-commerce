import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Registrarse</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Correo electrónico'/>
            <input type="password" placeholder='Contraseña'/>
          </div>
          <button>Continuar</button>
          <p className="loginsignup-login">Ya tienes una cuenta? <span>Inicia sesión aquí</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>Al presionar continuar, estoy de acuerdo con los términos y condiciones.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
