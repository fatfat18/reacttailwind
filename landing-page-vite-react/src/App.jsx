import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import Nike from './shoecomponents/nike';
import Converse from './shoecomponents/converse';
import Puma from './shoecomponents/puma';
import Adidas from './shoecomponents/adidas';
import Vans from './shoecomponents/vans';





export default function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="nike" element={<Nike />} />
        <Route path="adidas" element={<Adidas />} />
        <Route path="puma" element={<Puma />} />
        <Route path="vans" element={<Vans />} />
        <Route path="converse" element={<Converse />} />
      </Routes>
      </div>
  );
}