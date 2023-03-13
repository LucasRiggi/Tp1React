import React from "react";
import { Link } from "react-router-dom";
import "../../style/Cours.css"
import Card from "./components/Card";

function Cours({ cours }) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${cours.id}`}>
        <div>
            <h2>{"Titre: "+ cours.titre}</h2>
            <h3>{"Discipline: "+cours.discipline}</h3>
            <h3>{"Nombre maximal d'etudiant: "+cours.nbMaximalEtudiant}</h3>
            <h3>{"Debut: "+cours.dateDebut}</h3>
            <h3>{"Fin: "+cours.dateFin}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default Cours;
