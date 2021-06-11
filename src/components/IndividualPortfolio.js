import React from 'react';

const IndividualPortfolio = (props) => {
    console.log(props);
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>This page is for item {props.match.params.id}</p>
        </div>
    );
};

export default IndividualPortfolio;
