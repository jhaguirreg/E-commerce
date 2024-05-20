import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/AvellanaLogo.svg';
import 'boxicons'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Productos</li>
            <li>Nuestras políticas</li>
            <li>Quienes somos</li>
            <li>Contacto</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <box-icon type='logo' name='instagram'></box-icon>
            </div>
            <div className="footer-icons-container">
                <box-icon name='facebook-square' type='logo' ></box-icon>
            </div>
            <div className="footer-icons-container">
                <box-icon name='whatsapp' type='logo' ></box-icon>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p><box-icon name='copyright' ></box-icon>2024 Avellana ropa y accesorios. Todos los derechos reservados</p>
        </div>
    </div>
  )
}
