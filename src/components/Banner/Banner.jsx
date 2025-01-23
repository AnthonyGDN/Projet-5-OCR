import React from 'react'; 

import './Banner.scss'; 

// Functional component to display a banner with an image and optional title
const Banner = ({ imageUrl, title }) => {
    return (
        <div className="Banner"> 
            <img src={imageUrl} alt={title} className="Banner__image" />  
            {title && <div className="Banner__title">{title}</div>}  
        </div>
    );
};

export default Banner;