import React from "react";
import {Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import Show from "./components/Show";
import Services from "./components/Services";

const App = () => {
  
  return (
    <div className="p-10 ">
        <nav className="flex justify-center items-center gap-10">
          <Link to='/home' >Home</Link>
          <Link to='/show'>Show</Link>
          <Link to='/services'>Services</Link>
        </nav>
         <hr />
         <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/show" element={<Show/>}/>
          <Route path="/services" element={<Services/>}/>

         </Routes>
    </div>
  );
};

export default App;
