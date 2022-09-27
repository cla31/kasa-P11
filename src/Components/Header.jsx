import React from "react";
import logo from "../Assets/logo_header.png";
import "../Style/Header.css";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <nav>
        <a href="https://openclassrooms.com"> Accueil</a>
        <a href="https://openclassrooms.com"> A Propos</a>
      </nav>
    </header>
  );
};

export default Header;
