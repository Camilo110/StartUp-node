import React from "react";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <section className="form-Register">
        
            <div className="container-logo">
                <img className="logo" src="img/HealthyNutritionSinBackground.png" alt="" />
            </div>

            <h4>Iniciar sesión</h4>

            <div className="container-input">
            <img src="/img/correo-electronico.png" alt="Correo Electrónico" />

                <input className="controls" type="email" name="Correo" id="correo" placeholder="Ingrese su correo" />
            </div>

            <div className="container-input">
                <img src="img/bloqueado.png" alt="password"/>
                <input className="controls" type="password" name="Contraseña" id="contraseña" placeholder="Ingrese una contraseña" />
            </div>
        
            <Link to="/objetivos"> <input className="buttons" type="submit" value="Iniciar sesión" /></Link>
            <p>¿Aún no eres miembro? <Link to="/registrarse">Registrate</Link></p>
        </section>
    );
}
export default Login