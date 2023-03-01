import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import Logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={Logo} alt='logo img'/>
        <h2>Vamsi.dev</h2>
      </a>
      <div className="links">
        <Link to="/work">
          <button className="link">Work</button>
        </Link>
        <Link to='/about'>
          <button className="link">About</button>
        </Link>
        <Link to='/blog'>
          <button className="link">Blog</button>
        </Link>
        <Link to='/contact'>
          <button className="link">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
