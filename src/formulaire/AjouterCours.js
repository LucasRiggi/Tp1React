import React from "react";


import "./AjouterCours.css"

function NouveauCours({ ajouterCours }) {

    let saisieIdCours;
    let saisieCours;
    let saisieDiscipline;
    let saisieNbMaximalEtuidiant;
    let saisieDateDebut;
    let saisieDateFin;
   
    function ajoutNouveauCoursHandler(event) {

      event.preventDefault();
  
      const nouveauCours = {
        id: "C2",
        titre: saisieCours,
        discipline: saisieDiscipline,
        nbMaximalEtudiant:saisieNbMaximalEtuidiant,
        dateDebut:saisieDateDebut,
        dateFin:saisieDateFin
      
                 
      };
      ajouterCours(nouveauCours);
      
    }
  
  
    function saisieDateDebutHandler(event){
      saisieDateDebut = event.target.value;
      
    }
  
    function saisieDisciplineHandler(event){
      saisieDiscipline = event.target.value;
      
    }
  
    function saisieNbMaxHandler(event){
      saisieNbMaximalEtuidiant = event.target.value;
      
    }
  
    function saisieCourstHandler(event){
      saisieCours = event.target.value;
      
    }
    function saisieDateFinHandler(event){
        saisieDateFin = event.target.value;
        
      }
    const handleSubmit = (event) => {
      event.preventDefault();
  
    }
    
    return (
      <form onSubmit={ajoutNouveauCoursHandler}>
        <div className="AjouterCours_controls" >
        <h2>Ajouter un cours</h2>
        <br/> Cours :<input type="text" value={saisieCours} onChange={saisieCourstHandler}/> 
        <br/>Discipline :<input type="text" value={saisieDiscipline} onChange={saisieDisciplineHandler}/>
        <br/>Nombre maximal d'étudiant : <input type="number" value={saisieNbMaximalEtuidiant} onChange={saisieNbMaxHandler}/> 
        <br/> Date Début :<input type="date" value={saisieDateDebut} onChange={saisieDateDebutHandler}/> 
        <br/> Date Fin :<input type="date" value={saisieDateFin} onChange={saisieDateFinHandler}/> 
        <div className="boutonAjouter" > 
        <button type="submit" onSubmit={handleSubmit}> Ajouter le Cours</button>
        </div> 
        </div> 
      </form>
    );
  }
  
  export default NouveauCours;
  