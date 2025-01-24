import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Carousel.scss';

// Functional component to display an image carousel with navigation
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel__image" />
            
            {images.length > 1 && (
                <>
                    <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
                        &#10095;
                    </button>
                    <div className="carousel__counter">
                        {currentIndex + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    );
};

// Defining prop types for validation
Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Carousel;