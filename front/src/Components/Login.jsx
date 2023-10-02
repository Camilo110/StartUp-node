import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Calorias1 from "./Calorias1";


export function Login() {

    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[apellido, setApellido]=useState('')
    const[contraseña, setContraseña]=useState('')
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);
    

    function Login(){
        var usuario = {
            nombre : nombre,
            email: email,
            apellido: apellido,
            contraseña: contraseña
        }
        axios.post('/api/login', usuario ).then(res =>{
            console.log(res.data);
            setLogin(true)
        }).catch(err => {
            setError('Ocurrió un Error')
        })
    }

    

    return (
        <div>
            {login ? (
            <Calorias1 />
            ) : (

        <section className="form-Register">

            <div className="container-logo">
                <img className="logo" src="img/HealthyNutritionSinBackground.png" alt="logo" />
            </div>

            <h4>Iniciar sesión</h4>

            <div className="container-input">
                <img src="/img/correo-electronico.png" alt="Correo Electrónico" />

                <input className="controls" type="email" valueplaceholder="Ingrese su correo" />
            </div>

            <div className="container-input">
                <img src="img/bloqueado.png" alt="password" />
                <input className="controls" type="password" placeholder="Ingrese una contraseña" />
            </div>

            <input className="buttons" onClick={Login} type="submit" value="Iniciar sesión" />
            <p>{error}</p>
            <p>¿Aún no eres miembro? <Link to="/registrarse">Registrate</Link></p>
        </section>)}     
    </div>
    );
}
export default Login