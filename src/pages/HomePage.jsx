import React from 'react'; 
import annonces from '../../data/20Last.json';
//import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
//import Gallery from '../components/Gallery.jsx';
import Card from '../components/Card.jsx';
//import Footer from '../components/Footer.jsx';

// HomePage functional component
const HomePage = () => (
    <div>
        <Banner imageUrl="HomeBanner.png" title="Chez vous, partout et ailleurs" /> 
        <div className="cards-container"> 
            {annonces.map((annonce) => ( 
                <Card key={annonce.id} annonce={annonce} /> // Chaque carte reçoit les données d'une annonce
            ))}
    </div>
    </div>
);

export default HomePage;