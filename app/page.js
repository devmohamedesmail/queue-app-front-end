'use client';
import Navbar from "./components/navbar";
import Map from "./components/map";
import Place_section from "./sections/Place_section";
import Mobile_Dock from "./components/mobile_dock";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import Loader from "./components/loader";
import { useContext } from "react";
import { PlaceContext } from "./context/PlaceContext";
import Advantages from "./sections/Advantages";


export default function Home() {
  const { t, i18n } = useTranslation();
  const {settings} = useContext(PlaceContext)

  return (
   <>
   
   {settings? (
     <div >
     
     <Navbar />
     <Map />
     <Advantages />

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
