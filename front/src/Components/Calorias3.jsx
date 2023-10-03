import React from 'react';
import { Link } from "react-router-dom";

function Calorias3(){
  return (
    <div>
      <div className="calc-Calorias">
        <section>
          <h1>Calcular Calorías</h1>
          <div className="container-cal">
            <img src="../img/calorias.png" alt="Calorias" />
            <p>Usted necesita calorías diarias</p>
          </div>
          <div className="container-cal">
            <img src="../img/imc.png" alt="IMC" />
            <p>Su IMC es</p>
          </div>
          <div className="container-cal">
            <img src="../img/recomendacion.png" alt="Recomendacion" />
            <p>
              Le recomendamos ver la sección <Link to="/tablas"hola>Tabla de comidas</Link>para mejorar su dieta
            </p>
          </div>
        </section>
        <div className="container-motiv">
          <img src="../img/motivacional.jpg" alt="Motivacional" />
        </div>
      </div>
    </div>
  );
};

export default Calorias3;
