import React from 'react'; 

import annonces from '../../data/20Last.json';

import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
//import Gallery from '../components/Gallery/Gallery.jsx';
import Card from '../components/Card/Card.jsx';
import Footer from '../components/Footer/Footer.jsx';

// HomePage functional component
const HomePage = () => (
    <div>
        <Header />
        <Banner imageUrl="HomeBanner.png" title="Chez vous, partout et ailleurs" /> 
        <div className="cards-container"> 
            {annonces.map((annonce) => ( 
                <Card key={annonce.id} annonce={annonce} /> // Chaque carte reçoit les données d'une annonce
            ))}
        </div>
        <Footer />
    </div>
);

export default HomePage;