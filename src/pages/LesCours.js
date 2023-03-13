import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ListeCours from "../components/Cours/ListeCours";
import AjouterCours from "../formulaire/AjouterCours";
function LesCours() { 
   const [cours, setCours] =useState( [
      {
         id: "C1",
         titre: "Web et bases de données",
         discipline: "Enseignant informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"23/01/2023",
         dateFin:"17/05/2023"
      },      {
         id: "C2",
         titre: "Web et bases de données",
         discipline: "Enseignant informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"23/01/2023",
         dateFin:"17/05/2023"
      }
   ]);
   function ajouterCours(nouveauCours) {
      setCours(() => cours.concat(nouveauCours));
      //objectifsCours.push(nouvelObjectif);
    }
   return <div>
   <ListeCours cours={cours} />
   <AjouterCours ajouterCours={ajouterCours} />
 </div>



}

export default LesCours;