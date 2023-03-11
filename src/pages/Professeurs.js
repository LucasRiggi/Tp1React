import ReactDOM from "react-dom";
import React from "react";
import ListeProfesseurs from "../components/Professeur/ListeProfesseurs";



function Professeurs() {
  const professeurs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      places: 3,
    },
  ];
  return <ListeProfesseurs professeurs={professeurs} />;
}

export default Professeurs;
