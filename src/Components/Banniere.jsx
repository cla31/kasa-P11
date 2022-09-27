import React from "react";
import "../Style/Banniere.css";
// import banniere from "../Assets/banniere_accueil.png";
import "../Style/Footer.css";

function Banniere({photo, title,description}) {
  return (
    <div className="banniere">
      <img src={photo} alt={description} />
      <h1>{title}</h1>
      <div className="filtre-photo"></div>
    </div>
  );
}

export default Banniere;
