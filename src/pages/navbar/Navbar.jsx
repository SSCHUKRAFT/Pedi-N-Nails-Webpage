import logo from '../../assets/pedi_logo.png';
import './navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Pedi N Nails" />
      </div>
      <div className="navbar_links">
        <div className="navbar_links_container">
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
