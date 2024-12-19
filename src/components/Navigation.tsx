import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div>
      <h1>Turismo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/merchants-create">Crear Comercio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
