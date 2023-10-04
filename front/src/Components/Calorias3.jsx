import React from 'react';
import { Link } from 'react-router-dom';

function Calorias3(props) {
  // Acceder a los datos pasados desde el segundo componente
  const datos = props.data;
  const GastoEnergetico = props.resOne;

  // Realizar cálculos basados en los datos recibidos (por ejemplo, calcular calorías y IMC)
  const calcularCaloriasDiarias = () => {
    console.log(datos , GastoEnergetico)
    const calorias =(66.47+13.75*datos.peso+5*datos.altura-6.74*datos.edad) * GastoEnergetico;
    return calorias.toFixed(2);
  }
  const calcularIMC = () => {
    const alturaMetros = datos.altura / 100;
    // La fórmula corregida debe ser:
    const imc = datos.peso / (alturaMetros * alturaMetros);
    return imc.toFixed(2);
  };
  

  // Llamar a las funciones para calcular calorías e IMC
  const caloriasDiarias = calcularCaloriasDiarias();
  const imc = calcularIMC();

  return (
    <div>
      <div className="calc-Calorias">
        <section>
          <h1>Calcular Calorías</h1>
          <div className="container-cal">
            <img src="../img/calorias.png" alt="Calorias" />
            <p>Usted necesita {caloriasDiarias} calorías diarias</p>
          </div>
          <div className="container-cal">
            <img src="../img/imc.png" alt="IMC" />
            <p>Su IMC es {imc}</p>
          </div>
          <div className="container-cal">
            <img src="../img/recomendacion.png" alt="Recomendacion" />
            <p>
              Le recomendamos ver la sección <Link to="/tablas">Tabla de comidas</Link> para mejorar su dieta.
            </p>
          </div>
          <div className="boton-inicio">
            <Link to="/tablas"><button className="boton-siguiente" >Tabla Nutricional </button></Link>
            <Link to="/home"><button className="boton-siguiente" >Inicio </button></Link>
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
