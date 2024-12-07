import React from "react";
// import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Pegenotfound from "./Pegenotfound";

function App2(){
    return(
        <div>
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="*" element={<Pegenotfound/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App2