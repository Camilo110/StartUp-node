
const usuario  = require("../model/usuario");


const register = async (req, res)=> {
    const {nombre, email, apellido, contraseña} = req.body;
    usuario.findOne({email}).then((usuario) =>{
        if(usuario){
            return res.json({mensaje : "ya existe usuario con ese correo"})
        }else if(!nombre || !correo || !contraseña || !apellido){
            return res.json({mensaje : "hay campos sin responder"})
        }else{
                    const nuevoUsuario = new modeloUsuario({
                        nombre: req.body.nombre,
                        email: req.body.email,
                        apellido: req.body.apellido,
                        contraseña: req.body.contraseña
                    })
                }
            })
        }




