import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios'

export function Login() {

    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function Login() {
        const data = {
            email: email.toLowerCase(),
            contraseña: contraseña
        }
        axios.post('/login', data).then(res => {
            if (res.data === "ok") {
                console.log(res.data);
                navigate('/calorias1')
            }else{
                setError(res.data)
            }
        }).catch(() => {
            setError('Ocurrió un Error')
        })
    }



    return (
        <div>
            <section className="form-Register">

                <div className="container-logo">
                    <img className="logo" src="img/HealthyNutritionSinBackground.png" alt="logo" />
                </div>

                <h4>Iniciar sesión</h4>

                <div className="container-input">
                    <img src="/img/correo-electronico.png" alt="Correo Electrónico" />

                    <input className="controls" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Ingrese su correo" />
                </div>

                <div className="container-input">
                    <img src="img/bloqueado.png" alt="password" />
                    <input className="controls" type="password"value={contraseña} onChange={(e)=>{setContraseña(e.target.value)}} placeholder="Ingrese una contraseña" />
                </div>

                <input className="buttons" onClick={Login} type="submit" value="Iniciar sesión" />
                <p className="error">{error}</p>
                <p>¿Aún no eres miembro? <Link to="/registrarse">Registrate</Link></p>
            </section>
        </div>
    );
}
export default Login