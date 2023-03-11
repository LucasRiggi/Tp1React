import React from 'react';

import Cadre from "../components/Cadre";
import Profile from "../components/Profile";

function Enseignants(){
    return (
        <li className="user-item">
            <Cadre className="user-item__content">
              <Link to={`/${utilisateur.id}/places`}>
                <div className="user-item__image">
                  <Profile image={utilisateur.image} alt={utilisateur.nom} />
                </div>
    
                <div className="user-item__info">
                  <h2>{utilisateur.nom}</h2>
                  <h3>
                    {utilisateur.places}{" "}
                    {utilisateur.places < 2 ? "place" : "places"}
                  </h3>
                </div>
              </Link>
            </Cadre>
        </li>
      );
}