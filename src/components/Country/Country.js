import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Country = (props) => {
    const {name, flags} = props.country;
    const history = useHistory();

    const handleClick = (countryId) => {
        const url = `/home/${countryId}`;
        history.push(url)
    }

    const countryStyle = {
        width: '30%',
        border: '1px solid red',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '20px',
    }
    const flagDesign = {
        width: '100px',
        height: '100px',
    }
    return (
        <div style={countryStyle}>
            <img src={flags.svg} style={flagDesign} alt="" />
            <h1>{name.common}</h1>
            {/* <Link to={`/home/${name.common}`}><button>Show Details of {name.common}</button></Link> */}
            <button onClick={() => handleClick(name.common)}>Show Details</button>
        </div>
    );
};

export default Country;