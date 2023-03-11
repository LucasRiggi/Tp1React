import React from "react";
import "../../style/listeProfesseurs.css";
import Professeur from "./Professeur";
import Cadre from "./components/Cadre";


function ListeProfesseurs(props) {
    if (props.professeur.length === 0) {
      return (
        <div className="center">
          <Cadre>
            <h2>Aucun enseignant</h2>
          </Cadre>
        </div>
      );
    }
  
    return (
      <ul className="users-list">
        {props.professeur.map((professeur) => (
          <Professeur key={professeur.id} professeur={professeur} />
        ))}
      </ul>
    );
  }
  
  export default ListeProfesseurs;


