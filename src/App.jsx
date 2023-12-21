import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'

import Navbar from './assets/Nav';
import Home from './assets/Home';
import About from './assets/About';
import Griffinsight from './Clubs/griffinsight';
import Tsod from './Clubs/TSOD';
import Uhllekh from './Clubs/Uhllekh';
import Qurosity from './Clubs/Qurosity'; // Import the Qurosity component

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/griffinsight" element={<Griffinsight />} />
        <Route path="/qurosity" element={<Qurosity />} /> 
        <Route path="/tsod" element={<Tsod />} />
        <Route path="/uhllekh" element={<Uhllekh />} /> 
        
      </Routes>
    </div>
  );
}

export default App;