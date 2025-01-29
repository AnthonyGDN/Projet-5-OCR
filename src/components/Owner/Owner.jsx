import React from 'react';
import PropTypes from 'prop-types';

import './Owner.scss';

// Functional component to display the owner's name and profile picture
const Owner = ({ name, picture }) => {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="owner">
            <div className="owner__info">
                <p className="owner__firstname">{firstName}</p>
                <p className="owner__lastname">{lastName}</p>
            </div>
            <img src={picture} alt={name} className="owner__picture" />
        </div>
    );
};

// Defining prop types to validate incoming props
Owner.propTypes = {
    name: PropTypes.string.isRequired, 
    picture: PropTypes.string.isRequired, 
};

export default Owner;