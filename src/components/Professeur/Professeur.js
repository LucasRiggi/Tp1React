import React from "react";
import { Link } from "react-router-dom";

import Cadre from "./components/Cadre";
import Profile from "./components/Profile";

function Professeur({ professeur }) {
  return (
    <li className="user-item">
      <Cadre className="user-item__content">
        <Link to={`/${professeur.id}/places`}>
          <div className="user-item__image">
            <Profile image={professeur.image} alt={professeur.nom} />
          </div>

          <div className="user-item__info">
            <h2>{professeur.nom}</h2>
            <h3>
              {professeur.places} {professeur.places < 2 ? "place" : "places"}
            </h3>
          </div>
        </Link>
      </Cadre>
    </li>
  );
}

export default Professeur;
