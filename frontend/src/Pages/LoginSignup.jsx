import React, { useState, useContext, useEffect } from 'react';
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const navigate = useNavigate();
  const {isLoggedIn} = useContext(ShopContext);
  useEffect(() => {
    if (isLoggedIn) {
        navigate('/clientmenu'); // Muestra el mensaje de bienvenida si ya ha iniciado sesión
    }
}, [isLoggedIn]);
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Registrarse</h1>
          <div className="loginsignup-fields">
            <input required type="text" placeholder='Cédula *'/>
            <input required type="text" placeholder='Nombre *'/>
            <input required type="email" placeholder='Correo electrónico *'/>
            <input required type="password" placeholder='Contraseña *'/>
            <input type="text" placeholder='Celular'/>
            <input type="text" placeholder='Dirección de entrega'/>
          </div>
          <button>Continuar</button>
          <p className="loginsignup-login">Ya tienes una cuenta? <span><Link to='/loginlog'>Inicia sesión aquí</Link></span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>Al presionar continuar, estoy de acuerdo con los términos y condiciones.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
