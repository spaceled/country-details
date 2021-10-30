import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState([]);

    console.log(country)
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryId}`;
        fetch(url)
        .then((response) => response.json())
        .then(data => setCountry(data))
    }, [countryId])
    
    return (
        <div>
            <h1>Details of {countryId}</h1>
            {
                country.map(country => <div>
                    <p>Capital: {country.capital}</p>
                    <p>{country.currencies[0]}</p>
                </div>)
            }
        </div>
    );
};

export default CountryDetails;