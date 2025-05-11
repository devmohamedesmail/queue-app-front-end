import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Place_section from "./sections/Place_section";
import Mobile_Dock from "./components/Mobile_Dock";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Link from "next/link";



export default function Home() {
  return (
    <div >
      <Link href="/pages/admin/">admin</Link>
      <Link href="/pages/subscriber/">suber</Link>
     <Navbar />
     <Map />
     <Banner />
     <Place_section />
     <Mobile_Dock />
     <Footer />
    
    </div>
  );
}
