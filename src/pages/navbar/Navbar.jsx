import logo from '../../assets/pedi_logo.png';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="" />
      </div>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#specials">Specials</a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
