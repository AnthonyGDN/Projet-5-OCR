import React from 'react'; // Import the React library to create the component
import { Link } from 'react-router-dom'; // Allows to create navigation links
import '../styles/Card.scss' // Import component specific styles

// Card functional component
const Card = ({ annonce }) => (
    <Link to={`/listing/${annonce.id}`} className="card">  
        <img src={annonce.cover} alt={annonce.title} className="card__image"/>  
        <div className="card__title">{annonce.title}</div>  
    </Link>
);

export default Card;  // Export the component for use elsewhere
