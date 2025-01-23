import React from 'react'; 
import { Link } from 'react-router-dom'; 

import './Card.scss' 

// Functional component to display a card with listing information
const Card = ({ annonce }) => (
    <Link to={`/listing/${annonce.id}`} className="card">  
        <img src={annonce.cover} alt={annonce.title} className="card__image"/>  
        <div className="card__title">{annonce.title}</div>  
    </Link>
);

export default Card;  
