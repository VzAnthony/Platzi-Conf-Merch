import { useState, useEffect } from 'react';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}key=AIzaSyB63AotCJ6W4Y9-EIvkGH5c1cbrpaRkPOQ`;

    useEffect(async () => {
        const response = fetch(API);
        const data = response.json();
        setMap(data.results[0].geometry.location);
        return map;
    }, []);
}

export default useGoogleAddress;