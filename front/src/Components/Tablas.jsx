import React from 'react';
import { Link } from 'react-router-dom';

export function Tablas() {
  return (
    <div className="Petus">

      <div className="image-container">
        <div className="image">
          <img src="img/Tabla1.jpg" alt="Imagen 1" />
        </div>
        <div className="image">
          <img src="img/Tabla2.jpg" alt="Imagen 2" />
        </div>
        <div className="image">
          <img src="img/Tabla3.jpg" alt="Imagen 3" />
        </div>
        <div className="image">
          <img src="img/Tabla4.jpg" alt="Imagen 4" />
        </div>
        <div className="image">
            <img src="img/Tabla5.jpg" alt="Imagen 5" />
        </div>
        <div className="image">
        <Link to="/home">
            <img src="img/HealthyNutritionSinBackground.png" alt="logo to home" />
        </Link>
        </div>

      </div>
    </div>
  );
}

export default Tablas;
