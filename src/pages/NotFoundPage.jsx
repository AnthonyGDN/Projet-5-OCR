import React from 'react';
import { Link } from 'react-router-dom';
//import Header from '../components/Header/Header.jsx';
//import Footer from '../components/Footer/Footer.jsx';

const NotFoundPage = () => (
    <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
        </p>
    </div>
);

export default NotFoundPage;
