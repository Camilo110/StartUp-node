import React from "react";
import { useNavigate } from "react-router-dom";

export function Objetivos(props) {
  const navigate = useNavigate()


  function sapo(dato) {
    props.propRes(dato);
    navigate('/calorias2');
  }
  return (
    <section className="objetivos">
      <h1>¿Cuál es tu objetivo?</h1>
      <div className="container-buttons">
        <img src="img/lipido.png" alt="Ícono de Reducir grasa" />
        <button onClick={() => sapo(1)} className="button" type="button">Reducir Grasas</button>
      </div>
      <div className="container-buttons">
        <img src="img/dieta.png" alt="Ícono de Mantener peso" />
        <button onClick={() => sapo(2)} className="button" type="button">Mantener Peso</button>
      </div>
      <div className="container-buttons">
        <img src="img/musculo.png" alt="Ícono de Construir músculo" />
        <button onClick={() => sapo(3)} className="button" type="button">Construir Musculos</button>
        </div>
    </section>
  );
}


export default Objetivos;