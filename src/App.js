import {BrowserRouter ,Route, Routes, Link} from "react-router-dom"
import About from "./componets/About";
import Navbar from "./componets/Navbar";

import Contact from "./componets/pages/Contact";
import Home from "./componets/pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services from "./componets/pages/Services";
import Footer from "./componets/pages/Footer";
import UseEffectAPI from "./componets/pages/UseEffectAPI";


function App() {
  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
      
     <Route path="/" element={<Home/>}></Route>
     <Route path="about" element={<About/>}></Route>
     <Route path="services" element={<Services/>}></Route>
     <Route path="gallery" element={<UseEffectAPI/>}></Route>
     <Route path="contact" element={<Contact/>}></Route>
     </Routes>
 
     <Footer/>
     </BrowserRouter>
        
    </>
  );
}

export default App;
