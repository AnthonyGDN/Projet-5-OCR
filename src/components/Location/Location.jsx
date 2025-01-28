import React from 'react';
import PropTypes from 'prop-types';

import './Location.scss';

// Functional component to display the title and location of a listing
const Location = ({ title, location }) => {
    return (
        <div className="location">
            <h1 className="location__title">{title}</h1>
            <p className="location__address">{location}</p>
        </div>
    );
};

// Defining prop types to validate incoming props
Location.propTypes = {
    title: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
};

export default Location;