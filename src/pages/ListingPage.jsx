import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import annonces from '../../data/20Last.json';

import Header from '../components/Header/Header.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Location from '../components/Location/Location.jsx';
import Owner from '../components/Owner/Owner.jsx';
import Tags from '../components/Tags/Tags.jsx';
import Rating from '../components/Rating/Rating.jsx';
import Collapse from '../components/Collapse/Collapse.jsx';
import Footer from '../components/Footer/Footer.jsx';

// ListingPage component that displays detailed information about a selected listing
const ListingPage = () => {
    // Get the 'id' parameter from the URL
    const { id } = useParams();
    // Find the matching listing based on the 'id'
    const annonce = annonces.find(item => item.id === id);

    // Display an error message if the listing is not found
    if (!annonce) {
        return <p>Annonce non trouvée</p>;
    }

    return (
        <div>
            <Header />
            <Carousel images={annonce.pictures} />
            <div className="listing-info">
                <div className="listing-info__left">
                    <Location title={annonce.title} location={annonce.location} />
                    <Tags tags={annonce.tags} />
                </div>
                <div className="listing-info__right">
                    <Owner name={annonce.host.name} picture={annonce.host.picture} />
                    <Rating rating={parseInt(annonce.rating)} />
                </div>
            </div>
            <div className="collapses">
                <Collapse title="Description" content={annonce.description} />
                <Collapse title="Équipements" content={annonce.equipments} />
            </div>
            <Footer />
        </div>
    );
};

export default ListingPage;