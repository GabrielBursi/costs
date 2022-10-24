import './index.css';
import React from 'react' 
import {BrowserRouter} from "react-router-dom";
import AppRoutes from './Routes';

import Container from './components/layout/Container';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
          <Nav/>
        <Container customClass="minHeight">
          <AppRoutes />
        </Container>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
