import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LocationIconOn from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import Nail from '../../assets/about-nail.jpg';
import './about.css';

const About = () => (
  <div className="about_background" id="about">
    <body>
      <div className="about_title">
        About Us
      </div>
      <div>
        <img src={Nail} alt="" />
      </div>
      <p>Here at Pedi N. Nails, we strive to offer our clients the best results and customer service possible. With our affordable services, you can live like royalty without having to spend like it.
        We offer luxurious services like standard and deluxe pedicures as well as our top-of-the-line Volcano and Rose deluxe pedicures. See our full service list below for more details.
      </p>
      <p>
        As a new salon based in Webster, New York, we are looking to make a name for ourselves by providing only the best products and ensuring customer satisfaction. Come find us at 2186 Empire Boulevard!
      </p>
    </body>
    <div className="about_buttons">
      <Stack direction="row" spacing={3}>
        <a href="https://goo.gl/maps/4mRBnnfCaq5zUNYd8" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="location" size="large">
            <LocationIconOn style={{ color: 'white', fontSize: '3rem' }} />
          </IconButton>
        </a>
        <a href="https://www.facebook.com/PEDI-n-Nails-Webster-108709141728138" target="_blank" rel="noopener noreferrer">
          <IconButton aria-label="facebook" size="large">
            <FacebookIcon style={{ color: 'white', fontSize: '3rem' }} />
          </IconButton>
        </a>
        <a href="tel:585-671-2740">
          <IconButton aria-label="call" size="large">
            <PhoneIcon style={{ color: 'white', fontSize: '3rem' }} />
          </IconButton>
        </a>
      </Stack>
    </div>
  </div>
);

export default About;
