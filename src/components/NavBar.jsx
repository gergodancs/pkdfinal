import React from "react";
import "./css/nav.css";
import { useState } from "react";

const NavBar = () => {
  const [logo, setLogo] = useState("off");
  const [pics, setPics] = useState("");

  const clickHandlerOn = () => {
    setLogo("active");
    setPics("off");
  };
  const clickHandlerOff = () => {
    setLogo("off");
    setPics("");
  };

  return (
    <nav className="navBar">
      <img
        onClick={clickHandlerOn}
        className={`logo ${pics}`}
        src={require("./pics/kdp__logo.png")}
        alt="logo"
      />
      <ul className={`nav__menu ${logo}`}>
        <li>
          <a href="#landing">Home</a>
        </li>
        <li>
          <a href="#exp">Szakterületek</a>
        </li>
        <li>
          <a href="#about">Rólam</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <span onClick={clickHandlerOff}>close</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
