import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

// NotFoundPage component for handling 404 errors
const NotFoundPage = () => (
    <div className="not-found">
        <Header />
        <div className="not-found__content">
            <img src="/404.png" alt="404 Not Found" className="not-found__image" />
            <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
    </div>
);

export default NotFoundPage;
