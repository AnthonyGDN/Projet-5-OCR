import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
        </nav>
    </header>
);

export default Header;
