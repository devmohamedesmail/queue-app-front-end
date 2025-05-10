"use client";
import React, { useContext } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PlaceContext } from '../context/PlaceContext';


const containerStyle = {
  width: '100%',
  height: '100%',
};

// Fallback center location (Dubai)
const defaultCenter = {
  lat: 25.276987,
  lng: 55.296249,
};

const Map = () => {

  const { places } = useContext(PlaceContext)

  // Use the first valid place as center, or default
  const validPlaces = places?.filter(
    (p) => !isNaN(Number(p.lat)) && !isNaN(Number(p.lng))
  ) || [];
  
  const center = validPlaces.length > 0
    ? { lat: Number(validPlaces[0].lat), lng: Number(validPlaces[0].lng) }
    : defaultCenter;;



  return (
 <div className='h-[400px] md:h-[900px]'>
     <LoadScript googleMapsApiKey="AIzaSyA74gOioKDIY9AlPHe3eyu4yTSvyAN8RMM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* <Marker position={center} /> */}
        {places?.map((place, index) => (
          <Marker
            key={index}
            position={{ lat: Number(place.location.lat), lng: Number(place.location.lng) }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
 </div>
  );
};

export default Map;
