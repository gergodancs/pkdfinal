import React from "react";
import "./css/nav.css";
import { useState } from "react";

const NavBar = () => {
  // const [logo, setLogo] = useState("off");
  // const [pics, setPics] = useState("");

  // const clickHandlerOn = () => {
  //   setLogo("active");
  //   setPics("off");
  // };
  // const clickHandlerOff = () => {
  //   setLogo("off");
  //   setPics("");
  // };

  return (
    <nav className="navBar">
      <img
        className={`logo`}
        src={require("./pics/kdp__logo.png")}
        alt="logo"
      />
      <ul className={`nav__menu`}>
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
      </ul>
    </nav>
  );
};

export default NavBar;
