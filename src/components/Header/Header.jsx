import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 

const Header = () => (
<header className="header">
        <img src="../../public/LOGO.png" alt="Kasa Logo" className="header__logo" />
        <nav className="header__nav">
            <Link to="/" className="header__link">Accueil</Link>
            <Link to="/about" className="header__link">À propos</Link>
        </nav>
    </header>
);

export default Header;
