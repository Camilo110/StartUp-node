import React from "react";
import { Link } from "react-router-dom";

export function Objetivos() {
  return (
    <section className="objetivos">
      <h1>¿Cuál es tu objetivo?</h1>
      <div className="container-buttons">
        <img src="img/lipido.png" alt="Ícono de Reducir grasa" />
        <Link to={`/calorias2/${1}`}> <button className="button" type="button">Reducir Grasas</button></Link>
      </div>
      <div className="container-buttons">
        <img src="img/dieta.png" alt="Ícono de Mantener peso" />
        <Link to={`/calorias2/${2}`}> <button className="button" type="button">Mantener Peso</button></Link>
      </div>
      <div className="container-buttons">
        <img src="img/musculo.png" alt="Ícono de Construir músculo" />
        <Link to={`/calorias2/${3}`}> <button className="button" type="button">Construir Musculos</button></Link>
        </div>
    </section>
  );
}


export default Objetivos;