import React from 'react';

import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import Footer from '../components/Footer/Footer.jsx';

import '../styles/_variables.scss';

// AboutPage component to display the "About" section of the website
const AboutPage = () => {
    // Array containing the sections to be displayed with their titles and content
    const collapses = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec les hôtes ou les locataires, soit une expérience de respect et de bienveillance."
        },
        {
            title: "Sécurité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Les hôtes doivent respecter un ensemble de critères détaillés lors de la mise en ligne de leur bien afin d'assurer la sécurité et le confort de tous nos hôtes."
        }
    ];

    return (
        <div className="about-page">
            <Header />
            <Banner imageUrl="AboutBanner.png" title="" />
            <div className="about-page__content">
                {collapses.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;