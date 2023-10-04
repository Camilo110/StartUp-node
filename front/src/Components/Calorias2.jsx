import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default  function FormularioDatos({propData , res}) {
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState("indefinido");
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  
  const navigate = useNavigate()

  const handleSiguienteClick = () => {
    console.log(res)
    propData({
      sexo: sexo,
      edad: edad,
      altura: altura,
      peso:peso
    })
    navigate('/calorias3')

  }

  return (
    <div className="formulario">
      <h1>Ingrese sus datos {res}</h1>
      <form>
        <div className="campo">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Sexo:</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="indefinido">Indefinido</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="altura">Altura (cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <button className="boton-siguiente" onClick={handleSiguienteClick}>
          Siguiente
        </button>
      </form>
    </div>
  );
}
