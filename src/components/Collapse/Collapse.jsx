import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Collapse.scss';

// Functional component to display collapsible sections
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the collapse state
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <span>{title}</span>
                <span className={`collapse__icon ${isOpen ? 'open' : ''}`}>&#x25B2;</span>
            </div>
            {isOpen && <div className="collapse__content">{Array.isArray(content) ? content.join(', ') : content}</div>}
        </div>
    );
};

// Defining prop types to ensure correct usage of the component
Collapse.propTypes = {
    title: PropTypes.string.isRequired, // Title must be a string and is required
    content: PropTypes.oneOfType([
        PropTypes.string,               // Content can be a string
        PropTypes.arrayOf(PropTypes.string), // Or an array of strings
    ]).isRequired,
};

export default Collapse;