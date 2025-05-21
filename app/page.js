'use client';
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Place_section from "./sections/Place_section";
import Mobile_Dock from "./components/Mobile_Dock";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Loader from "./components/Loader";
import { useContext } from "react";
import { PlaceContext } from "./context/PlaceContext";


export default function Home() {
  const { t, i18n } = useTranslation();
  const {settings} = useContext(PlaceContext)

  return (
   <>
   
   {settings? (
     <div >
     
     <Navbar />
     <Map />
     <Banner />
     <Place_section />
     <Mobile_Dock />
     <Footer />
    
    </div>
   ):(
    <Loader />
   )}
   
   
   
   
   </>
  );
}
