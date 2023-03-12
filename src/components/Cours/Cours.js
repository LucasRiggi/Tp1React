import React from "react";
import { Link } from "react-router-dom";
import "../../style/Cours.css"
import Card from "./components/Card";

function Cours({ cours }) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${cours.id}`}>
        <div>
            <h2>supp</h2>

          </div>
        </Link>
      </Card>
    </li>
  );
}

export default Cours;
