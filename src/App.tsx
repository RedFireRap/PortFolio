import React from 'react';
// routes //
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
// routes //
// pages //
import Portfolio from './pages/home';
import Contato from './pages/contato';
import Linguagens from './pages/linguagens';
// pages //


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Portfolio/>}/>      
        <Route path='/Linguagens' element={<Linguagens/>}/>      
        <Route path='/contato' element={<Contato/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
