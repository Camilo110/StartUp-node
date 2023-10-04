import React from "react";
import { useNavigate } from "react-router-dom";

export function Objetivos(props) {
  const navigate = useNavigate();

  const activityLevels = [
    {
      label: "Muy ligera",
      tooltip: "Actividades sedentarias, sin ejercicio.",
      value: 1.3,
      image: <img src="img\lipido.png" alt="1" />
    },
    {
      label: "Ligera",
      tooltip: "Actividades ligeras, como caminar ocasionalmente.",
      value: 1.5,
      image: <img src="img\lipido.png" alt="1" />
    },
    {
      label: "Moderada",
      tooltip: "Actividades moderadas, como caminar diariamente o hacer ejercicio ligero.",
      value: 1.7,
      image: <img src="img\lipido.png" alt="1" />
    },
    {
      label: "Intensa",
      tooltip: "Ejercicio intenso o entrenamiento regular.",
      value: 2.1,
      image: <img src="img\lipido.png" alt="1" />
    },
    {
      label: "Excepcional",
      tooltip: "Atletas de alto rendimiento.",
      value: 2.4,
      image: <img src="img\lipido.png" alt="1" />
    },
  ];

  function setData(dato) {
    props.propRes(dato);
    navigate('/calorias2');
  }

  return (
    <section className="objetivos">
      <h1>¿Cuál es tu objetivo?</h1>
      {activityLevels.map((level, index) => (
        <div key={index} className="container-buttons">
          {level.image}
          <button
            onClick={() => setData(level.value)}
            className="button"
            type="button"
            title={level.tooltip}
          >
            {level.label}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Objetivos;
