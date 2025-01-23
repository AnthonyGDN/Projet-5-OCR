import React from 'react';
import PropTypes from 'prop-types';

import './Owner.scss';

// Functional component to display the owner's name and profile picture
const Owner = ({ name, picture }) => {
    return (
        <div className="owner">
            <p className="owner__name">{name}</p>
            <img src={picture} alt={name} className="owner__picture" />
        </div>
    );
};

// Defining prop types to validate incoming props
Owner.propTypes = {
    name: PropTypes.string.isRequired, // The owner's name must be a string and is required
    picture: PropTypes.string.isRequired, // The owner's picture URL must be a string and is required
};

export default Owner;