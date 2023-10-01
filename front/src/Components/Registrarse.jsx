import React from "react";
import { Link } from "react-router-dom";

export function Registrarse() {
  return (
    <section className="form-Register">
      <h4>Formulario de Registro</h4>
      <div className="container-input">
        <img src="img/proteccion-del-usuario.png" alt="Ícono de Usuario" />
        <input className="controls" type="text" name="Nombre" id="nombre" placeholder="Ingrese su nombre" />
      </div>
      <div className="container-input">
        <img src="img/user.png" alt="Ícono de Usuario" />
        <input className="controls" type="text" name="Apellidos" id="apellidos" placeholder="Ingrese sus apellidos" />
      </div>
      <div className="container-input">
        <img src="img/correo-electronico.png" alt="Ícono de Correo Electrónico" />
        <input className="controls" type="email" name="Correo" id="correo" placeholder="Ingrese su correo" />
      </div>
      <div className="container-input">
        <img src="img/bloqueado.png" alt="Ícono de Contraseña" />
        <input className="controls" type="password" name="Contraseña" id="contraseña" placeholder="Ingrese una contraseña" />
      </div>

      <Link to="/"><input className="buttons" type="submit" value="Registrarse" /></Link>
      <p>¿Ya eres miembro? <Link to="/login">Inicia tu sesión</Link></p>
    </section>
  );
}
