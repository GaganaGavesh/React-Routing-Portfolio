import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <h1>My Work</h1>
            <p>check out the followings !</p>
            <Link to="/portfolio/1">Item one </Link>
            <p></p>
            <Link to="/portfolio/2">Item two </Link>
        </div>
    );
};

export default Portfolio;

