import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 19.4267261, lng: -99.1718796
        // lat: data.lat, lng: data.lng
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyB63AotCJ6W4Y9-EIvkGH5c1cbrpaRkPOQ'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
