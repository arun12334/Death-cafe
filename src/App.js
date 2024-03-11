import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/"   element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
