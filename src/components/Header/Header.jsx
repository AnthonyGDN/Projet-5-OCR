import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss'; 

// Functional component to display the header
const Header = () => (
<header className="header">
        <img src="../../public/LOGO.png" alt="Kasa Logo" className="header__logo" />
        <nav className="header__nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>
                Accueil
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}>
                À Propos
            </NavLink>
        </nav>
    </header>
);

export default Header;
