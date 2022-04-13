import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from './Components/Home';
import Liked from './Components/Liked';

import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Search from './Components/Search';

function App() {
    
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/liked" element={<Liked/>}/>
      </Routes>

    </Router>


    
    
  );
}

export default App;
