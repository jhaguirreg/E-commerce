import React, { useState } from 'react';
import './Navbar.css'; 
import logo from '../Assets/AvellanaLogo.svg';
/*import cart_icon from '../Assets/cart_icon.png';*/
import { Link, useLocation } from 'react-router-dom';
import 'boxicons'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const location = useLocation();

    const navbarClass = location.pathname === '/' ? 'navbar-shop' : 'navbar';
    const navMenu = location.pathname === '/' ? 'nav-menu-shop' : 'nav-menu';
    const navLogo = location.pathname === '/' ? 'nav-logo-shop' : 'nav-logo';
    const colorIcon = location.pathname === '/' ? 'white' : 'black';
    return (
        <div className={navbarClass}>
            <div className={navLogo}>
                <img src={logo} alt="" />
                
            </div>
            <ul className={navMenu}>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/'>Tienda</Link>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("accesorios") }}>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/accesorios'>Accesorios</Link>{menu === "accesorios" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("ropa") }}>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/ropa'>Ropa</Link>{menu === "ropa" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><box-icon name='user' size='md' color={colorIcon}></box-icon></Link>
                <Link to='/cart'><box-icon name='cart' size='md' color={colorIcon}></box-icon></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

