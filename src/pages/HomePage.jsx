import React from 'react'; 

import annonces from '../../data/20Last.json';

import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Card from '../components/Card/Card.jsx';
import Footer from '../components/Footer/Footer.jsx';

// HomePage functional component
const HomePage = () => (
    <div className="homepage">
        <Header />
        <Banner imageUrl="HomeBanner.png" title="Chez vous, partout et ailleurs" /> 
        <div className="cards-container"> 
            {annonces.map((annonce) => ( 
                <Card key={annonce.id} annonce={annonce} /> 
            ))}
        </div>
        <Footer />
    </div>
);

export default HomePage;