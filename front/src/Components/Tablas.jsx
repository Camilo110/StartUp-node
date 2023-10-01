import React from 'react';

export function Tablas() {
  return (
    <div className="Petus">
      <nav className="navbar">
        <div className="logo">
          <img src="img/HealthyNutritionSinBackground.png" alt="Logo" />
        </div>
        <div className="buttons-nav">
          <button className="button-nav">Regresar</button>
          <button className="button-nav">Salir</button>
          <a href="registro.html">Registro</a>
        </div>
      </nav>

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
      </div>
    </div>
  );
}

export default Tablas;
