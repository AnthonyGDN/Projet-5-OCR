import React from 'react';

import './Footer.scss'; 

// Functional component to display the footer
const Footer = () => (
    <footer className="footer">
        <img src="../../public/LOGOFOOTER.png" alt="Kasa Logo" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;
