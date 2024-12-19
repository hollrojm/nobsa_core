import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div>
      <Link to="/merchants">
        <h1>Turismo App</h1>
      </Link>

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
