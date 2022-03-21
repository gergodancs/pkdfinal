import React from "react";

const Biztositas = () => {
  return (
    <div className="exp__cards">
      <img src={require("../pics/umbrella-128.png")} alt="umb" />
      <div className="bizt-content">
        <h3>Biztosítás</h3>
        <ul>
          <li> kár- és összegbiztosítási kárrendezési közreműködés</li>
          <li>
            szolgáltatási igény érvényesítése, valamint egyéb szerződéssel
            kapcsolatos panaszok intézése
          </li>
          <li>a gépjárműben keletkezett kár érvényesítése</li>
          <li>
            bármely károkozó magatartásból szerződéses viszonyban, valamint
            szerződésen kívül felmerült kárigények érvényesítése.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Biztositas;
