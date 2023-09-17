import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Rotas'
import './App.css'
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';
import Principal from './Paginas/Principal';

function App() {
  return (
    <Router>
      <div>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/principal" component={Principal} />
        
      </div>
    </Router>
  );
}

export default App;




