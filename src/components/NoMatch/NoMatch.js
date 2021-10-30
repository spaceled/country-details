import React from 'react';

const NoMatch = () => {
    const NoMatchStyle = {
        margin: '20px auto',
        padding: '20px',
    }
    return (
        <div style={NoMatchStyle}>
            <h1>Sorry, Not Found!</h1>
        </div>
    );
};

export default NoMatch;