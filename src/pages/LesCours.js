import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ListeCours from "../components/Cours/ListeCours";
import AjouterCours from "../formulaire/AjouterCours";
import FiltrageCours from "../components/Filtrage/FiltrageCours";

function LesCours() { 
   const [filteredSession, setFilteredSession] = useState("session 4");
   
   const filterChangeHandler = (selectedSession) => {
    setFilteredSession(selectedSession);
   };

  

   const [cours, setCours] = useState( [
      {
         id: "C1",
         titre: "Environnement graphique ",
         discipline: "Informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"2022-01-24",
         dateFin:"2022-05-16",
         session: "session 4"
      },      
      {
         id: "C2",
         titre: "Web et bases de données",
         discipline: "Informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"2023-01-23",
         dateFin:"2023-05-15",
         session: "session 4"
      },
      {
         id: "C3",
         titre: "Interface Utilisateur",
         discipline: "Informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"2023-01-23",
         dateFin:"2023-05-15",
         session: "session 3"
      },
      {
         id: "C4",
         titre: "Programmation Structurée",
         discipline: "Informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"2023-01-23",
         dateFin:"2023-05-15",
         session: "session 2"
      },
      {
         id: "C5",
         titre: "Algorithmie et programmation",
         discipline: "Informatique",
         nbMaximalEtudiant:"28",
         dateDebut:"2023-01-23",
         dateFin:"2023-05-15",
         session: "session 1"
      }


   ]);

   function ajouterCours(nouveauCours) {
      setCours(() => cours.concat(nouveauCours));
      //objectifsCours.push(nouvelObjectif);
    }

   const coursFiltrees = cours.filter((leCours) => {
      return leCours.session === filteredSession;
 });

   return (<div>
      <FiltrageCours 
      selected={filteredSession}
      onChangementFiltre={filterChangeHandler}
      />
      <ListeCours cours={coursFiltrees} />
      <AjouterCours ajouterCours={ajouterCours} />
   </div>);
}

export default LesCours;