import React from 'react'; // Import the React library to create the component
import './Banner.scss'; // Import component specific styles

// Banner Functional Component
const Banner = ({ imageUrl, title }) => {
    return (
        <div className="Banner"> 
            <img src={imageUrl} alt={title} className="Banner__image" />  
            {title && <div className="Banner__title">{title}</div>}  
        </div>
    );
};

export default Banner; // Export the component for use elsewhere