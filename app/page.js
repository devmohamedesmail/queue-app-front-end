'use client';
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Place_section from "./sections/Place_section";
import Mobile_Dock from "./components/Mobile_Dock";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Link from "next/link";
import { useTranslation } from 'react-i18next';


export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div >
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('ar')}>العربية</button>
     <Navbar />
     <Map />
     <Banner />
     <Place_section />
     <Mobile_Dock />
     <Footer />
    
    </div>
  );
}
