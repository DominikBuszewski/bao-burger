import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = (history, linkUrl, match) => (
  <div className="header">
    <Link className="nav-item-container" to="/">
      <div className="logo">LOGO</div>
    </Link>
    <ul className="nav-bar">
      <Link className="nav-item-container" to="/About">
        <li className="nav-item">About</li>
      </Link>

      <Link className="nav-item-container" to="/Menu">
        <li className="nav-item">Menu</li>
      </Link>
      <Link className="nav-item-container" to="/Gallery">
        <li className="nav-item">Gallery</li>
      </Link>
      <Link className="nav-item-container" to="/Contact">
        <li className="nav-item">Contact</li>
      </Link>
      <Link className="nav-item-container" to="/Cart">
        <li className="nav-item">Cart</li>
      </Link>
    </ul>
  </div>
);

export default Header;
