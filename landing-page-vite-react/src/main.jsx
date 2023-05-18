import './index.css'
import './App.css'
import App from './App'
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import Nike from './shoecomponents/nike';
import Converse from './shoecomponents/converse';
import Puma from './shoecomponents/puma';
import Adidas from './shoecomponents/adidas';
import Vans from './shoecomponents/vans';

import { Navbar } from './Navbar';


const rootElement = document.getElementById('test');
const root = createRoot(rootElement);





root.render(
  <StrictMode>
  <BrowserRouter>


      <Navbar />
      <Routes>
        <Route path="/" element={<Nike />} />
        <Route path="adidas" element={<Adidas />} />
        <Route path="puma" element={<Puma />} />
        <Route path="vans" element={<Vans />} />
        <Route path="converse" element={<Converse />} />
      </Routes>



  </BrowserRouter>
  </StrictMode>
);







/* 
ReactDOM.createRoot(document.getElementById('login')).render(
  <StrictMode>
  

      <Login />

  </StrictMode>,
)

  */