import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'



export function Objetivo2() {
  const params = useParams()

  const [edad, setEdad] = useState('')
  const [gender, setGender] = useState('')
  const { peso, setPeso } = useState('')
  const { altura, setAltura } = useState('')

  const navigate = useNavigate();


  const handleGenderChange = (event) => {
    console.log(params.id)
    setGender(event.target.value);
  }

  const obtenerCampos = () => {
    const datos = {
      edad: edad,
      genero: gender,
      peso: peso,
      altura: altura
    }
    navigate('/calorias3')
  }

  return (
    <div className="form-Calorias">
      <section>
        <h1>Calcular Calorias </h1>
        <div className="container-camilo">
          <img src="img/user.png" alt="Ícono de Usuario" />
          <input className="controls" type="text" value={edad} onChange={(e) => { setEdad(e.target.value) }} placeholder="Ingrese su edad" />
        </div>
        <div className="container-camilo">
          <img src="img/user.png" alt="Ícono de Usuario" />
          <h3>Sexo</h3>
          <div className="gender-selector">
            <select value={gender} onChange={handleGenderChange}>
              <option value="indefinido">Indefinido</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </div>
        </div>
        <div className="container-camilo">
          <img src="img/user.png" alt="Ícono de Usuario" />
          <input className="controls" type="text" value={altura} onChange={(e) => { setAltura(e.target.value) }} placeholder="Ingrese su edad" />
        </div>
        <div className="container-camilo">
          <img src="img/user.png" alt="Ícono de Usuario" />
          <input className="controls" type="text" value={peso} onChange={(e) => { setPeso(e.target.value) }} placeholder="Ingrese su edad" />
        </div>
        <div className="form-div">
          <button className="buttons" onClick={obtenerCampos}>Siguiente</button>
        </div>
      </section>
    </div>
  );
}

export default Objetivo2;
