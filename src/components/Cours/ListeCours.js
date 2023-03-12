import React from "react";
import Cours from "./Cours";
import Card from "./components/Card";

function ListeCours(props) {
    if (props.cours.length === 0) {
      return (
        <div className="center">
          <Card>
            <h2>Aucun enseignant</h2>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="users-list">
        {props.cours.map((_cours_) => (
          <Cours key={_cours_.id} _cours_={_cours_} />
        ))}
      </ul>
    );
  }
  
  export default ListeCours;


