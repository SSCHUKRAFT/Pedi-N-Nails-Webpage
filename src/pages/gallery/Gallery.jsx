import React from 'react';
import nail1 from '../../assets/Nail1.jpg';
import nail2 from '../../assets/Nail2.jpg';
import nail3 from '../../assets/Nail3.jpg';
import nail4 from '../../assets/Nail4.jpg';
import nail5 from '../../assets/Nail5.jpg';
import nail6 from '../../assets/Nail6.jpg';
import nail7 from '../../assets/Nail7.jpg';
import nail8 from '../../assets/Nail8.jpg';
import './gallery.css';

const Gallery = () => (
  <div className="gallery_background" id="gallery">
    <div className="gallery_title">
      Gallery
    </div>
    <div className="gallery_container">
      <img src={nail1} alt="" />
      <img src={nail2} alt="" />
      <img src={nail3} alt="" />
      <img src={nail4} alt="" />
      <img src={nail5} alt="" />
      <img src={nail6} alt="" />
      <img src={nail7} alt="" />
      <img src={nail8} alt="" />
    </div>
  </div>
);

export default Gallery;
