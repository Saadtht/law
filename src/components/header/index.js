import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-auto"><img src="./logo.png" width={50} alt="Logo" /></Link> 

          <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
              <button type="button" className="btn-close" onClick={handleToggle} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a href="#home" className="nav-link mx-lg-2 active">Home</a> 
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link mx-lg-2">About Us</a> 
                </li>
                <li className="nav-item">
                  <a href="#offerings" className="nav-link mx-lg-2">Our offerings</a> 
                </li>
                <li className="nav-item">
                  <a href="#studies" className="nav-link mx-lg-2">Case studies</a> 
                </li>
              </ul>
            </div>

          </div>
          <Link to="/login" className="button1">Login</Link> 
          <Link to="/inscription" className="button1">Inscription</Link> 
          <button className="navbar-toggler " type="button" onClick={handleToggle} aria-expanded={isOffcanvasOpen}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header