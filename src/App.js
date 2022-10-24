import './index.css';
import React from 'react' 
import {BrowserRouter, Link} from "react-router-dom";
import AppRoutes from './Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/novo-projeto">Novo Projeto</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
