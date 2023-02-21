import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import { Navbar } from './Navbar';

export default function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}