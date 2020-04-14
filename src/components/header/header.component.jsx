import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import Logo from "../../assets/logo_transparent.png";

const Header = (history, linkUrl, match) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <div className="logo">
        <img className="logo-img" src={Logo} />
      </div>
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
      <Link className="shop-icon-container" to="/Cart">
        <CartIcon className="nav-item" />
      </Link>
    </ul>
  </div>
);

export default Header;
