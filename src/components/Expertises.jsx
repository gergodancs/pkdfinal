import React from "react";
import "./css/expertises.css";
import Adozas from "./expertises/Adozas";
import Biztositas from "./expertises/Biztositas";
import Business from "./expertises/Business";
import Csalad from "./expertises/Csalad";
import Ingtalan from "./expertises/Ingtalan";
import Polg from "./expertises/Polg";

const Expertises = () => {
  return (
    <div className="exp__container">
      <Biztositas />
      <Ingtalan />
      <Adozas />
      <Business />
      <Csalad />
      <Polg />
    </div>
  );
};

export default Expertises;
