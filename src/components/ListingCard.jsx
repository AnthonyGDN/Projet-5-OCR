import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ annonce }) => (
    <Link to={`/listing/${annonce.id}`} className="card">
        <img src={annonce.cover} alt={annonce.title} />
        <h2>{annonce.title}</h2>
    </Link>
);

export default ListingCard;
