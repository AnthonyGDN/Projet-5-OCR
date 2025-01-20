// Import the React library to create the component
import React from 'react'; 
// Allows to create navigation links
import { Link } from 'react-router-dom'; 
// Import component specific styles
import './Card.scss' 

// Card functional component
const Card = ({ annonce }) => (
    <Link to={`/listing/${annonce.id}`} className="card">  
        <img src={annonce.cover} alt={annonce.title} className="card__image"/>  
        <div className="card__title">{annonce.title}</div>  
    </Link>
);

export default Card;  
