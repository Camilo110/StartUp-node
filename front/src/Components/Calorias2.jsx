import React , {useState} from 'react';

export function Objetivo2() {

  const[edad, setEdad]=useState('')
  const[gender, setGender]=useState('')

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  console.log(gender)}

  return (
    <div className="form-Calorias">
      <section>
        <h1>Calcular Calorias</h1>
        <div className="container-camilo">
          <img src="img/usuario.png" alt="Icon" />
          <input className="controls" type="text" value={edad} onChange={(e)=>{setEdad(e.target.value)}} placeholder="Ingrese su edad" />
        </div>
        <div className="container-camilo">
          <img src="img/usuario.png" alt="Icon" />
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
          <img src="img/correo-electronico.png" alt="Icon" />
          <input className="controls" type="email" name="Correo" id="correo" placeholder="Ingrese su correo" />
        </div>
        <div className="container-camilo">
          <img src="img/bloqueado.png" alt="Icon" />
          <input className="controls" type="password" name="Contraseña" id="contraseña" placeholder="Ingrese una contraseña" />
        </div>
        <div className="form-div">
          <input className="buttons" type="submit" value="Siguiente" />
        </div>
      </section>
    </div>
  );
}

export default Objetivo2;
