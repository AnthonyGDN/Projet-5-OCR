import React from 'react';
import PropTypes from 'prop-types';

import './Rating.scss';

// Functional component to display a star rating based on the provided rating value
const Rating = ({ rating }) => {
    // Define the maximum number of stars to be displayed
    const maxStars = 5;

    return (
        <div className="rating">
            {[...Array(maxStars)].map((_, index) => (
                <img 
                    key={index} 
                    src={index < rating ? 
                        "/public/Vector.png" : 
                        "/public/Vector2.png"} 
                    alt="star" 
                    className={index < rating ? 'star star--orange' : 'star star--gray'}
                />
            ))}
        </div>
    );
};

// Defining prop types to validate incoming props
Rating.propTypes = {
    rating: PropTypes.number.isRequired, 
};

export default Rating;