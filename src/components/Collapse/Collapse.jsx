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
                <span className={`collapse__icon ${isOpen ? 'open' : ''}`}>&#x203A;</span>
            </div>
            <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
                <div className="collapse__text">
                    {Array.isArray(content) ? content.join(', ') : content}
                </div>
            </div>
        </div>
    );
};

// Defining prop types to ensure correct usage of the component
Collapse.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.oneOfType([
        PropTypes.string,              
        PropTypes.arrayOf(PropTypes.string), 
    ]).isRequired,
};

export default Collapse;