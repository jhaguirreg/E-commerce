import React, { useState } from 'react';
import './Navbar.css'; // Estilos comunes de la barra de navegación
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const location = useLocation();

    // Determinar qué clase de estilos usar
    const navbarClass = location.pathname === '/' ? 'navbar navbar-shop' : 'navbar';
    const navbarMenu = location.pathname === '/' ? 'navbar navbar-shop' : 'navbar';
    return (
        <div className={navbarClass}>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>MENTA</p>
            </div>
            <ul className={navbarMenu}>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Tienda</Link>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("accesorios") }}>
                    <Link style={{ textDecoration: 'none' }} to='/accesorios'>Accesorios</Link>{menu === "accesorios" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("ropa") }}>
                    <Link style={{ textDecoration: 'none' }} to='/ropa'>Ropa</Link>{menu === "ropa" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

