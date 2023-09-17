import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';
import Principal from './Paginas/Principal';

function Rotas() {
  return (
    <Router>
      <Routes> 
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;