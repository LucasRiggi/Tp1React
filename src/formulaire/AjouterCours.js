import React from "react";

function NouveauCours({ ajouterCours }) {
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
      saisieCours = event.target.value;
      
    }
  
    function saisieDisciplineHandler(event){
      saisieDiscipline = event.target.value;
      
    }
  
    function saisieNbMaxHandler(event){
      saisieNbMaximalEtuidiant = event.target.value;
      
    }
  
    function saisieCourstHandler(event){
      saisieDateDebut = event.target.value;
      
    }
    function saisieDateFinHandler(event){
        saisieDateDebut = event.target.value;
        
      }
    const handleSubmit = (event) => {
      event.preventDefault();
  
    }
    
    return (
      <form onSubmit={ajoutNouveauCoursHandler}>
        <div className="AjouterCours_controls" >
        <br/> Cours :<input type="text" value={saisieCours} onChange={saisieCourstHandler}/> 
        <br/>Dicipline :<input type="text" value={saisieDiscipline} onChange={saisieDisciplineHandler}/>
        <br/>Nombre maximal d'etudiant : <input type="number" value={saisieNbMaximalEtuidiant} onChange={saisieNbMaxHandler}/> 
        <br/> Date Debut :<input type="date" value={saisieDateDebut} onChange={saisieDateFinHandler}/> 
        <br/> Date Fin :<input type="date" value={saisieDateFin} onChange={saisieDateDebutHandler}/> 
        </div> 
        <div className="AjouterCours_action" > 
        <button type="submit" onSubmit={handleSubmit}> Ajouter le Cours</button>
        </div> 
      </form>
    );
  }
  
  export default NouveauCours;
  