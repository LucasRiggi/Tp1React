import React, { useState } from "react";


import "../style/AjouterCours.css"

function AjouterCours({ ajouterCours }) {
  /** Nom d'élèves random */
  const eleves = [
    { prenom: "Alice", nom: "Dupont" },
    { prenom: "Bob", nom: "Martin" },
    { prenom: "Charlie", nom: "Tremblay" },
    { prenom: "David", nom: "Lavoie" },
    { prenom: "Eve", nom: "Gagnon" },
    { prenom: "Frank", nom: "Bergeron" },
    { prenom: "Grace", nom: "Gauthier" },
    { prenom: "Henry", nom: "Poirier" },
    { prenom: "Ivy", nom: "Rousseau" },
    { prenom: "Jack", nom: "Leblanc" },
    { prenom: "Kate", nom: "Racine" },
    { prenom: "Liam", nom: "Bouchard" },
    { prenom: "Mia", nom: "Girard" },
    { prenom: "Noah", nom: "Lapointe" },
    { prenom: "Olivia", nom: "Caron" },
    { prenom: "Peter", nom: "Morin" },
    { prenom: "Quinn", nom: "Dubois" },
    { prenom: "Rose", nom: "Groleau" },
    { prenom: "Sophia", nom: "Rioux" },
    { prenom: "Tom", nom: "Lefebvre" },
    { prenom: "Uma", nom: "Chaput" },
    { prenom: "Vera", nom: "Bilodeau" },
    { prenom: "William", nom: "Beaulieu" },
    { prenom: "Xander", nom: "Fortin" },
    { prenom: "Yara", nom: "Paquette" },
    { prenom: "Zane", nom: "Lavigne" },
    { prenom: "Adam", nom: "Desjardins" },
    { prenom: "Ben", nom: "Charbonneau" },
    { prenom: "Cameron", nom: "Tanguay" },
    { prenom: "Diana", nom: "Perron" }
  ];
  
  const [validationDateDebut, setValidationDateDebut] = useState(false);
  const [validationDateFin, setValidationDateFin] = useState(false);
  const [saisieCours, setSaisieCours] = useState("");
  const [saisieDiscipline, setSaisieDiscipline] = useState("");
  const [saisieNbMaximalEtudiant, setSaisieNbMaximalEtudiant] = useState("");
  const [saisieDateDebut, setSaisieDateDebut] = useState("");
  const [saisieDateFin, setSaisieDateFin] = useState("");

   
    function ajoutNouveauCoursHandler(event) {
      event.preventDefault();
      if(validationDateDebut && validationDateFin) {
      const nouveauCours = {
        id: "C" + Math.floor(Math.random() * 1000).toString(),
        titre: saisieCours,
        discipline: saisieDiscipline,
        nbMaximalEtudiant:saisieNbMaximalEtudiant,
        dateDebut:saisieDateDebut,
        dateFin:saisieDateFin,
        session:"session 4"   

      };
      ajouterCours(nouveauCours);

      setSaisieCours("");
      setSaisieDiscipline("");
      setSaisieNbMaximalEtudiant("");
      setSaisieDateDebut("");
      setSaisieDateFin("");
    } 
    }
    function eleveDansLeCours() {
      const eleveDansLeCours = []
      const tailleTableau = Math.floor(Math.random() * 30);
      const i = 0;
      const valeurRepeter = false;
      while (i < tailleTableau) {
        

      }




      return eleveDansLeCours;
    }

    function saisieCourstHandler(event){
      setSaisieCours(event.target.value);
    }
    
    function saisieDisciplineHandler(event){
      setSaisieDiscipline(event.target.value);
    }
    
    function saisieNbMaxHandler(event){
      setSaisieNbMaximalEtudiant(event.target.value);
    }
    
    function saisieDateDebutHandler(event){
      setSaisieDateDebut(event.target.value.toString());
      const date = new Date(event.target.value.toString());
      const dateDebut = new Date("2023-01-01");
      const dateFin = new Date("2023-06-06");
      if((date > dateDebut) && (date < dateFin)) {
        setValidationDateDebut(true);
      } else {
        setValidationDateDebut(false);
      }

      
    }
    
    function saisieDateFinHandler(event){
      setSaisieDateFin(event.target.value.toString());
      const dateDebut = new Date("2023-01-01");
      const dateFin = new Date("2023-06-06");
      const date = new Date(event.target.value.toString())
      if((date > dateDebut) && (date < dateFin)) {
        setValidationDateFin(true);
      } else {
        setValidationDateFin(false);
      }
      
    }
    
    
    const handleSubmit = (event) => {
      if(validationDateDebut && validationDateFin) {
      event.preventDefault();
      }
    }
    
    return (
      <form onSubmit={ajoutNouveauCoursHandler}>
        <div className="AjouterCours_controls" >
        <h2>Ajouter un cours</h2>
        <br/> Cours :<input type="text" value={saisieCours} onChange={saisieCourstHandler}/> 
        <br/>Discipline :<input type="text" value={saisieDiscipline} onChange={saisieDisciplineHandler}/>
        <br/>Nombre maximal d'étudiant : <input type="number" min="1" max="30"value={saisieNbMaximalEtudiant} onChange={saisieNbMaxHandler}/> 
        <br/> Date Début :<input type="date" value={saisieDateDebut} onChange={saisieDateDebutHandler}/> 
        <br/> Date Fin :<input type="date" value={saisieDateFin} onChange={saisieDateFinHandler}/> 
        <div className="boutonAjouter" > 
        <button type="submit" onSubmit={handleSubmit}> Ajouter le Cours</button>
        </div> 
        </div> 
      </form>
    );
  }
  
  export default AjouterCours;
  