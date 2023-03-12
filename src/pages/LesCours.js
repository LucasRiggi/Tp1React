import React from 'react';
import ReactDOM from 'react-dom';
import ListeCours from "../components/Cours/ListeCours";

function LesCours() { 
   const cours = [
      {
         id: "C1",
         titre: "Web et bases de données",
         discipline: "Enseignant informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"23/01/2023",
         dateFin:"17/05/2023"
      }
   ]

   return <ListeCours cours={cours} />;
}

export default LesCours;