import React from "react";

function NouveauProf({ ajouterProf }) {
  let saisieDate;
  let saisieNom;
  let saisiePrenom;
  let saisieImage;

  function ajoutNouvelProfHandler(event) {
    event.preventDefault();

    const nouveauProf = {
        id: "P1",
        dateEmbauche: saisieDate,
        nom: saisieNom,
        prenom: saisiePrenom,
        image: saisieImage,
               
    };
    ajouterProf(nouveauProf);
  }

  function saisieHandler(event){
    saisie = event.target.value;
    
  }
  
  return (
    <form onSubmit={ajoutNouveauProfHandler}>
      <input type="text" onChange={saisieDateHandler}/>
      <input type="text" onChange={saisieNomHandler}/>
      <input type="text" onChange={saisiePrenomHandler}/>
      <input type="text" onChange={saisieImageHandler}/>
      <button type="submit"> Ajouter le professeur</button>
    </form>
  );
}

export default NouveauProf;
