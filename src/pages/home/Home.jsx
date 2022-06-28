import React from 'react';
import logo from '../../assets/pedi_logo.png';
import './home.css';

const Home = () => (
  <div className="home" id="home">
    <div className="home-image">
      <img src={logo} alt="" />
    </div>
  </div>
);

export default Home;
