import React from 'react';
import PropTypes from 'prop-types';

import './Rating.scss';

// Functional component to display a star rating based on the provided rating value
const Rating = ({ rating }) => {
    // Define the maximum number of stars to be displayed
    const maxStars = 5;
    // Create an array of filled stars based on the rating value
    const filledStars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star star--filled">★</span>
    ));

    // Create an array of empty stars to fill the remaining slots
    const emptyStars = Array.from({ length: maxStars - rating }, (_, index) => (
        <span key={index + rating} className="star star--empty">★</span>
    ));

    return <div className="rating">{[...filledStars, ...emptyStars]}</div>;
};

// Defining prop types to validate incoming props
Rating.propTypes = {
    rating: PropTypes.number.isRequired, // The rating value must be a number and is required
};

export default Rating;