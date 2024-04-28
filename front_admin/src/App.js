import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import AppComponents from './AppComponents';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AppComponents /> } />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;