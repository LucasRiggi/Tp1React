import React from "react";

import './AjouterProf.css';
function NouveauProf({ ajouterProf }) {
  let saisieDate;
  let saisieNom;
  let saisiePrenom;
  let saisieImage;

  function ajoutNouveauProfHandler(event) {
    event.preventDefault();

    const nouveauProf = {
        id: "P5",
        dateEmbauche: saisieDate,
        nom: saisieNom,
        prenom: saisiePrenom,
        image: saisieImage,
               
    };
    ajouterProf(nouveauProf);
    
  }


  function saisieDateHandler(event){
    saisieDate = event.target.value;
    
  }

  function saisieNomHandler(event){
    saisieNom = event.target.value;
    
  }

  function saisiePrenomHandler(event){
    saisiePrenom = event.target.value;
    
  }

  function saisieImageHandler(event){
    saisieImage = event.target.value;
    
  }
  const handleSubmit = (event) => {
    event.preventDefault();

  }
  
  return (
    <form onSubmit={ajoutNouveauProfHandler}>
      <div className="AjouterProf_controls" >
      <h2>Ajouter professeur</h2>
      <br/> Date d'embauche: <input type="date" value={saisieDate} onChange={saisieDateHandler}/> 
      <br/>Nom :<input type="text" value={saisieNom} onChange={saisieNomHandler}/>
      <br/>Prénom : <input type="text" value={saisiePrenom} onChange={saisiePrenomHandler}/> 
      <br/> Image :<input type="text" value={saisieImage} onChange={saisieImageHandler}/>
  
      <div className="AjouterProf_action" > 
      <button type="submit" onSubmit={handleSubmit}> Ajouter le professeur</button>
      </div> 
      </div>
    </form>
  );
}

export default NouveauProf;
