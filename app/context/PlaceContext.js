'use client'
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { api } from '../config/api';


const PlaceContext = createContext();


const PlaceProvider = ({ children }) => {
    const [places,setPlaces] = useState([]);

    useEffect(() => {
        fetchplaces(); 
    }, []); 

    const fetchplaces = async () => {
        try {
            const response = await axios.get(`${api.baseUrl}api/v1/places`);
            setPlaces(response.data.data);    
            console.log(response.data.data);
        } catch (err) {
            
            
            console.log("Error"); 
        }
    }

    return (
        <PlaceContext.Provider value={{ places }}>
            {children}
        </PlaceContext.Provider>
    );
};

export { PlaceProvider, PlaceContext };