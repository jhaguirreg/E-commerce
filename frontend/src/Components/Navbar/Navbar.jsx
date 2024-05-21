import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import logo from '../Assets/AvellanaLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import 'boxicons'

export const Navbar = () => {
    const [scrollPastPoint, setScrollPastPoint] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/' && window.scrollY > 150) {
                setScrollPastPoint(true);
            } else {
                setScrollPastPoint(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    

    let navbarClass, navMenu, navLogo, colorIcon;

    if (location.pathname === '/') {
    if (!scrollPastPoint) {
        navbarClass = 'navbar navbar-shop';
        navMenu = 'nav-menu-shop';
        navLogo = 'nav-logo-shop';
        colorIcon = 'white';
    } else if (location.pathname === '/'){
        if (scrollPastPoint){
            navbarClass = 'navbar-shop2';
            navMenu = 'nav-menu';
            navLogo = 'nav-logo';
            colorIcon = 'black';
        } 
    }
    } else {
    navbarClass = 'navbar';
    navMenu = 'nav-menu';
    navLogo = 'nav-logo';
    colorIcon = 'black';
    }

    return (
        <div className={navbarClass}>
            <div className={navLogo}>
                <img src={logo} alt="" />
            </div>
            <ul className={navMenu}>
                <li>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/'>Tienda</Link>
                    {location.pathname === '/' &&  <hr />}
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/accesorios'>Accesorios</Link>
                    {location.pathname === '/accesorios' && <hr />}
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color:'inherit'}} to='/ropa'>Ropa</Link>
                    {location.pathname === '/ropa' && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><box-icon name='user' size='md' color={colorIcon}></box-icon></Link>
                <Link to='/cart'><box-icon name='cart' size='md' color={colorIcon}></box-icon></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

