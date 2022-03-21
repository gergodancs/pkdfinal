import React from "react";
import "./css/nav.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img className="logo" src={require("./pics/kdp__logo.png")} alt="logo" />
      <div className="nav__menu">
        <a href="#home">Home</a>
        <a href="#exp">Szakterületek</a>
        <a href="#about">Rólam</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
