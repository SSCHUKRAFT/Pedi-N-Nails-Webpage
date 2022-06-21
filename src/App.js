import React from 'react';
import { About, Gallery, Home, Navbar, Services, Specials } from './pages';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <About />
    <Gallery />
    <Services />
    <Specials />
  </div>
);

export default App;
