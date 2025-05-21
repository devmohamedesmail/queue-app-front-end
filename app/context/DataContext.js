'use client'
import axios from "axios";
import { api } from "../config/api";

const { createContext, useState, useEffect } = require("react")


const DataContext = createContext()
const DataProvider = ({ children }) => {
    const [pages, setPages] = useState();





    const fetch_pages_content = async () => {

        try {
            const res = await axios.get(`${api.baseUrl}api/v1/pages`)
            setPages(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            console.log("error fetch page", error)
        }
    }


    useEffect(() => {
        fetch_pages_content()
    }, [])


    return (
        <DataContext.Provider value={{ pages ,fetch_pages_content }}>
            {children}
        </DataContext.Provider>
    )
}


export { DataContext, DataProvider };