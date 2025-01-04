import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('menu');

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={assets.logo_removebg} alt="Logo" />
                <p>Prethegem Food House</p>
            </div>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("app")} className={menu === "app" ? "active" : ""}>App</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
            </ul>
            <div className="navbar-right">
                {}
            </div>
        </div>
    );
}

export default Navbar;
