import React from 'react';
import PropTypes from 'prop-types';

import './Tags.scss';

// Functional component to display tags related to a listing
const Tags = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <span key={index} className="tags__item">
                    {tag}
                </span>
            ))}
        </div>
    );
};

// Defining prop types to validate incoming props
Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Tags;