import React, {useState} from "react";
import axios from 'axios'
import { Link , useNavigate} from "react-router-dom";


export function Registrarse() {
     //hooks
     const[nombre, setNombre]=useState('')
     const[email, setEmail]=useState('')
     const[apellido, setApellido]=useState('')
     const[contraseña, setContraseña]=useState('')

     const navigate = useNavigate();
 
     function agregarUsuario(){
         var usuario = {
             nombre : nombre,
             email: email,
             apellido: apellido,
             contraseña: contraseña
         }
         console.log(usuario)
 
         axios.post('/adduser',usuario)
 
         .then(res=>{
            alert(res.data) 
            navigate('/');
         })
 
         .catch(err =>{console.log(err)})
     }
  return (
    <section className="form-Register">
      <h4>Formulario de Registro</h4>
      <div className="container-input">
        <img src="img/proteccion-del-usuario.png" alt="Ícono de Usuario" />
        <input className="controls" type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="Ingrese su nombre" />
      </div>
      <div className="container-input">
        <img src="img/user.png" alt="Ícono de Usuario" />
        <input className="controls" type="text" value={apellido} onChange={(e)=>{setApellido(e.target.value)}} placeholder="Ingrese sus apellidos" />
      </div>
      <div className="container-input">
        <img src="img/correo-electronico.png" alt="Ícono de Correo Electrónico" />
        <input className="controls" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Ingrese su correo" />
      </div>
      <div className="container-input">
        <img src="img/bloqueado.png" alt="Ícono de Contraseña" />
        <input className="controls" type="password" value={contraseña} onChange={(e)=>{setContraseña(e.target.value)}} placeholder="Ingrese una contraseña" />
      </div>

      <input onClick={agregarUsuario} className="buttons" type="submit" value="Registrarse" />
      <p>¿Ya eres miembro? <Link to="/login">Inicia tu sesión</Link></p>
    </section>
  );
}
export default Registrarse;
