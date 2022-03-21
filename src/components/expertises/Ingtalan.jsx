import React from "react";

const Ingtalan = () => {
  return (
    <div className="exp__cards">
      <img src={require("../pics/home.png")} alt="home" />
      <div className="ing-content">
        <h3>Ingatlan</h3>
        <ul>
          <li>tanácsadás</li>
          <li>adás-vétel-átruházás</li>
          <li>ajándékozás</li>
          <li>szerződés készítése, véleményezése</li>
        </ul>
      </div>
    </div>
  );
};

export default Ingtalan;
