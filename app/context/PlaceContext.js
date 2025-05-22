'use client'
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { api } from '../config/api';


const PlaceContext = createContext();


const PlaceProvider = ({ children }) => {
    const [places,setPlaces] = useState(null);
    const [settings,setSettings] = useState(null);

    useEffect(() => {
        fetchplaces(); 
        fetch_settings();
    }, []); 

    const fetchplaces = async () => {
        try {
            const response = await axios.get(`${api.baseUrl}api/v1/places`);
            setPlaces(response.data.data);    
           
        } catch (err) {
            console.log("Error",err); 
        }
    }

    const fetch_settings = async () => {
        try {
            const response = await axios.get(`${api.baseUrl}api/v1/settings`);
            setSettings(response.data.data); 
          
        } catch (err) { 
            console.log("Error",err); 
        }
    }

    return (
        <PlaceContext.Provider value={{ places , settings ,fetchplaces ,fetch_settings }}>
            {children}
        </PlaceContext.Provider>
    );
};

export { PlaceProvider, PlaceContext };