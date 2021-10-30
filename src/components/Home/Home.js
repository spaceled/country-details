import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
            {
                country.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;