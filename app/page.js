import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Place_section from "./sections/Place_section";
import Mobile_Dock from "./components/Mobile_Dock";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div >
     <Navbar />
     <Map />
     <Place_section />
     <Mobile_Dock />
     <Footer />
    
    </div>
  );
}
